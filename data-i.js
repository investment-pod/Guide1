window.GUIDE = window.GUIDE || {};
/* Pre-investment checks rewritten for: proprietary direct investments only (no funds),
   portfolio in Korea, US, Singapore, Thailand, UAE. */
(function () {
  GUIDE.jurisdictions.forEach(function (j) { if (j.id === "AE") { j.ko = "UAE"; j.en = "UAE"; } });

  GUIDE.assumptions = [
  { sev: "high",
    t: { ko: "고유자금 직접투자의 내부 절차와 한도", en: "Internal approvals and limits for proprietary direct investment" },
    d: { ko: "당사 투자는 펀드가 아니라 고유자금으로 기업에 직접 들어갑니다. 따라서 계약 당사자는 당사 법인이고, 고유재산 운용규정상 투자 가능 자산인지, 1건당·업종별 투자 한도, 투자심의위원회 승인, 대표이사 결재 범위를 계약 전에 확인해야 합니다. 벤처투자조합 등에 적용되는 벤처투자법상 특례·제한(예: 이해관계인 책임 제한 의무)은 당사에 바로 적용되지 않으므로, 계약 조건은 시장 관행과 내부 기준으로 판단합니다.", en: "Investments are made directly from proprietary capital, not through funds. The contracting party is the firm itself; confirm eligibility under proprietary investment rules, per-deal and sector limits, IC approval and signing authority before signing. Venture Investment Act rules for venture funds do not apply directly, so judge terms by market practice and internal policy." },
    a: { ko: "텀시트 전에 투자심의 일정과 한도 소진 여부를 확인하고, 계약서상 투자자 명의·서명권자·송금 계좌를 당사 법인으로 일치시킬 것", en: "Check IC timing and limit usage before the term sheet; align investor name, signatory and paying account with the firm." } },
  { sev: "high",
    t: { ko: "금산법 제24조 지분 한도", en: "Financial Industry Structure Improvement Act, Art. 24" },
    d: { ko: "금융기관이 다른 회사 의결권 주식의 20% 이상을 소유하거나, 5% 이상을 소유하면서 동일계열 금융기관과 함께 사실상 지배하게 되는 경우 금융위원회 사전승인 대상입니다. 해외 기업 지분도 계산에 포함되는지 법무팀과 확인하고, 우선주 전환·리픽싱·후속 Pro-rata 행사 후 지분율까지 계산합니다.", en: "A financial institution holding 20%+ of another company's voting shares, or 5%+ with effective control together with affiliated financial institutions, needs prior FSC approval. Confirm treatment of overseas targets with Legal and model post-conversion, refixing and pro-rata ownership." },
    a: { ko: "완전희석 기준·계열 금융사 합산 지분율 시나리오를 투자심의 자료에 포함. 한도에 가까우면 무의결권 주식이나 전환 유보 조항을 계약에 넣을 것", en: "Include fully diluted, group-aggregated scenarios; near the limit, use non-voting shares or conversion deferral." } },
  { sev: "high",
    t: { ko: "정보교류차단과 미공개정보", en: "Information barriers and MNPI" },
    d: { ko: "증권사는 자본시장법상 정보교류차단 의무가 있습니다. 피투자사 비공개정보가 IB·리서치·세일즈·자기매매 부서로 흘러가면 내부통제 위반이 되고, 피투자사가 국내외에 상장한 뒤에는 미공개중요정보 이용 금지 규제로 이어집니다.", en: "Securities firms must keep information barriers. Portfolio information reaching IB, research, sales or trading breaches internal controls and, after any domestic or overseas listing, raises MNPI liability." },
    a: { ko: "NDA·사이드레터의 공유 허용 범위를 ‘투자검토 부서, 투자심의위원회, 준법감시, 리스크관리, 감독당국’으로 한정하고 수령 정보를 등록·관리", en: "Limit permitted recipients to the investment team, IC, compliance, risk and regulators; log information received." } },
  { sev: "high",
    t: { ko: "대주주·특수관계인 관련 거래 제한", en: "Restrictions on transactions with major shareholders" },
    d: { ko: "자본시장법 제34조는 금융투자업자가 대주주 및 그 특수관계인이 발행한 증권을 취득하는 것을 원칙적으로 제한합니다. 그룹·경영진 쪽에서 소개된 딜이라면 피투자사의 주주·임원 구성과 대주주의 관계를 먼저 확인해야 합니다.", en: "FSCMA Art. 34 generally restricts acquiring securities issued by a major shareholder or its related parties. For group-sourced deals, check the target's shareholder and officer links first." },
    a: { ko: "피투자사 주주명부·등기임원에 대주주 특수관계인이 있는지 확인하고 준법감시인 사전검토를 받을 것", en: "Screen the cap table and officers for related parties; get prior Compliance review." } },
  { sev: "high",
    t: { ko: "해외 직접투자 신고와 송금", en: "Overseas direct investment filings and remittance" },
    d: { ko: "미국·싱가포르·태국·UAE 기업에 직접 투자하므로 송금 전에 외국환거래법상 신고를 마쳐야 합니다. 금융기관의 해외직접투자·해외증권 취득은 일반 기업과 신고처·절차가 다를 수 있고, 지분율(10% 기준), 임원 파견 여부, 증권 형태(SAFE 포함)에 따라 신고 유형이 달라집니다. 투자 후 사후보고 의무도 있습니다.", en: "Direct investments into the US, Singapore, Thailand and the UAE need Foreign Exchange Transactions Act filings before the wire. Filing type for a financial institution depends on the 10% threshold, director appointment and instrument (including SAFEs), with post-investment reporting." },
    a: { ko: "외환 담당 부서와 신고 유형을 확정하고, 신고 완료를 클로징 선행조건으로, 송금일과 클로징일 사이 여유(롱스톱 데이트)를 둘 것", en: "Confirm the filing with the FX desk; make it a closing condition and leave room before the long-stop date." } },
  { sev: "high",
    t: { ko: "현지 외국인투자 규제 (미국·태국·UAE)", en: "Local foreign-investment rules (US, Thailand, UAE)" },
    d: { ko: "당사는 해외에서 외국인 투자자입니다. 미국은 핵심기술·민감정보·인프라(TID) 기업에 이사 지명권이나 비공개 기술정보 접근권을 받으면 CFIUS 신고 대상이 될 수 있습니다. 태국은 외국인 합산 지분이 일정 수준을 넘으면 회사가 ‘외국인’이 되어 제한업종을 영위할 수 없고(통상 49% 상한, BOI·FBL로 예외), 명의신탁은 금지됩니다. UAE 온쇼어 회사는 종류주식 발행이 원칙적으로 어려워 ADGM·DIFC 등 홀딩 레벨에서 투자하는 경우가 많습니다. 싱가포르는 일반적인 외국인 지분 제한이 없습니다.", en: "We are a foreign investor abroad. US: board seats or technical access in TID businesses can trigger CFIUS. Thailand: aggregate foreign ownership can make the company ‘foreign’ and bar restricted businesses (usually a 49% cap, with BOI or FBL exceptions); nominees are prohibited. UAE: onshore companies generally cannot issue share classes, so invest at an ADGM or DIFC holdco. Singapore: no general cap." },
    a: { ko: "업종·지분율을 먼저 확인하고, 미국 TID 기업이면 이사권·기술정보 접근을 포기하는 구조, 태국은 투자 후 외국인 합산 지분 계산, UAE는 투자 법인 레벨을 확정할 것", en: "Check sector and stake: passive structure for US TID targets, post-money foreign aggregate for Thailand, and the investing entity for the UAE." } },
  { sev: "high",
    t: { ko: "어느 법인에 투자하는가 (홀딩 구조·플립)", en: "Holding structure and flips" },
    d: { ko: "태국·UAE 스타트업은 운영회사가 아니라 싱가포르·ADGM·델라웨어 홀딩회사로 투자를 받는 경우가 많습니다. 후속 라운드에 미국 투자자가 들어오면 델라웨어로 옮기는(플립) 경우도 있어, 지금 계약한 권리가 새 법인에서도 유지되는지가 중요합니다.", en: "Thai and UAE startups often raise at a Singapore, ADGM or Delaware holdco, and may flip to Delaware for a US lead. Rights must carry over to the new parent." },
    a: { ko: "투자 법인과 운영회사의 지분 구조도를 받고, 플립 시 권리가 동일하게 승계된다는 조항과 비용 부담 주체를 정할 것", en: "Get the group chart; require rights to carry over on any flip and allocate costs." } },
  { sev: "med",
    t: { ko: "향후 IPO 주관 가능성과 지분 보유 제한 (국내 상장)", en: "Future IPO underwriting and holding limits (Korean listings)" },
    d: { ko: "국내 기업이 코스닥 등에 상장하고 당사가 주관사를 맡을 가능성이 있다면, 금융투자협회 인수업무규정상 주관사(및 계열사)의 발행회사 지분 보유 한도와 초과분 보호예수가 적용됩니다. 또한 주관회사는 상장일 전 2년 내 취득한 주식을 상장일부터 30일 이내에 처분할 수 없습니다.", en: "If we may lead a Korean IPO, KOFIA rules cap our (and affiliates') stake with lock-up on the excess, and shares acquired within two years before listing cannot be sold for 30 days after listing." },
    a: { ko: "주관 희망 시 투자 지분율 상한을 설계하고, 계약서에 주관사 지정 조항을 넣지 말 것", en: "Cap the stake if underwriting is a goal; do not put underwriter appointment in the contract." } },
  { sev: "med",
    t: { ko: "공정거래법상 계열편입과 지배력 판단", en: "Group affiliation under the MRFTA" },
    d: { ko: "대기업집단 소속 금융사가 30% 이상 최다출자자가 되거나 지배적 영향력을 행사하면 피투자사가 계열회사로 편입될 수 있습니다. 광범위한 사전동의권·이사 지명권은 지배력 판단 요소가 됩니다. 일정 규모 이상이면 기업결합 신고 대상도 검토합니다.", en: "A group-affiliated financial company that becomes the largest 30%+ holder or exercises controlling influence may make the target an affiliate; broad vetoes and board seats count. Check merger filing thresholds." },
    a: { ko: "사전동의권을 투자자 보호 범위(정관변경·신주발행·청산·주요자산 처분 등)로 한정하고 일상 경영사항은 협의권으로", en: "Keep vetoes to investor-protection matters; make operational items consultation rights." } },
  { sev: "med",
    t: { ko: "상장 후 공시와 단기매매차익 반환", en: "Post-IPO reporting and short-swing profits" },
    d: { ko: "국내 상장 시 5% 대량보유보고, 10% 이상 주요주주 소유상황 보고가 시작되고, 주요주주는 6개월 이내 매매차익을 반환해야 할 수 있습니다(자본시장법 제172조). 해외 상장(미국 등)도 현지 지분공시·락업 규정이 있습니다.", en: "On a Korean listing, 5% and 10% reporting begins and major shareholders may disgorge short-swing profits (FSCMA Art. 172). Overseas listings have their own disclosure and lock-up rules." },
    a: { ko: "엑시트 계획에 지분율별 공시·차익반환·락업 일정을 반영", en: "Build reporting, short-swing and lock-up windows into exit planning." } },
  { sev: "med",
    t: { ko: "순자본비율과 회계 처리", en: "Net capital ratio and accounting" },
    d: { ko: "비상장 지분은 위험액이 크게 반영되어 순자본비율과 리스크 한도를 빠르게 소진합니다. 직접투자 자산은 분기마다 공정가치(K-IFRS 1109)로 평가해야 하므로 SAFE·전환증권은 회계 분류를 미리 정하고, 모든 투자에 정기 재무자료를 받을 권리가 필요합니다.", en: "Unlisted equity weighs heavily on the net capital ratio. Direct holdings are fair-valued quarterly under K-IFRS 1109, so agree the accounting for SAFEs and convertibles and secure information rights in every deal." },
    a: { ko: "리스크관리·회계부서와 금액·증권 형태를 사전 협의하고, 정보권(분기 재무제표 제출 기한)을 계약에 반드시 넣을 것", en: "Agree size and instrument with Risk and Accounting; always include information rights with deadlines." } },
  { sev: "med",
    t: { ko: "국가별 세금과 조세조약", en: "Taxes and treaties by country" },
    d: { ko: "직접투자이므로 배당·양도차익에 현지 세금이 바로 붙습니다. 미국은 배당 원천징수가 원칙 30%(한미 조세조약 적용 시 경감), 태국은 배당 10%와 주식 양도 인지세, 싱가포르는 배당 원천징수가 없고 주식 양도 인지세가 있으며, UAE는 배당 원천징수가 없습니다. 조약 혜택을 받으려면 거주자증명서 등 서류가 필요합니다.", en: "Direct holdings bear local tax immediately: US 30% dividend withholding (treaty relief possible); Thailand 10% plus stamp duty on transfers; Singapore no dividend withholding but stamp duty on transfers; UAE no withholding. Treaty relief needs residency certificates." },
    a: { ko: "세무팀과 국가별 세후 수익률을 계산하고, 클로징 서류에 W-8BEN-E·거주자증명서 제출을 포함할 것", en: "Model after-tax returns with Tax; include W-8BEN-E and residency certificates in closing." } },
  { sev: "med",
    t: { ko: "초기기업 특유의 결함", en: "Early-stage defects" },
    d: { ko: "창업자 개인 명의의 특허·도메인, 공동창업자 이탈 시 지분 처리 부재, 누락된 이사회·주총 의사록, 절차 하자가 있는 스톡옵션, 4대보험·퇴직금 미정산이 흔합니다. 해외 기업은 현지 등기(ACRA·DBD·ADGM 등)와 실제 주주명부가 다른 경우도 있습니다.", en: "Founder-held IP, no co-founder vesting, missing minutes, defective option grants and unpaid employment liabilities are common; overseas registers (ACRA, DBD, ADGM) may not match the cap table." },
    a: { ko: "실사 결과를 진술·보장에 반영하고, 치유 가능한 것은 클로징 전 정비를 선행조건으로", en: "Reflect findings in warranties; make curable items conditions precedent." } },
  { sev: "med",
    t: { ko: "후속 라운드가 기존 권리를 덮어쓰는 위험", en: "Later rounds overriding earlier rights" },
    d: { ko: "다운라운드, Pay-to-play, 시리즈 간 청산우선순위 변경, 후속 투자자의 MFN 요구로 기존 투자자 권리가 축소될 수 있습니다. 소수 지분 투자자는 우선주 다수 결의에 끌려갑니다.", en: "Down rounds, pay-to-play, stacked seniority and new-investor MFNs can erode prior rights; minority holders are bound by majority votes." },
    a: { ko: "내부 승인 자료에 다운사이드 청산 워터폴과 시리즈별 동의권을 포함", en: "Include downside waterfalls and series consent analysis in approvals." } },
  { sev: "med",
    t: { ko: "정본 언어·서명·환율 일정", en: "Prevailing language, execution, and FX timing" },
    d: { ko: "국문·영문 병기 시 어느 쪽이 우선인지, 전자서명 유효성, 법인인감·서명권자 증빙, 해외 딜 클로징일과 원화 환전·송금 승인 일정이 어긋나는 문제가 자주 생깁니다. 태국·UAE는 현지어 번역본이나 공증·아포스티유를 요구하기도 합니다.", en: "Bilingual documents need a prevailing-language clause; e-signatures, signatory evidence and FX timing often misalign. Thailand and the UAE may require translations, notarisation or apostille." },
    a: { ko: "Prevailing Language 조항, 서명권 증빙, 롱스톱 데이트 여유를 확보", en: "Add a prevailing-language clause, evidence signing authority, and leave long-stop room." } }
  ];

  GUIDE.closing.forEach(function (r) { if (r.deal && r.deal.ko === "아부다비") r.deal = { ko: "UAE", en: "UAE" }; });
  GUIDE.refsOf["a~internal-approvals-and-limits-for-proprietary-direct-investment"] = ["k-via2"];
  GUIDE.refsOf["a~overseas-direct-investment-filings-and-remittance"] = ["k-fxa", "k-fxreg"];
  GUIDE.refsOf["a~local-foreign-investment-rules-us-thailand-uae"] = ["u-cfius", "u-800", "t-fba", "t-fbaguide", "a-conv"];
  GUIDE.refsOf["a~future-ipo-underwriting-and-holding-limits-korean-listings"] = ["k-uw", "k-fireg"];
})();

