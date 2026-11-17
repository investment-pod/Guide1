window.GUIDE = window.GUIDE || {};
/* Scope: NDA, Term Sheet, LOI, SSA (RCPS), SHA, SPA. Ids kept stable so saved edits survive. */
(function () {
  var keep = ["nda", "ts", "rcps", "sha", "spa-kr"];
  var byId = {};
  GUIDE.contracts.forEach(function (c) { byId[c.id] = c; });

  var ts = byId.ts;
  ts.code = "3"; ts.title = { ko: "투자조건합의서 (Term Sheet)", en: "Term Sheet" };
  ts.when = { ko: "실사 착수 전후, 본계약 작성 전 주요 조건 확정", en: "Around diligence, before definitive agreements" };
  var nda = byId.nda; nda.code = "1";
  var ssa = byId.rcps; ssa.code = "4";
  ssa.title = { ko: "SSA – 신주인수계약 (RCPS 기준)", en: "SSA – Share Subscription Agreement (RCPS)" };
  ssa.law = { ko: "한국: 상법(종류주식은 정관 근거) / 해외: 회사 설립지 법 (싱가포르법·델라웨어법·ADGM 법·태국법)", en: "Korea: Commercial Act (class shares need a charter basis) / Overseas: law of incorporation (Singapore, Delaware, ADGM, Thailand)" };
  ssa.summary = { ko: "신주 인수 거래와 상환전환우선주(RCPS)의 권리를 정합니다. 우선주 권리는 정관에 근거가 있어야 효력이 있으므로 계약과 정관 변경안을 함께 검토합니다. 미국은 NVCA의 Stock Purchase Agreement와 정관(COI)으로 나뉘어 들어갑니다.", en: "Covers the subscription and the RCPS terms. Preferred rights need a basis in the constitution, so review the charter amendment with the agreement. In the US, the NVCA Stock Purchase Agreement and the COI carry the same content." };
  ssa.when = { ko: "가격이 확정된 신주 라운드 (국내·해외 공통)", en: "Priced primary rounds, Korean or cross-border" };
  var sha = byId.sha; sha.code = "5";
  sha.when = { ko: "신주·구주 투자와 함께 체결", en: "Signed with any primary or secondary investment" };
  sha.title = { ko: "SHA – 주주간계약", en: "SHA – Shareholders’ Agreement" };
  sha.law = { ko: "한국: 한국법 / 해외: 싱가포르·ADGM·태국은 SHA 한 문서, 미국은 IRA·Voting·ROFR & Co-Sale 세 문서로 나뉨", en: "Korea: Korean law / Overseas: one SHA in Singapore, ADGM and Thailand; the US splits it into IRA, Voting and ROFR & Co-Sale agreements" };
  var spa = byId["spa-kr"]; spa.code = "6";
  spa.title = { ko: "SPA – 주식매매계약 (구주)", en: "SPA – Share Purchase Agreement (Secondary)" };

  var loi = {
    id: "loi", deal: "common", code: "2",
    title: { ko: "투자의향서 (LOI)", en: "Letter of Intent (LOI)" },
    when: { ko: "첫 미팅 후, 실사 착수 전 투자 의사를 공식화할 때", en: "After first meetings, to formalise interest before diligence" },
    parties: { ko: "투자자 발신, 회사 확인 서명", en: "Issued by the investor, countersigned by the company" },
    law: { ko: "본계약과 같은 준거법", en: "Same governing law as the main deal" },
    summary: { ko: "텀시트보다 앞 단계의 짧은 서신으로, 투자 의향과 예비 조건 범위, 실사 계획, 내부 승인 일정을 알립니다. 비밀유지·비용·준거법을 제외하면 구속력이 없다는 점을 분명히 해야 합니다. 딜에 따라 LOI 없이 바로 텀시트로 가기도 합니다.", en: "A short letter before the term sheet setting out interest, indicative ranges, diligence plan and approval timeline. Make clear that only confidentiality, costs and governing law bind. Some deals skip the LOI and go straight to a term sheet." },
    clauses: [
      { l: "R", ko: "투자 개요", en: "Proposed Investment",
        def: { ko: "증권 종류, 예정 금액, 기업가치 범위.", en: "Instrument, indicative amount and valuation range." },
        must: { ko: "단일 숫자보다 범위로 표기하고 ‘실사 결과에 따라 확정’ 명시.", en: "Use ranges rather than a single figure and state they depend on diligence." },
        flag: { ko: "확정 기업가치를 기재해 협상 여지 상실", en: "A fixed valuation that removes negotiating room" } },
      { l: "C", ko: "주요 조건 방향", en: "Key Terms",
        def: { ko: "텀시트에서 협의할 투자자 보호 조건의 범주.", en: "Categories of protection to be agreed in the term sheet." },
        must: { ko: "우선주 권리, 정보권, 사전동의권, 신주인수권, 주식매수청구권 등을 ‘통상 조건’으로 예고.", en: "Signal customary protections: preference, information, vetoes, pre-emption, put." },
        flag: { ko: "—", en: "—" } },
      { l: "R", ko: "실사 계획", en: "Due Diligence",
        def: { ko: "실사 범위와 기간, 요청 자료.", en: "Scope, timing and request list." },
        must: { ko: "법률·회계·세무 실사 기간과 실사 요청자료 목록 첨부.", en: "Legal, financial and tax review period with the request list attached." },
        flag: { ko: "—", en: "—" } },
      { l: "R", ko: "내부 승인과 규제 조건", en: "Approvals and Regulatory Conditions",
        def: { ko: "투자 실행 전 필요한 당사 승인과 법령상 절차.", en: "Our approvals and legal steps before investing." },
        must: { ko: "투자심의위원회 승인, 금산법·외국환거래법상 승인·신고, 미국 대상은 CFIUS 검토를 조건으로 명시.", en: "IC approval, Art. 24 and FX filings, and CFIUS analysis for US targets as conditions." },
        flag: { ko: "내부 승인 조건 누락 → 투자 확약으로 오해", en: "No approval condition, read as a commitment" } },
      { l: "R", ko: "비구속성", en: "Non-binding Nature",
        def: { ko: "투자 의무가 없다는 확인.", en: "No obligation to invest." },
        must: { ko: "비밀유지·비용·준거법만 구속력 있고 나머지는 구속력 없음을 조항 번호로 특정.", en: "Identify by number the only binding paragraphs: confidentiality, costs and governing law." },
        flag: { ko: "구분 없음", en: "No distinction" },
        model: { ko: "본 의향서는 제6항부터 제8항까지를 제외하고는 법적 구속력이 없으며, 당사자에게 투자를 실행하거나 받을 의무를 발생시키지 아니한다.", en: "Except for paragraphs 6 to 8, this letter is not legally binding and creates no obligation to make or accept an investment." } },
      { l: "C", ko: "독점협상", en: "Exclusivity",
        def: { ko: "일정 기간 다른 투자자와 협상하지 않을 의무.", en: "No-shop period." },
        must: { ko: "LOI 단계에서는 생략하거나 짧게(2–4주). 본격적인 독점은 텀시트에서.", en: "Omit or keep short (2–4 weeks) at LOI stage; full exclusivity belongs in the term sheet." },
        flag: { ko: "당사만 구속되는 일방적 독점", en: "Exclusivity binding only us" } },
      { l: "R", ko: "비밀유지·비용·준거법", en: "Confidentiality, Costs, Governing Law",
        def: { ko: "LOI에서 구속력을 갖는 조항.", en: "The binding provisions." },
        must: { ko: "비밀유지(임직원·자문사·감독당국 공개 예외), 각자 비용 부담, 준거법.", en: "Confidentiality with carve-outs for personnel, advisers and regulators; own costs; governing law." },
        flag: { ko: "—", en: "—" } },
      { l: "R", ko: "유효기간", en: "Expiry",
        def: { ko: "회사 회신 기한.", en: "Deadline for countersignature." },
        must: { ko: "회신 기한 도과 시 자동 실효.", en: "Lapses automatically if not countersigned in time." },
        flag: { ko: "기한 없음", en: "No expiry" } }
    ]
  };

  GUIDE.contracts = [nda, loi, ts, ssa, sha, spa];
  keep.concat(["loi"]).forEach(function (id) { GUIDE.jurOf[id] = ["ALL"]; GUIDE.groupOf[id] = "doc"; });

  GUIDE.files = {
    nda: { ko: "ko-nda.docx", en: "en-nda.docx" }, ts: { ko: "ko-ts.docx", en: "en-ts.docx" }, loi: { ko: "ko-loi.docx", en: "en-loi.docx" },
    rcps: { ko: "ko-ssa.docx", en: "en-ssa.docx" }, sha: { ko: "ko-sha.docx", en: "en-sha.docx" }, "spa-kr": { ko: "ko-spa.docx", en: "en-spa.docx" }
  };
  GUIDE.fileNames = {
    "ko-nda.docx": "NDA_비밀유지계약서_예시.docx", "ko-ts.docx": "TermSheet_투자조건합의서_예시.docx", "ko-loi.docx": "LOI_투자의향서_예시.docx",
    "ko-ssa.docx": "SSA_신주인수계약서_RCPS_예시.docx", "ko-sha.docx": "SHA_주주간계약서_예시.docx", "ko-spa.docx": "SPA_주식매매계약서_예시.docx",
    "en-nda.docx": "NDA_Mutual_Non-Disclosure_Agreement_Sample.docx", "en-ts.docx": "TermSheet_Series_Preferred_Sample.docx", "en-loi.docx": "LOI_Letter_of_Intent_Sample.docx",
    "en-ssa.docx": "SSA_Share_Subscription_Agreement_RCPS_Sample.docx", "en-sha.docx": "SHA_Shareholders_Agreement_Sample.docx", "en-spa.docx": "SPA_Share_Purchase_Agreement_Sample.docx"
  };

  /* Document flow table replaces the old matrix */
  GUIDE.flow = [
    { id: "nda", stage: { ko: "1. 초기 검토", en: "1. Screening" }, bind: { ko: "전체 구속", en: "Fully binding" }, who: { ko: "회사 또는 투자자 양식", en: "Either side's form" } },
    { id: "loi", stage: { ko: "2. 투자 의향", en: "2. Indication of interest" }, bind: { ko: "비밀유지·비용·준거법만", en: "Confidentiality, costs, law only" }, who: { ko: "투자자", en: "Investor" } },
    { id: "ts", stage: { ko: "3. 조건 합의", en: "3. Terms agreed" }, bind: { ko: "독점·비밀유지·비용·준거법만", en: "Exclusivity, confidentiality, costs, law only" }, who: { ko: "리드 투자자", en: "Lead investor" } },
    { id: "rcps", stage: { ko: "4. 본계약 (신주)", en: "4. Definitive (primary)" }, bind: { ko: "전체 구속", en: "Fully binding" }, who: { ko: "리드 투자자 자문사", en: "Lead investor's counsel" } },
    { id: "sha", stage: { ko: "4. 본계약 (주주권리)", en: "4. Definitive (rights)" }, bind: { ko: "전체 구속", en: "Fully binding" }, who: { ko: "리드 투자자 자문사", en: "Lead investor's counsel" } },
    { id: "spa-kr", stage: { ko: "4. 본계약 (구주)", en: "4. Definitive (secondary)" }, bind: { ko: "전체 구속", en: "Fully binding" }, who: { ko: "매수인 또는 매도인", en: "Buyer or seller" } }
  ];

  /* Jurisdiction notes per clause: key -> {KR|US|SG|AE|TH: {ko, en}} */
  GUIDE.jn = {
    "k~rcps~issuance-of-shares": {
      KR: { ko: "정관에 제3자 배정 근거와 종류주식 내용이 있어야 합니다.", en: "Articles must allow third-party allotment and describe the class." },
      US: { ko: "우선주 권리는 COI에 넣고 주 정부에 제출합니다.", en: "Preferred terms go in the COI filed with the state." },
      SG: { ko: "s.161 주주 승인과 정관상 선매권 포기가 필요합니다.", en: "s.161 shareholder approval and pre-emption waivers." },
      AE: { ko: "ADGM 홀딩에서 발행하고 Articles 변경을 등록합니다. 온쇼어 회사는 종류주식 발행이 원칙적으로 어렵습니다.", en: "Issue at the ADGM holdco and register the Articles; onshore companies generally cannot issue other classes." },
      TH: { ko: "신주는 기존 주주에게 비례 배정이 원칙이라 전원의 포기서가 필요합니다. 우선주 권리는 정관(AoA)에 등기합니다.", en: "Pro-rata offer to existing holders requires waivers; register preference rights in the AoA." } },
    "k~rcps~redemption-right": {
      KR: { ko: "배당가능이익 범위에서만 상환됩니다. 미상환분 이월·지연이자를 명시하세요.", en: "Only out of distributable profits; provide carry-forward and default interest." },
      US: { ko: "미국에서는 상환권이 드물고, 있더라도 5년 이후입니다.", en: "Rare in the US; if any, after year 5." },
      SG: { ko: "s.70: 정관 근거, 완납 주식, 이익·신주발행대금·지급능력 진술 요건을 충족해야 합니다.", en: "s.70: constitutional basis, fully paid, funded from profits, fresh issue or capital with a solvency statement." },
      AE: { ko: "ADGM 회사법상 자본유지 규정 범위에서 가능. 홀딩 레벨에서 설계하세요.", en: "Subject to ADGM capital maintenance; design at the holdco." },
      TH: { ko: "회사가 자기주식을 가질 수 없어 상환 구조가 어렵습니다. 창업자 풋으로 대체하세요.", en: "No treasury shares, so redemption is impractical; use a founder put." } },
    "k~rcps~conversion-price-adjustment-refixing": {
      KR: { ko: "리픽싱 하한은 액면가입니다.", en: "Refixing floor is par value." },
      US: { ko: "Broad-based 가중평균이 표준입니다.", en: "Broad-based weighted average is standard." },
      TH: { ko: "전환 시 신주 발행 절차(비례 배정 포기)가 다시 필요할 수 있습니다.", en: "Conversion may again require the pro-rata offer and waivers." } },
    "k~rcps~company-representations-and-warranties": {
      US: { ko: "NVCA 관행상 진술·보장 위반 손해배상은 없어 실사가 유일한 보호입니다.", en: "No indemnity under NVCA practice; diligence is the only protection." },
      SG: { ko: "보증인(회사·창업자)의 손해배상이 일반적입니다.", en: "Indemnities from the company and founders are customary." },
      TH: { ko: "외국인 지분 합산이 외국인사업법 제한에 걸리지 않는다는 진술, 명의신탁 없음 진술을 추가하세요.", en: "Add reps on FBA foreign status and no nominee shareholding." } },
    "k~sha~put-option": {
      KR: { ko: "회사의 자기주식 취득 제한이 있으므로 이해관계인을 함께 의무자로 두되 책임 범위를 한정합니다.", en: "Treasury-share limits apply; add founders as obligors with limited liability." },
      SG: { ko: "회사 매수는 자사주 취득·재무지원 규정을 따라야 합니다.", en: "Company purchases must follow buy-back and financial assistance rules." },
      TH: { ko: "회사는 매수 의무자가 될 수 없습니다. 창업자·홀딩을 의무자로 하고 주식 질권을 받으세요.", en: "The company cannot be the obligor; use founders or a holdco with a share pledge." } },
    "k~sha~consent-and-consultation-matters": {
      AE: { ko: "온쇼어 자회사 단계 행위(지분 처분·담보·차입)까지 동의 사항에 포함하세요.", en: "Extend consents to onshore subsidiary actions." },
      SG: { ko: "자회사(태국 등) 행위도 유보사항에 포함하세요.", en: "Cover subsidiaries (e.g. Thailand) in reserved matters." },
      US: { ko: "NVCA에서는 정관(COI)의 Protective Provisions에 들어갑니다.", en: "Under NVCA this sits in the COI protective provisions." } },
    "k~sha~preemptive-right": {
      SG: { ko: "정관상 선매권과 함께 운영됩니다.", en: "Works alongside constitutional pre-emption." },
      TH: { ko: "법정 비례 배정 원칙과 겹치므로 계약상 권리와 맞춰 쓰세요.", en: "Overlaps the statutory pro-rata offer; align the two." },
      US: { ko: "IRA의 Right of First Offer에 들어갑니다.", en: "Sits in the IRA right of first offer." } },
    "k~sha~termination-and-disputes": {
      KR: { ko: "상장 시 종료 조항이 없으면 상장심사가 지연될 수 있습니다.", en: "Without IPO termination, listing review may be delayed." },
      SG: { ko: "SIAC 중재(싱가포르 중재지)가 일반적입니다.", en: "SIAC arbitration seated in Singapore is common." },
      AE: { ko: "ADGM 법·ADGM Courts 또는 중재, 온쇼어 집행 경로를 확인하세요.", en: "ADGM law and courts or arbitration; confirm onshore enforcement." },
      TH: { ko: "계약은 싱가포르법 + SIAC를 쓰고, 뉴욕협약으로 태국에서 집행합니다.", en: "Singapore law and SIAC, enforced in Thailand under the New York Convention." } },
    "k~spa-kr~taxes": {
      KR: { ko: "증권거래세와 비거주자 매도인 원천징수를 확인하세요.", en: "Securities transaction tax; withholding for non-resident sellers." },
      SG: { ko: "주식 양도 인지세가 있습니다(매수인 부담 관행).", en: "Stamp duty on transfers, usually paid by the buyer." },
      TH: { ko: "주식 양도 인지세와 매도인 양도소득 과세를 확인하세요.", en: "Stamp duty and seller capital gains tax." } },
    "k~spa-kr~transfer-mechanics": {
      SG: { ko: "ACRA 전자 주주명부 반영이 소유권 증빙입니다.", en: "ACRA electronic register is the evidence of title." },
      AE: { ko: "ADGM 주주명부 갱신을 확인하세요.", en: "Confirm the ADGM register update." },
      TH: { ko: "서면 양도증서와 주주명부 기재가 필요합니다.", en: "Written transfer instrument and register entry." },
      US: { ko: "Carta 등 전자 주권 이전과 회사 장부 반영을 확인하세요.", en: "Electronic certificates (e.g. Carta) and company ledger." } },
    "k~ts~security-and-amount": {
      US: { ko: "초기 라운드는 SAFE로 대체되기도 합니다.", en: "Early rounds may use a SAFE instead." },
      AE: { ko: "투자 법인은 ADGM 홀딩으로 하세요.", en: "Invest at the ADGM holdco." },
      TH: { ko: "우선주·풋이 필요하면 싱가포르 홀딩 플립을 선행조건으로 검토하세요.", en: "Consider a Singapore flip as a condition if preferences and puts are needed." } }
  };

  /* Extra footnotes for clauses in scope */
  GUIDE.refsOf["k~rcps~redemption-right"] = ["k-ca345", "k-ca462", "s-ca70", "s-acra", "t-dla"];
  GUIDE.refsOf["k~rcps~issuance-of-shares"] = ["k-ca418", "s-ca161", "t-pp", "a-ccl"];
  GUIDE.refsOf["k~rcps~company-representations-and-warranties"] = ["t-fba"];
  GUIDE.refsOf["k~sha~put-option"] = ["s-ca76", "t-dla"];
  GUIDE.refsOf["c~sha"] = ["u-nvca"];
  GUIDE.refsOf["c~nda"] = ["k-fscma45"];
  GUIDE.refsOf["c~ts"] = ["u-nvca", "s-vima"];
  GUIDE.refsOf["c~loi"] = ["k-fisia24", "k-fxreg", "u-cfius"];
  GUIDE.refsOf["c~spa-kr"] = [];
  GUIDE.refsOf["c~rcps"] = ["k-ca345", "k-ca346", "u-dgcl", "s-ca", "a-adgm"];

  /* closing list: keep only items relevant to these six documents (all of them are) */
})();
