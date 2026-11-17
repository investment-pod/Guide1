window.GUIDE = window.GUIDE || {};
/* Blockchain / virtual-asset company investments. Items carry bc:true to show a "블록체인" tag. */
(function () {
  var byId = {}; GUIDE.contracts.forEach(function (c) { byId[c.id] = c; });
  var slug = function (s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80); };
  function add(cid, after, k, terms, jn, refs) {
    var c = byId[cid], i = -1;
    if (after) for (var x = 0; x < c.clauses.length; x++) if (c.clauses[x].en === after) i = x;
    k.bc = true;
    c.clauses.splice(i < 0 ? c.clauses.length : i + 1, 0, k);
    var key = "k~" + cid + "~" + slug(k.en);
    GUIDE.enTerms[key] = terms;
    var o = {}; (jn || []).forEach(function (r) { o[r[0]] = { ko: r[1], en: r[2] }; }); GUIDE.jn[key] = o;
    if (refs) GUIDE.refsOf[key] = refs;
  }

  /* ---------- Pre-investment checks ---------- */
  var A = [
  { sev: "high", bc: true,
    t: { ko: "[블록체인] 금융회사의 가상자산 관련 투자 제한", en: "Blockchain: limits on financial institutions' virtual-asset exposure" },
    d: { ko: "금융당국은 2017년 ‘가상통화 관련 긴급대책’에 따른 행정지도(금융회사의 가상통화 보유·매입·담보취득·지분투자 금지 취지)가 여전히 유효하다는 입장을 보여 왔습니다. 2026년 들어 금융회사의 가상자산 거래소 지분 확보 등 ‘금가분리’ 완화 논의가 있지만 제도는 아직 정비 중입니다. 피투자사가 블록체인 기술회사인지, 가상자산을 발행·보유·중개하는 회사인지에 따라 허용 여부가 달라질 수 있습니다.", en: "Regulators have treated the 2017 guidance restricting financial institutions' holding, purchase, collateral use of and equity investment in virtual currency as still valid. Easing is under discussion in 2026 but not settled. The answer may differ for a blockchain technology company versus a token issuer, holder or exchange." },
    a: { ko: "투자 전 준법감시인을 통해 사업 모델(기술 개발·토큰 발행·거래소·보관 등)별 허용 여부를 확인하고, 필요하면 금융당국 사전 질의. 회사의 가상자산 보유 규모를 실사 항목에 넣을 것", en: "Get Compliance's view by business model before investing, consult regulators if needed, and diligence the company's own crypto holdings." } },
  { sev: "high", bc: true,
    t: { ko: "[블록체인] 피투자사가 가상자산사업자이면 우리가 대주주 심사를 받을 수 있음", en: "Blockchain: we may face shareholder screening if the target is a licensed VASP" },
    d: { ko: "한국은 2026년 8월 20일 시행된 개정 특금법으로 가상자산사업자 신고 시 대주주(최대주주·10% 이상 주요주주·사실상 영향력 행사자)까지 심사합니다. 태국은 디지털자산 사업자의 주요주주가 SEC 승인을 받아야 하고, 2026년 주요주주 정의가 넓어졌습니다. 싱가포르는 2025년 6월 30일부터 해외 고객만 상대하는 디지털토큰 서비스에도 라이선스가 필요해졌고 MAS는 이 라이선스를 거의 내주지 않겠다는 입장입니다. UAE는 VARA(두바이), FSRA(ADGM), 연방 차원의 새 프레임워크 등 관할별로 라이선스가 다릅니다.", en: "Korea's amended Act on Reporting and Use of Specified Financial Transaction Information (effective 20 Aug 2026) screens VASP major shareholders (largest holder, 10%+ holders, de facto controllers). Thailand requires SEC approval of major shareholders of digital asset businesses, with a broader definition from 2026. Singapore requires a DTSP licence even for offshore-only services from 30 June 2025 and MAS will generally not grant one. The UAE splits licensing between VARA, the ADGM FSRA and a new federal framework." },
    a: { ko: "피투자사의 라이선스 현황을 확인하고, 우리 지분율이 대주주·주요주주 기준에 걸리는지 계산. 걸리면 규제 승인·신고를 선행조건으로, 지분율 상한을 계약에 둘 것", en: "Check the target's licences and whether our stake makes us a major shareholder; if so, make approvals a condition and cap the stake." } },
  { sev: "high", bc: true,
    t: { ko: "[블록체인] 토큰 권리를 받을 수 있는가", en: "Blockchain: can we hold token rights?" },
    d: { ko: "블록체인 스타트업 투자에서는 지분과 함께 향후 발행될 토큰을 받는 권리(토큰 워런트, 토큰 사이드레터)를 주는 경우가 많습니다. 증권사가 토큰을 직접 보유하는 것은 위 행정지도와 충돌할 수 있고, 회계 처리(가상자산 분류), 보관(지갑·커스터디), 세무, 해당 토큰이 증권인지 여부까지 문제가 됩니다.", en: "Startups often offer token rights alongside equity (token warrants or side letters). Holding tokens directly may conflict with the guidance above and raises accounting, custody, tax and securities-law questions." },
    a: { ko: "토큰 권리는 받지 않거나(포기), 받을 수 있는 구조인지 준법·회계·세무 의견을 먼저 받을 것. 받지 않는다면 ‘토큰 대신 지분 가치로 보전’하는 조항을 협상", en: "Either waive token rights or confirm with Compliance, Accounting and Tax first; if waived, negotiate equity-value compensation." } },
  { sev: "med", bc: true,
    t: { ko: "[블록체인] 미국 가상자산 규제는 아직 확정되지 않음", en: "Blockchain: US crypto rules remain unsettled" },
    d: { ko: "미국은 2025년 스테이블코인 법(GENIUS Act)이 제정되었지만, 가상자산 시장 구조법(CLARITY Act)은 2026년 9월 상원 절차 표결에서 부결되어 이번 의회에서는 사실상 폐기되었습니다. 어떤 토큰이 증권(SEC)인지 상품(CFTC)인지는 여전히 감독기관 판단과 사례에 의존합니다.", en: "The GENIUS Act (stablecoins) became law in 2025, but the CLARITY Act failed a Senate cloture vote in September 2026. Whether a token is a security (SEC) or a commodity (CFTC) still depends on agency action and case law." },
    a: { ko: "미국 피투자사의 토큰 판매 방식(사모·공모, 미국인 대상 여부)과 SEC·CFTC 리스크를 진술·보장과 실사에 반영", en: "Diligence how tokens were sold (private or public, US persons) and reflect SEC and CFTC risk in warranties." } }
  ];
  GUIDE.assumptions = GUIDE.assumptions.concat(A);

  /* ---------- Contract clauses ---------- */
  add("ts", "Call Option", { l: "C", ko: "[블록체인] 토큰 권리", en: "Token Rights",
    def: { ko: "회사가 앞으로 토큰을 발행할 때 투자자가 일정 비율의 토큰을 받거나, 받지 않는 대신 다른 보상을 받는 조건.", en: "Whether the investor receives a share of any future token, or other compensation instead." },
    must: { ko: "토큰 발행 계획 유무, 투자자 배분 비율(지분율 연동 여부), 락업·베스팅, 토큰을 받을 수 없을 때의 대체 보상(지분 추가 배정·현금), 토큰 발행에 대한 투자자 동의권.", en: "Token plans, investor allocation, lock-up and vesting, fallback compensation if we cannot hold tokens, and consent over token launches." },
    flag: { ko: "토큰 발행 시 투자자 몫에 대한 언급이 없는 경우입니다. 회사 가치가 지분이 아니라 토큰으로 빠져나가면, 우리 지분은 남아 있어도 실제 가치가 크게 줄어듭니다.", en: "" } },
    ["Token rights / token side letter", "Allocation (pro rata to equity)", "Lock-up and vesting", "Alternative compensation", "Consent to token generation event"],
    [["KR", "증권사가 토큰을 직접 받을 수 있는지 준법 검토가 먼저입니다.", "Confirm with Compliance whether we may hold tokens at all."], ["US", "토큰이 증권으로 판단될 수 있어 판매 방식과 대상(미국인 여부)을 확인합니다.", "Tokens may be securities; check how and to whom they are sold."], ["SG", "토큰 관련 서비스는 MAS 라이선스 대상인지 확인합니다.", "Check whether token services need an MAS licence."]]);

  add("rcps", "Company Representations and Warranties", { l: "R", ko: "[블록체인] 가상자산 규제 진술·보장", en: "Virtual Asset Regulatory Warranties",
    def: { ko: "회사가 가상자산 관련 법규를 지키고 있고 필요한 라이선스를 갖고 있다는 보장.", en: "Warranties that the company complies with virtual-asset laws and holds the licences it needs." },
    must: { ko: "영위 사업과 필요한 라이선스(국가별) 보유·신청 현황, 토큰 발행·판매 내역과 판매 대상, 토큰이 증권에 해당하지 않는다는 법률 검토 여부, 자금세탁방지·트래블룰 준수, 해킹·유출 사고 이력, 회사 보유 가상자산 내역과 보관 방법, 제재 대상 주소·이용자와의 거래 없음.", en: "Licences by country, token issuance and sales history, legal analysis on securities status, AML and Travel Rule compliance, hacks or breaches, the company's own crypto holdings and custody, no dealings with sanctioned addresses." },
    flag: { ko: "‘필요한 인허가를 모두 보유’라는 일반 문구만 있는 경우입니다. 가상자산 사업은 국가마다 라이선스가 달라, 어느 나라에서 어떤 허가를 가졌는지 구체적으로 적지 않으면 나중에 무허가 영업이 드러나도 책임을 묻기 어렵습니다.", en: "" } },
    ["Virtual asset licences (by jurisdiction)", "Token issuance and sales history", "Securities-law analysis", "AML / Travel Rule compliance", "Security incidents and hacks", "Treasury holdings and custody", "Sanctions screening of wallets"],
    [["KR", "가상자산사업자 신고(FIU) 수리 여부와 대주주 심사 결과를 확인합니다.", "Check FIU VASP registration and major-shareholder screening."], ["US", "토큰 판매가 Reg D·Reg S 등 면제에 따라 이뤄졌는지 확인합니다.", "Check token sales relied on Reg D or Reg S exemptions."], ["SG", "DTSP 등 MAS 라이선스 필요 여부와 보유 현황을 확인합니다.", "Check whether a DTSP or other MAS licence is needed and held."], ["AE", "VARA·FSRA 등 어느 기관의 라이선스인지, 사업 범위와 일치하는지 확인합니다.", "Check which regulator (VARA, FSRA) licensed it and whether scope matches."], ["TH", "SEC 디지털자산 사업 라이선스와 주요주주 승인 현황을 확인합니다.", "Check SEC digital asset licence and major-shareholder approvals."]],
    ["k-sfti", "t-dab", "s-dtsp", "a-uae-va"]);

  add("rcps", "Conditions Precedent", { l: "R", ko: "[블록체인] 가상자산 규제 승인 선행조건", en: "Virtual Asset Regulatory Approvals",
    def: { ko: "피투자사가 라이선스를 가진 가상자산사업자일 때, 우리 지분 취득에 필요한 규제 신고·승인을 받는 조건.", en: "Regulatory approvals or filings needed for our stake in a licensed VASP." },
    must: { ko: "대주주·주요주주 해당 여부 계산, 국가별 승인·신고(한국 FIU, 태국 SEC, UAE 감독기관 등) 완료를 선행조건으로, 승인 지연 시 롱스톱 데이트 연장, 승인 불가 시 무의결권 주식 또는 지분 축소 대안.", en: "Compute major-shareholder status; make approvals a condition; extend the long-stop date if delayed; fall back to non-voting shares or a smaller stake if refused." },
    flag: { ko: "규제 승인이 필요한데 선행조건에서 빠진 경우입니다. 승인 없이 지분을 취득하면 피투자사의 라이선스 유지가 위태로워지고, 우리도 제재 대상이 될 수 있습니다.", en: "" } },
    ["Regulatory approvals (major shareholder)", "Change-of-control filings", "Long-stop extension", "Fallback: non-voting shares / reduced stake"],
    [["KR", "개정 특금법상 가상자산사업자 대주주(10% 이상 등)에 해당하면 신고·심사 대상입니다.", "Under the amended Act, 10%+ holders of a VASP are screened."], ["TH", "디지털자산 사업자의 주요주주는 SEC 승인이 필요합니다.", "Major shareholders of digital asset businesses need SEC approval."], ["AE", "라이선스 기관별 지배권·주주 변경 승인 요건을 현지 자문사에 확인합니다.", "Confirm change-of-control approval rules with local counsel."]],
    ["k-sfti", "t-dab"]);

  add("sha", "Consent and Consultation Matters", { l: "R", ko: "[블록체인] 토큰 발행·상장 사전동의", en: "Consent to Token Issuance and Listing",
    def: { ko: "회사(또는 계열 재단)가 토큰을 발행하거나 거래소에 상장할 때 투자자 동의를 받는 권리.", en: "Investor consent before the company or an affiliated foundation issues or lists a token." },
    must: { ko: "토큰 발행(TGE), 거래소 상장, 토큰 배분 계획, 재단·관계회사로의 자산·지식재산 이전, 회사 보유 가상자산의 매각·담보 제공을 사전동의 사항에 포함.", en: "Include token generation, exchange listings, token allocation, transfers of assets or IP to a foundation, and sales or pledges of treasury crypto." },
    flag: { ko: "재단이나 다른 법인을 통해 토큰을 발행하는 경우를 막지 못하는 문구입니다. 회사 대신 재단이 토큰을 내면 사업 가치와 지식재산이 재단으로 빠져나가 지분 투자자는 아무 권리가 없게 됩니다.", en: "" } },
    ["Consent to token generation event (TGE)", "Exchange listing", "Token allocation plan", "Transfers to foundation or affiliates", "Treasury crypto disposals"],
    [["SG", "토큰 발행은 재단(Foundation Ltd 등)을 따로 두는 경우가 많아 재단도 확약 당사자로 넣습니다.", "Tokens are often issued via a separate foundation; make it a party."], ["AE", "ADGM·DIFC 재단 구조를 쓰는 경우 같은 방식으로 재단을 묶습니다.", "Bind ADGM or DIFC foundations the same way."], ["KR", "국내 거래소 상장은 거래소의 상장 심사와 이용자보호법 공시 의무를 받습니다.", "Korean listings face exchange review and user-protection disclosure rules."]]);

  add("sha", "Investor Call Option", { l: "C", ko: "[블록체인] 토큰 워런트", en: "Token Warrant",
    def: { ko: "회사 또는 재단이 토큰을 발행하면 투자자가 정해진 비율의 토큰을 받을 수 있는 권리를 담은 별도 약정.", en: "A separate right to receive a set share of tokens if the company or foundation issues them." },
    must: { ko: "배분 기준(지분율 비례 또는 투자금 기준), 재단 발행 시에도 적용, 락업·베스팅 조건이 다른 내부자와 같거나 유리할 것, 증권사가 받을 수 없을 때 지정 계열사·제3자 수령 또는 현금·지분 대체, 양도 가능성.", en: "Allocation basis, coverage of foundation issuance, lock-up no worse than insiders, alternatives if we cannot hold tokens (affiliate, cash or equity), transferability." },
    flag: { ko: "토큰 락업이 창업자보다 길거나, 재단 발행분은 적용되지 않는 경우입니다. 창업자가 먼저 팔아 가격이 떨어진 뒤에야 우리가 팔 수 있게 됩니다.", en: "" } },
    ["Token warrant", "Allocation formula", "Issuer (company or foundation)", "Lock-up / vesting parity", "Designated recipient", "Cash or equity fallback"],
    [["KR", "증권사 명의로 토큰을 받는 것이 허용되는지 준법·회계 검토가 필요합니다.", "Check whether the firm may hold tokens in its name."], ["US", "토큰 워런트 자체가 증권으로 취급될 수 있습니다.", "The warrant itself may be a security."], ["TH", "토큰 수령·보관이 디지털자산 사업 규제에 걸리는지 확인합니다.", "Check whether receiving or holding tokens triggers Thai digital asset rules."]]);

  add("sha", "Compliance, Anti-corruption, Sanctions", { l: "R", ko: "[블록체인] 라이선스 유지·보관·보안 확약", en: "Licence, Custody and Security Covenants",
    def: { ko: "회사가 가상자산 라이선스를 유지하고 고객·회사 자산을 안전하게 보관하겠다는 약속.", en: "Undertakings to keep licences and safeguard customer and company assets." },
    must: { ko: "라이선스 유지·갱신 의무와 규제기관 조사·제재 즉시 통지, 고객 자산 분리 보관, 콜드월렛 비율·다중서명 등 보관 기준, 정기 보안 감사, 해킹 사고 통지(예: 24–72시간 내), 트래블룰·제재 주소 스크리닝.", en: "Maintain licences and notify regulatory actions; segregate customer assets; cold-wallet and multisig standards; periodic security audits; breach notice within [24–72] hours; Travel Rule and wallet sanctions screening." },
    flag: { ko: "해킹이나 규제 조사가 있어도 투자자에게 알릴 의무가 없는 경우입니다. 가상자산 사고는 회사 존립에 직결되는데, 뒤늦게 알면 풋옵션 등 대응 시기를 놓칩니다.", en: "" } },
    ["Licence maintenance", "Regulatory notice", "Segregation of customer assets", "Custody standards (cold storage, multisig)", "Security audits", "Incident notification", "Travel Rule compliance"],
    [["KR", "가상자산이용자보호법상 이용자 자산 분리·보관 의무가 있습니다.", "The Virtual Asset User Protection Act requires segregation of user assets."], ["AE", "VARA·FSRA는 보관 자산 분리와 재담보 금지를 요구합니다.", "VARA and FSRA require segregation and ban rehypothecation."], ["SG", "MAS 라이선스 사업자는 고객 자산 보호 규정을 따릅니다.", "MAS licensees follow customer asset protection rules."]],
    ["k-vaupa"]);

  add("spa-kr", "Consents and Waivers", { l: "R", ko: "[블록체인] 규제 승인 (대주주 변경)", en: "Regulatory Approval of Change in Shareholding",
    def: { ko: "가상자산사업자 지분을 사들일 때 필요한 감독기관 신고·승인.", en: "Filings or approvals needed to buy into a licensed VASP." },
    must: { ko: "매수 후 지분율로 대주주 해당 여부 판단, 승인 완료를 선행조건으로, 승인 거부 시 계약 해제·대금 반환.", en: "Assess post-closing status; condition on approval; rescission and refund if refused." },
    flag: { ko: "구주를 사면서 감독기관 승인을 확인하지 않은 경우입니다. 승인 없이 대주주가 되면 회사가 라이선스를 잃을 수 있습니다.", en: "" } },
    ["Regulatory approval (major shareholder)", "Condition precedent", "Rescission and refund"],
    [["KR", "가상자산사업자 대주주 변경 시 FIU 신고·심사를 확인합니다.", "Check FIU filings on a change of major shareholder."], ["TH", "SEC 주요주주 승인 없이 취득하면 사업자가 제재받을 수 있습니다.", "Acquisitions without SEC approval expose the licensee to sanctions."]],
    ["k-sfti", "t-dab"]);

  /* ---------- Closing checklist ---------- */
  function R(cat, item, deal, who, note) { return { jur: ["ALL"], bc: true, cat: { ko: cat, en: "" }, item: { ko: item[0], en: item[1] }, deal: { ko: deal, en: "" }, who: { ko: who, en: "" }, note: { ko: note, en: "" } }; }
  GUIDE.closing.push(
    R("블록체인", ["가상자산 관련 투자 허용 여부 준법 확인", "Compliance clearance for virtual-asset exposure"], "공통", "준법·법무", "2017년 행정지도 적용 여부, 사업 모델별 판단, 필요 시 금융당국 질의"),
    R("블록체인", ["가상자산사업자 대주주 신고·승인", "VASP major-shareholder filings and approvals"], "한국·태국·UAE·싱가포르", "법무·현지 자문", "한국 FIU 신고, 태국 SEC 주요주주 승인, UAE·싱가포르 감독기관 요건 확인"),
    R("블록체인", ["토큰 권리 처리 방침 확정", "Decision on token rights"], "공통", "투자팀·준법·회계", "토큰 수령 가능 여부, 포기 시 대체 보상, 회계·세무 처리"),
    R("블록체인", ["가상자산 보관·보안 실사", "Custody and security diligence"], "공통", "투자팀·외부 보안 자문", "고객 자산 분리, 콜드월렛·다중서명, 해킹 이력, 보안 감사 보고서"),
    R("블록체인", ["지갑 주소 제재·자금세탁 스크리닝", "Wallet sanctions and AML screening"], "공통", "준법", "회사·재단 지갑의 제재 주소 거래 여부, 트래블룰 준수")
  );

  /* ---------- References ---------- */
  GUIDE.refs.push(
    { id: "k-sfti", j: "KR", ko: "특정 금융거래정보의 보고 및 이용 등에 관한 법률 (가상자산사업자 신고)", en: "Act on Reporting and Use of Specified Financial Transaction Information", url: "https://www.law.go.kr/법령/특정금융거래정보의보고및이용등에관한법률" },
    { id: "k-vaupa", j: "KR", ko: "가상자산 이용자 보호 등에 관한 법률", en: "Virtual Asset User Protection Act", url: "https://www.law.go.kr/법령/가상자산이용자보호등에관한법률" },
    { id: "k-2017", j: "KR", ko: "2017년 행정지도 유효 입장 (해설 기사, 헤럴드경제)", en: "2017 guidance still applied (news, Herald)", url: "https://www.heraldk.com/article/2025072218213689998" },
    { id: "k-vasp26", j: "KR", ko: "개정 특금법 대주주 심사 (해설, 법률신문)", en: "Amended Act: major-shareholder screening (commentary)", url: "https://www.lawtimes.co.kr/news/articleView.html?idxno=225977" },
    { id: "u-clarity", j: "US", ko: "CLARITY Act 상원 부결 이후 (해설, Troutman)", en: "After the CLARITY Act failure (Troutman)", url: "https://www.troutman.com/insights/in-the-wake-of-clarity-acts-failure-agencies-move-forward-without-congressional-action-or-certainty/" },
    { id: "s-dtsp", j: "SG", ko: "싱가포르 DTSP 규제 시행 (해설, Rajah & Tann)", en: "Singapore DTSP regime (Rajah & Tann)", url: "https://sg.rajahtannasia.com/viewpoints/regulatory-framework-for-virtual-asset-service-providers-in-line-with-fatf-enhanced-standards-commences-on-30-june-2025/" },
    { id: "a-uae-va", j: "AE", ko: "UAE 가상자산 규제 2026 업데이트 (해설, Clyde & Co)", en: "UAE virtual assets update 2026 (Clyde & Co)", url: "https://www.clydeco.com/en/insights/2026/05/uae-virtual-assets-update-q2-2026" },
    { id: "t-dab", j: "TH", ko: "태국 디지털자산 사업자 주요주주 정의 확대 (해설, Tilleke)", en: "Thailand expands major shareholder definition (Tilleke)", url: "https://www.tilleke.com/insights/thailand-expands-major-shareholder-definition-for-securities-and-digital-asset-businesses/29/" }
  );
  GUIDE.refsOf["a~blockchain-limits-on-financial-institutions-virtual-asset-exposure"] = ["k-2017"];
  GUIDE.refsOf["a~blockchain-we-may-face-shareholder-screening-if-the-target-is-a-licensed-vasp"] = ["k-sfti", "k-vasp26", "t-dab", "s-dtsp", "a-uae-va"];
  GUIDE.refsOf["a~blockchain-can-we-hold-token-rights"] = ["k-2017"];
  GUIDE.refsOf["a~blockchain-us-crypto-rules-remain-unsettled"] = ["u-clarity"];

  /* abbreviations */
  GUIDE.abbr.push(["VASP", "Virtual Asset Service Provider, 가상자산사업자"], ["TGE", "Token Generation Event, 토큰 최초 발행"], ["FIU", "Financial Intelligence Unit, 금융정보분석원"], ["DTSP", "Digital Token Service Provider, 싱가포르 디지털토큰 서비스 사업자"], ["MAS", "Monetary Authority of Singapore, 싱가포르 통화청"], ["VARA", "Virtual Assets Regulatory Authority, 두바이 가상자산규제청"], ["FSRA", "Financial Services Regulatory Authority, ADGM 금융감독청"], ["SEC", "Securities and Exchange Commission, 증권감독기관"], ["CFTC", "Commodity Futures Trading Commission, 미국 상품선물거래위원회"]);
})();
(function () {
  GUIDE.contracts.forEach(function (c) { if (c.id !== "sha") return; c.clauses.forEach(function (k) {
    if (k.en === "Scope of Founder Liability") k.must = { ko: "벤처투자법이 적용되는 투자자(벤처투자조합 등)는 고의·중과실 등으로 책임을 제한해야 합니다. 당사 고유자금 직접투자에는 이 의무가 바로 적용되지 않지만, 시장 관행도 ‘고의·중과실 한정 + 금액 한도’로 가는 추세입니다.", en: k.must.en };
  }); });
})();