/* Closing and regulatory checklist: Korea, US, Singapore, Thailand, UAE only */
(function () {
  function R(cat, item, deal, who, note) { return { jur: ["ALL"], cat: { ko: cat, en: "" }, item: { ko: item[0], en: item[1] }, deal: { ko: deal, en: "" }, who: { ko: who, en: "" }, note: { ko: note, en: "" } }; }
  GUIDE.closing = [
    R("규제", ["투자심의위원회·이사회 승인, 준법감시 사전검토", "IC and board approval; prior Compliance review"], "공통", "투자팀·준법감시", "고유재산 투자 한도, 대주주 관련성(자본시장법 제34조), 이해상충, 정보교류차단 등록"),
    R("규제", ["금산법 제24조 지분 산정·승인", "Art. 24 ownership test and approval"], "공통", "법무·준법", "완전희석·계열 금융사 합산, 전환·리픽싱 후 지분율 시나리오"),
    R("규제", ["공정거래법 기업결합·계열편입 검토", "MRFTA merger filing and affiliation"], "공통", "법무", "지분율·자산·매출 기준, 사전동의권 범위"),
    R("규제", ["외국환거래법 해외직접투자·증권취득 신고", "FX Act ODI or securities acquisition filing"], "미국·싱가포르·태국·UAE", "외환·법무", "금융기관 신고처 확인, 송금 전 신고 완료, 투자 후 사후보고 일정"),
    R("규제", ["CFIUS 해당 여부 검토", "CFIUS analysis"], "미국", "법무·외부 자문", "TID 업종 여부, 이사 지명권·비공개 기술정보 접근 여부"),
    R("규제", ["외국인사업법(FBA)·BOI·FBL 확인", "FBA, BOI and FBL check"], "태국", "법무·현지 자문", "투자 후 외국인 합산 지분, BOI 장려 조건, 명의신탁 없음 확인"),
    R("규제", ["투자 법인 레벨·영업 라이선스 확인", "Investing entity and licence check"], "UAE", "법무·현지 자문", "ADGM 홀딩과 온쇼어 자회사 지분 관계, 영업 라이선스 보유 주체"),
    R("KYC·제재", ["KYC 패키지 제출", "KYC package"], "미국·싱가포르·태국·UAE", "투자지원", "영문 법인등기, 실소유자 확인서, 서명권자 목록, 공증·아포스티유 요구 여부"),
    R("KYC·제재", ["제재·자금세탁방지 스크리닝", "Sanctions and AML screening"], "공통", "준법", "회사·창업자·주요 주주의 OFAC·UN·국내 제재 리스트 확인"),
    R("세무", ["W-8BEN-E 제출", "W-8BEN-E"], "미국", "세무", "배당 원천징수(원칙 30%)에 한미 조세조약 경감세율 적용"),
    R("세무", ["거주자증명서·조세조약 적용 서류", "Residency certificate and treaty forms"], "태국·싱가포르·UAE", "세무", "태국 배당 원천징수 10%, 싱가포르·UAE 배당 원천징수 없음 확인"),
    R("세무", ["주식 양도 인지세", "Stamp duty on share transfers"], "싱가포르·태국", "세무", "구주 매입 시 납부 주체와 기한"),
    R("회계", ["금융자산 분류·공정가치 평가 방법 확정", "Classification and fair-value method"], "공통", "회계·리스크", "K-IFRS 1109, RCPS·SAFE 분류, 순자본비율 영향"),
    R("클로징", ["이사회·주주총회 결의, 정관 변경", "Board and shareholder resolutions, charter"], "공통", "회사·법무", "한국 정관 변경 / 미국 COI 제출 / 싱가포르 Constitution / 태국 AoA 등기 / UAE Articles 등록"),
    R("클로징", ["대표이사·임원 확인서", "Officer's certificate"], "공통", "회사", "진술·보장이 클로징일에도 사실인지, 선행조건 충족"),
    R("클로징", ["존속증명서·비서 증명서", "Good standing and secretary's certificate"], "미국·싱가포르·UAE", "회사·현지 자문", "미국 Good Standing, 싱가포르 Business Profile, UAE Certificate of Incumbency"),
    R("현지 등기", ["변경등기·주주명부", "Registry update and shareholder list"], "한국", "회사·법무", "납입 후 2주 이내 변경등기, 등기사항전부증명서·주주명부 사본"),
    R("현지 등기", ["Form D 제출", "Form D"], "미국", "회사·현지 자문", "최초 판매일로부터 15일 이내 SEC 제출, 주별 Blue-sky 신고"),
    R("현지 등기", ["ACRA 배정 신고·전자 주주명부 반영", "ACRA return of allotment"], "싱가포르", "회사 비서", "배정 후 14일 이내 신고, ACRA Business Profile로 반영 확인"),
    R("현지 등기", ["DBD 증자 등기·주주명부", "DBD capital increase and shareholder list"], "태국", "회사·현지 자문", "주총 특별결의서, 정관 변경 등기, 외국인 지분 합산표"),
    R("현지 등기", ["ADGM 등록청 신고", "ADGM Registration Authority filings"], "UAE", "회사·현지 자문", "주식 발행·Articles 변경 등록, 갱신된 주주명부"),
    R("클로징", ["주권·주주명부·자본구조표 수령", "Share certificate, register, cap table"], "공통", "회사", "미국은 Carta 등 전자 주권, 싱가포르는 ACRA 전자 주주명부, 태국·UAE는 주주명부 사본"),
    R("클로징", ["송금 증빙과 계좌 재확인", "Wire confirmation and account verification"], "공통", "자금·투자지원", "계좌 변경 사기에 대비해 알고 있는 번호로 전화 재확인")
  ];
})();
