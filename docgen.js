/* Builds the sample contract (.docx) in the browser from the page's current content,
   so edits on the page flow into the downloaded file. Requires window.docx (docx@9.5.1 IIFE). */
window.GUIDE = window.GUIDE || {};
(function () {
  var TPL_ID = { nda: "nda", ts: "ts", loi: "loi", rcps: "ssa", sha: "sha", "spa-kr": "spa" };
  /* Korean article prefix -> page clause slug (headings follow the page's current clause names) */
  var ART = {
    nda: { "제2조": "definition-of-confidential-information", "제3조": "exclusions", "제4조": "permitted-purpose", "제5조": "representatives", "제6조": "compelled-and-regulatory-disclosure", "제8조": "return-or-destruction", "제9조": "no-obligation-no-agency", "제10조": "non-solicitation", "제12조": "term" },
    ssa: { "제2조": "issuance-of-shares", "제3조": "conditions-precedent", "제4조": "closing-and-payment", "제5조": "use-of-proceeds", "제6조": "company-representations-and-warranties", "제7조": "founder-representations", "제9조": "termination-before-closing", "제10조": "indemnification-ssa" },
    sha: { "제1조": "consent-and-consultation-matters", "제2조": "information-and-inspection", "제3조": "board-and-observer-rights", "제4조": "preemptive-right", "제5조": "founder-lock-up", "제7조": "drag-along", "제8조": "non-compete-and-full-time-commitment", "제9조": "stock-option-pool", "제10조": "put-option", "제10조의2": "call-option-founder-or-designee", "제11조": "penalty-and-indemnification", "제12조": "scope-of-founder-liability", "제13조": "most-favored-nation", "제14조": "exit-covenant", "제15조": "compliance-anti-corruption-sanctions", "제16조": "termination-and-disputes" },
    spa: { "제1조": "sale-shares", "제2조": "purchase-price-and-payment", "제5조": "seller-representations", "제7조": "assignment-of-investor-rights-deed-of-adherence", "제8조": "taxes", "제9조": "indemnification", "제9조의2": "call-and-put-over-remaining-shares" }
  };
  var LEVEL = { R: "필수", C: "권장", O: "선택" };
  var JUR = { KR: "한국", US: "미국", SG: "싱가포르", AE: "UAE", TH: "태국" };

  GUIDE.buildDocx = function (cid, lang, view) {
    var D = window.docx;
    if (!D) return Promise.reject(new Error("docx library not loaded"));
    var tid = TPL_ID[cid], t = GUIDE.TPL && GUIDE.TPL[lang] && GUIDE.TPL[lang][tid];
    if (!t) return Promise.reject(new Error("no template"));
    var Paragraph = D.Paragraph, TextRun = D.TextRun, Table = D.Table, TableRow = D.TableRow, TableCell = D.TableCell,
      WidthType = D.WidthType, AlignmentType = D.AlignmentType, BorderStyle = D.BorderStyle, ShadingType = D.ShadingType,
      Header = D.Header, Footer = D.Footer, PageNumber = D.PageNumber;
    var font = lang === "ko" ? "Malgun Gothic" : "Arial";
    var W = 9026, kids = [];
    var clauses = view.clauses(cid);              // current page state
    var bySlug = {}; clauses.forEach(function (k) { if (k.slug) bySlug[k.slug] = k; });
    function p(text, o) {
      o = o || {};
      return new Paragraph({ alignment: o.align, spacing: { after: o.after == null ? 100 : o.after, line: 300 }, indent: o.indent, keepNext: o.keepNext,
        children: [new TextRun({ text: String(text || ""), bold: o.bold, size: o.size, font: font, color: o.color })] });
    }
    function heading(text, size, before) {
      return new Paragraph({ keepNext: true, spacing: { before: before || 200, after: 80 }, children: [new TextRun({ text: text, bold: true, size: size || 22, font: font })] });
    }
    function cleanName(n) { return String(n || "").replace(/^\[블록체인\]\s*/, ""); }

    /* ---- Part 1: sample contract ---- */
    kids.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 320 }, children: [new TextRun({ text: t.title, bold: true, size: 32, font: font })] }));
    (t.intro || []).forEach(function (x) { kids.push(x ? p(x, { after: 140 }) : p("", { after: 60 })); });
    if (t.table) {
      var c1 = 2800, c2 = W - c1, b = { style: BorderStyle.SINGLE, size: 4, color: "B8C0CC" }, bd = { top: b, bottom: b, left: b, right: b };
      kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [c1, c2], rows: t.table.map(function (r) {
        return new TableRow({ children: [
          new TableCell({ width: { size: c1, type: WidthType.DXA }, borders: bd, shading: { type: ShadingType.CLEAR, fill: "EEF2F5", color: "auto" }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: r[0], bold: true, size: 20, font: font })] })] }),
          new TableCell({ width: { size: c2, type: WidthType.DXA }, borders: bd, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ spacing: { line: 280 }, children: [new TextRun({ text: r[1], size: 20, font: font })] })] })
        ] });
      }) }));
      kids.push(p("", { after: 120 }));
    }
    function section(arr, linkHeadings) {
      (arr || []).forEach(function (a) {
        var h = a.h;
        if (linkHeadings && lang === "ko" && ART[tid]) {
          var m = h.match(/^(제\d+조(?:의\d+)?)/);
          var sl = m && ART[tid][m[1]];
          var k = sl && bySlug[sl];
          if (k && !k.hidden) h = m[1] + " (" + cleanName(k.name) + ")";
        }
        kids.push(heading(h));
        a.p.forEach(function (x) {
          var sub = /^(\d+\.|[가-하]\.|\([a-z]\)|①|②|③|④)/.test(x) && !/^\d+\.\d/.test(x);
          kids.push(p(x, { indent: sub ? { left: 280 } : undefined }));
        });
      });
    }
    section(t.articles, true);
    if (t.closing) kids.push(p(t.closing, { after: 200 }));
    if (t.date) kids.push(p(t.date, { align: AlignmentType.CENTER, after: 240 }));
    var none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }, nb = { top: none, bottom: none, left: none, right: none };
    var sigLabel = lang === "ko" ? "(인)" : "Signature: ____________________";
    (t.parties || []).forEach(function (pt) {
      kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [2000, W - 2000], rows: [new TableRow({ children: [
        new TableCell({ width: { size: 2000, type: WidthType.DXA }, borders: nb, children: [new Paragraph({ children: [new TextRun({ text: pt[0], bold: true, size: 20, font: font })] })] }),
        new TableCell({ width: { size: W - 2000, type: WidthType.DXA }, borders: nb, children: [
          new Paragraph({ children: [new TextRun({ text: pt[1], size: 20, font: font })] }),
          new Paragraph({ children: [new TextRun({ text: (pt[2] ? pt[2] + "   " : "") + sigLabel, size: 20, font: font })] })
        ] })
      ] })] }));
      kids.push(p("", { after: 120 }));
    });
    if (t.annex) { kids.push(new Paragraph({ pageBreakBefore: true, children: [] })); section(t.annex, false); }

    /* ---- Part 2: review checklist from the page (always current) ---- */
    var today = new Date(); var ds = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    kids.push(new Paragraph({ pageBreakBefore: true, children: [] }));
    kids.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: lang === "ko" ? "부록. 조항별 검토 체크리스트" : "Appendix. Clause Review Checklist", bold: true, size: 28, font: font })] }));
    kids.push(p((lang === "ko" ? "전략 투자 가이드 기준 · 생성일 " : "From the Investment Pod guide · generated ") + ds + (lang === "ko" ? ". 페이지에서 수정한 내용이 반영되어 있습니다." : ". Reflects edits made on the page. Notes are in Korean."), { color: "5A6577", size: 18, after: 200 }));
    var lab = function (txt) { return new TextRun({ text: txt + "  ", bold: true, size: 19, font: font, color: "5A6577" }); };
    var line = function (label, text, color) {
      if (!text) return;
      kids.push(new Paragraph({ spacing: { after: 70, line: 290 }, indent: { left: 240 }, children: [lab(label), new TextRun({ text: text, size: 19, font: font, color: color })] }));
    };
    clauses.filter(function (k) { return !k.hidden; }).forEach(function (k, i) {
      kids.push(new Paragraph({ keepNext: true, spacing: { before: 220, after: 80 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "D7DCE3", space: 2 } },
        children: [new TextRun({ text: (i + 1) + ". " + cleanName(k.name), bold: true, size: 22, font: font }), new TextRun({ text: "   " + (k.nameEn || "") + "  [" + (LEVEL[k.level] || k.level) + "]", size: 18, font: font, color: "7A8494" })] }));
      line("정의", k.def);
      line("필수 기재사항 · 권장", k.must);
      line("English key provisions", k.enTerms);
      line("Red flag", k.flag, "B3261E");
      (k.flagMore || []).forEach(function (f) { kids.push(new Paragraph({ spacing: { after: 50, line: 280 }, indent: { left: 520, hanging: 200 }, children: [new TextRun({ text: "• " + f, size: 18, font: font, color: "B3261E" })] })); });
      (k.jn || []).forEach(function (j) { line("관할 · " + (JUR[j[0]] || j[0]), j[1]); });
      line("모델 문구", k.model);
    });

    var note = lang === "ko" ? "예시 양식 · 법률자문 아님 · 딜별로 법무팀·외부 자문사 검토 필요 · [●]는 기재 사항" : "Sample form only · not legal advice · review with Legal and outside counsel for each deal · [●] = to be completed";
    var doc = new D.Document({
      creator: "Investment Pod", title: t.title,
      styles: { default: { document: { run: { font: font, size: 21 } } } },
      sections: [{
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
        headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: note, size: 15, color: "7A8494", font: font })] })] }) },
        footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "7A8494", font: font })] })] }) },
        children: kids
      }]
    });
    return D.Packer.toBlob(doc);
  };
})();
