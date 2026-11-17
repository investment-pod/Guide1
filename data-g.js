window.GUIDE = window.GUIDE || {};
/* Call / put options: new clauses, renamed labels, location map */
(function () {
  var byId = {}; GUIDE.contracts.forEach(function (c) { byId[c.id] = c; });
  function find(c, en) { for (var i = 0; i < c.clauses.length; i++) if (c.clauses[i].en === en) return i; return -1; }
  function insertAfter(cid, en, clause) { var c = byId[cid], i = find(c, en); c.clauses.splice(i < 0 ? c.clauses.length : i + 1, 0, clause); }

  /* Rename existing put clauses (Korean label only, so saved edits keep their keys) */
  byId.ts.clauses[find(byId.ts, "Redemption / Put")].ko = "상환권·풋옵션 (주식매수청구권)";
  byId.sha.clauses[find(byId.sha, "Put Option")].ko = "풋옵션 (주식매수청구권)";

  /* Term sheet */
  insertAfter("ts", "Redemption / Put", { l: "C", ko: "콜옵션", en: "Call Option",
    def: { ko: "창업자(또는 회사가 지정하는 자)가 투자자 주식 일부를 정해진 가격에 사올 수 있는 권리, 또는 투자자가 추가 지분을 사올 수 있는 권리.", en: "A right for founders (or a designee) to buy back part of the investor's shares at a set price, or for the investor to buy more." },
    must: { ko: "텀시트에서 부여 여부·대상 비율·행사 기간·가격 산식(최저 수익률)을 미리 정합니다. 본계약에서 새로 요구되면 경제 조건이 바뀌므로 텀시트 단계에서 막아야 합니다.", en: "Fix whether it exists, the portion, window and price formula (minimum return) in the term sheet; introducing it later changes the economics." },
    flag: { ko: "텀시트에 없던 창업자 콜옵션이 본계약 초안에 추가됨", en: "A founder call appears in the definitive draft without being in the term sheet" } });

  /* SSA */
  insertAfter("rcps", "Redemption Right", { l: "O", ko: "회사 상환권 (발행회사 콜)", en: "Company Redemption Right (Issuer Call)",
    def: { ko: "투자자가 아니라 회사가 자기 선택으로 RCPS를 상환할 수 있는 권리. 경제적으로 회사의 콜옵션과 같습니다.", en: "A right for the company, not the investor, to redeem the RCPS at its option; economically an issuer call." },
    must: { ko: "원칙적으로 부여하지 않습니다. 불가피하면 투자자 동의, 최저 수익률(연복리 [●]%) 보장, 전환권 행사 기회 보장(상환 통지 후 전환 가능)을 둡니다.", en: "Avoid; if unavoidable, require investor consent, a minimum compounded return, and a chance to convert after notice." },
    flag: { ko: "정관에 ‘회사의 선택에 따라 상환’만 있고 투자자 상환권이 없음", en: "Articles allow redemption only at the company's option" } });

  /* SHA */
  insertAfter("sha", "Put Option", { l: "C", ko: "콜옵션 (창업자·지정인 매수권)", en: "Call Option (Founder or Designee)",
    def: { ko: "창업자 또는 회사가 지정하는 제3자가 투자자 보유 주식의 일부를 정해진 기간·가격에 매수할 수 있는 권리. 투자자가 창업자 지분 희석을 보완해 주는 대가로 요구받는 경우가 많습니다.", en: "A right for founders or a designee to buy part of the investor's shares within a set window and price, often requested to offset founder dilution." },
    must: { ko: "대상 비율 상한(투자 주식의 [●]% 이내), 행사 기간(예: 납입 후 1–3년), 행사가격(투자원금 + 연복리 [●]% 이상, 최근 투자 가격과 비교해 큰 금액), 부분 행사 시 최소 단위, 지정인 범위(투자자 동의 필요), 회사·창업자의 계약 위반 중에는 행사 불가, IPO 절차 개시 후 행사 불가.", en: "Cap the portion, set the window (e.g., years 1–3), price at no less than principal plus a compounded return or the latest round price, minimum lots, designee approval, no exercise during breach or after an IPO process starts." },
    flag: { ko: "행사가격이 원금 수준이라 투자 수익을 사실상 넘겨줌, 지정인 제한 없음, 행사 기간이 상장 직전까지 열려 있음", en: "Price near principal, unrestricted designees, or a window running up to IPO" },
    model: { ko: "이해관계인은 납입일부터 [3]년 이내에 투자자가 보유한 본건 주식의 [30]% 이내에서 1회에 한하여 매수를 청구할 수 있으며, 매수가격은 1주당 인수가격에 연복리 [●]%를 적용한 금액과 직전 투자 라운드의 1주당 가격 중 큰 금액으로 한다. 회사 또는 이해관계인이 본 계약을 위반한 상태이거나 상장 예비심사 청구 이후에는 이를 행사할 수 없다.", en: "Within [three] years after Completion the Founders may, once, purchase up to [30]% of the Investor's Subscription Shares at the greater of the subscription price plus [●]% per annum compounded and the price per share of the latest financing. The option may not be exercised while the Company or a Founder is in breach or after an IPO application is filed." } });
  insertAfter("sha", "Call Option (Founder or Designee)", { l: "O", ko: "투자자 콜옵션 (추가 매수권)", en: "Investor Call Option",
    def: { ko: "투자자가 정해진 조건에서 창업자 주식을 사오거나, 후속 투자를 미리 정한 가격으로 할 수 있는 권리.", en: "A right for the investor to buy founder shares on set triggers, or to invest later at a pre-agreed price." },
    must: { ko: "발동 사유(창업자 퇴사·중대한 위반·경영권 변경)와 가격 산식, 후속 투자 옵션은 기업가치·금액·기한을 명시. 회사 신주를 정해진 가격에 받는 권리는 법정 증권(신주인수권 등)이 아니면 효력이 약하므로 법무 검토 필요.", en: "State triggers (founder departure, material breach, change of control) and price; for follow-on options state valuation, amount and deadline. A right to new shares at a fixed price may need a statutory instrument to be enforceable." },
    flag: { ko: "가격·기한 없는 ‘우선 협의권’ 수준에 그침", en: "Reduced to a vague right to negotiate" } });

  /* SPA */
  byId["spa-kr"].clauses.push({ l: "O", ko: "잔여 지분 콜·풋옵션", en: "Call and Put over Remaining Shares",
    def: { ko: "구주 일부만 매입할 때 매도인의 남은 지분을 나중에 사오거나(콜) 매도인에게 되팔 수 있게(풋) 하는 약정.", en: "When buying only part of a seller's stake, a right to buy the rest later (call) or sell back to the seller (put)." },
    must: { ko: "행사 기간, 가격 산식(고정가·직전 라운드 연동·공정가치 평가), 매도인 지분의 처분·담보 제공 금지, 풋 의무자의 지급 능력 확인(담보·보증).", en: "Window, price formula (fixed, latest round or fair value), lock-up and no pledge on the seller's remaining shares, credit support for the put obligor." },
    flag: { ko: "가격 산식 없이 ‘협의하여 정함’", en: "Price ‘to be agreed’" } });

  /* Jurisdiction notes */
  var J = {
    "k~ts~call-option": [["KR", "콜 행사가격이 시가보다 낮으면 증여세 문제가 생길 수 있어 세무 검토가 필요합니다.", "A call priced below market can raise gift tax issues; get tax review."], ["US", "미국 VC 딜에서는 창업자 콜옵션이 거의 없습니다.", "Founder calls are rare in US VC deals."], ["SG", "VIMA에는 표준 콜옵션 조항이 없어 별도 협상 사항입니다.", "VIMA has no standard call; negotiate separately."]],
    "k~rcps~company-redemption-right-issuer-call": [["KR", "상환주식은 정관에 회사 상환·주주 상환 중 어느 쪽인지 정해야 합니다(상법 제345조).", "The articles must state whether redemption is at the company's or the holder's option (Commercial Act Art. 345)."], ["SG", "회사 선택 상환도 s.70 요건을 충족해야 합니다.", "Company-option redemption still needs s.70 compliance."], ["TH", "회사가 자기주식을 가질 수 없어 상환 구조 자체가 어렵습니다.", "No treasury shares, so redemption is impractical."]],
    "k~sha~call-option-founder-or-designee": [
      ["KR", "국내 RCPS·CB 딜에서 최대주주 콜옵션이 흔합니다. 행사가격이 시가보다 낮으면 상증세법상 저가양수 증여 이슈가 있어 가격 산식을 시가 이상으로 둡니다.", "Founder calls are common in Korean RCPS and CB deals; price at or above market to avoid gift tax on low-price transfers."],
      ["US", "거의 쓰지 않으며, 요구 시 ROFR로 대체를 제안합니다.", "Rarely used; offer a ROFR instead."],
      ["SG", "계약상 권리로 유효하나 주식 양도 인지세가 붙습니다.", "Enforceable as a contract; stamp duty applies on transfer."],
      ["AE", "ADGM 홀딩 주식에 대해 설정하고 Articles 양도 제한과 맞춥니다.", "Grant over ADGM holdco shares; align with Articles transfer rules."],
      ["TH", "매수인이 외국인이 아니면 외국인 지분이 줄고, 외국인이면 FBA 한도를 확인합니다.", "Check FBA limits depending on whether the buyer is foreign."]],
    "k~sha~investor-call-option": [
      ["KR", "회사 신주를 정해진 가격에 받는 권리는 신주인수권부사채 등 법정 증권이 아니면 효력이 약합니다. 창업자 구주 매수 형태가 안전합니다.", "A right to new shares at a fixed price is weak unless issued as a statutory instrument; buying founder shares is safer."],
      ["US", "워런트(Warrant)로 설계하면 효력이 분명합니다.", "Use a warrant for clarity."],
      ["SG", "옵션·워런트 발행은 s.161 주주 승인이 필요할 수 있습니다.", "Options or warrants may need s.161 approval."],
      ["TH", "신주는 기존 주주 비례 배정 원칙이 있어 구주 매수 형태로 설계합니다.", "Pro-rata offer rules make founder-share purchases the better route."]],
    "k~spa-kr~call-and-put-over-remaining-shares": [
      ["KR", "풋 의무자가 개인이면 담보(주식 질권)를 받습니다. 저가 행사 시 증여세 검토가 필요합니다.", "Take a share pledge from individual obligors; check gift tax on low prices."],
      ["SG", "행사 시마다 인지세가 붙습니다.", "Each exercise attracts stamp duty."],
      ["TH", "행사 시 외국인 지분 합산을 다시 확인합니다.", "Re-check foreign aggregate on exercise."]]
  };
  Object.keys(J).forEach(function (k) { var o = {}; J[k].forEach(function (r) { o[r[0]] = { ko: r[1], en: r[2] }; }); GUIDE.jn[k] = o; });

  GUIDE.refs.push({ id: "k-giftt35", j: "KR", ko: "상속세 및 증여세법 제35조 (저가 양수 또는 고가 양도에 따른 이익의 증여)", en: "Inheritance and Gift Tax Act Art. 35", url: "https://www.law.go.kr/법령/상속세및증여세법/제35조" });
  GUIDE.refsOf["k~sha~call-option-founder-or-designee"] = ["k-giftt35"];
  GUIDE.refsOf["k~ts~call-option"] = ["k-giftt35"];
  GUIDE.refsOf["k~rcps~company-redemption-right-issuer-call"] = ["k-ca345", "s-ca70"];
  GUIDE.refsOf["k~spa-kr~call-and-put-over-remaining-shares"] = ["k-giftt35"];

  /* Where call and put options sit */
  GUIDE.optMap = [
    { doc: "ts", put: { clause: "Redemption / Put", ko: "상환권·풋옵션 – 발동 사유와 가격 원칙을 합의" }, call: { clause: "Call Option", ko: "콜옵션 – 부여 여부·비율·가격 원칙을 합의" } },
    { doc: "rcps", put: { clause: "Redemption Right", ko: "상환권 – 투자자가 회사에 상환 청구(풋 성격)" }, call: { clause: "Company Redemption Right (Issuer Call)", ko: "회사 상환권 – 회사 선택 상환(콜 성격), 원칙적으로 배제" } },
    { doc: "sha", put: { clause: "Put Option", ko: "풋옵션(주식매수청구권) – 위반 시 회사·이해관계인에게 매수 청구" }, call: { clause: "Call Option (Founder or Designee)", ko: "창업자 콜옵션 / 투자자 콜옵션(추가 매수권)" } },
    { doc: "spa-kr", put: { clause: "Call and Put over Remaining Shares", ko: "잔여 지분 풋옵션 – 매도인에게 되팔 권리" }, call: { clause: "Call and Put over Remaining Shares", ko: "잔여 지분 콜옵션 – 매도인 남은 지분 매수" } }
  ];
})();
