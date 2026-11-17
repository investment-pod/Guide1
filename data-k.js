window.GUIDE = window.GUIDE || {};
/* 1) Contract-style Korean clause names  2) Additional red flags per clause  3) Two missing clauses */
(function () {
  GUIDE.ui.ko.must = "필수 기재사항 · 권장";
  var slug = function (s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80); };
  var byId = {}; GUIDE.contracts.forEach(function (c) { byId[c.id] = c; });

  /* ---------- 1. Clause names in contract language ---------- */
  var NAMES = {
    nda: { "representatives": "정보 수령 허용 범위", "permitted-purpose": "사용 목적의 제한", "compelled-and-regulatory-disclosure": "법령 및 감독기관 요구에 따른 공개", "return-or-destruction": "자료의 반환 및 폐기", "term": "계약 기간 및 의무 존속", "non-solicitation": "임직원 채용 권유 금지", "no-obligation-no-agency": "거래 진행 의무의 부존재", "remedies-governing-law": "구제수단 및 준거법" },
    ts: { "security-and-amount": "투자 증권 및 투자금액", "pre-money-valuation-and-price-per-share": "투자 전 기업가치 및 주당 발행가", "anti-dilution": "희석방지 (전환가격 조정)", "rofr-co-sale-drag-along": "주식 양도 제한 (우선매수권·공동매도권·동반매각권)", "founder-vesting-and-commitment": "창업자 주식 베스팅 및 전념 의무", "exclusivity-no-shop": "독점협상", "expenses": "비용의 부담", "binding-and-non-binding-provisions": "법적 구속력" },
    loi: { "proposed-investment": "투자 예정 조건", "key-terms": "주요 투자조건", "due-diligence": "실사", "approvals-and-regulatory-conditions": "내부 승인 및 규제 요건", "non-binding-nature": "법적 구속력의 배제", "confidentiality-costs-governing-law": "비밀유지·비용·준거법 (구속력 있음)" },
    rcps: { "closing-and-payment": "납입 및 거래종결", "use-of-proceeds": "투자금의 용도", "termination-before-closing": "계약의 해제", "duration": "우선주의 존속기간" },
    sha: { "consent-and-consultation-matters": "사전 동의 및 협의 사항", "information-and-inspection": "정보 제공 및 장부 열람", "board-and-observer-rights": "이사 및 옵저버 지명권", "founder-lock-up": "이해관계인의 주식 처분 제한", "non-compete-and-full-time-commitment": "겸직 및 경업 금지", "scope-of-founder-liability": "이해관계인의 책임 범위", "penalty-and-indemnification": "위약벌 및 손해배상", "exit-covenant": "투자금 회수(IPO·M&A) 노력 의무", "compliance-anti-corruption-sanctions": "법령 준수 (부패방지·제재)", "termination-and-disputes": "계약의 종료 및 분쟁해결" },
    "spa-kr": { "sale-shares": "매매대상주식", "purchase-price-and-payment": "매매대금 및 지급 방법", "transfer-mechanics": "주식의 인도 및 명의개서", "company-acknowledgment": "대상회사의 확인", "consents-and-waivers": "제3자 동의 및 우선매수권 등의 포기", "assignment-of-investor-rights-deed-of-adherence": "투자계약상 지위의 승계", "taxes": "제세공과금", "call-and-put-over-remaining-shares": "잔여 주식에 대한 매수·매도청구권 (콜·풋옵션)" }
  };
  Object.keys(NAMES).forEach(function (cid) { byId[cid].clauses.forEach(function (k) { var n = NAMES[cid][slug(k.en)]; if (n) k.ko = n; }); });

  /* ---------- 3. Missing clauses ---------- */
  function add(cid, after, k, terms, flagMore, jn) {
    var c = byId[cid], i = -1;
    c.clauses.forEach(function (x, idx) { if (x.en === after) i = idx; });
    c.clauses.splice(i < 0 ? c.clauses.length : i + 1, 0, k);
    var key = "k~" + cid + "~" + slug(k.en);
    GUIDE.enTerms[key] = terms; GUIDE.flagMore = GUIDE.flagMore || {}; GUIDE.flagMore[key] = flagMore;
    var o = {}; (jn || []).forEach(function (r) { o[r[0]] = { ko: r[1], en: r[2] }; }); GUIDE.jn[key] = o;
  }
  add("rcps", "Founder Representations", { l: "R", ko: "손해배상", en: "Indemnification (SSA)",
    def: { ko: "진술·보장이나 확약 위반으로 투자자에게 생긴 손해를 회사(및 이해관계인)가 물어주는 조항.", en: "Compensation for losses from breach of warranties or covenants." },
    must: { ko: "배상 주체(회사·이해관계인)와 범위, 청구 기간(납입 후 2–3년, 세무·지분 관련은 더 길게), 한도(투자금), 최소 청구액, 공개목록에 적힌 사항의 면책 범위, 투자자가 미리 알았어도 청구 가능(anti-sandbagging 배제).", en: "Indemnitors and scope, survival (2–3 years; longer for tax and title), cap, de minimis, effect of disclosure, pro-sandbagging." },
    flag: { ko: "손해배상 조항 없이 진술·보장만 있는 경우입니다. 위반이 드러나도 계약을 해제할 시점은 이미 지났고, 일반 민법상 손해 입증은 어려워 사실상 구제 수단이 없습니다.", en: "" } },
    ["Indemnification", "Indemnitors", "Survival period (fundamental warranties longer)", "Cap and de minimis", "Disclosure exceptions", "Pro-sandbagging"],
    ["‘투자자가 실사로 알았거나 알 수 있었던 사항’은 청구할 수 없다는 문구(anti-sandbagging): 실사에서 놓친 위험을 우리가 떠안게 됩니다.", "회사만 배상 주체: 회사 돈으로 배상받으면 결국 우리 지분 가치에서 빠져나가는 셈이라 효과가 줄어듭니다.", "자본구조·주식 소유 같은 핵심 진술(fundamental warranties)도 일반 진술과 같은 짧은 청구 기간을 적용한 경우"],
    [["US", "NVCA 관행에는 손해배상 조항이 거의 없습니다.", "NVCA practice usually has no indemnity."], ["SG", "VIMA SSA에는 보증인 손해배상과 한도 조항이 있습니다.", "VIMA SSA includes warrantor indemnity with caps."], ["TH", "회사 배상 외에 창업자 보증과 담보를 함께 받습니다.", "Add founder guarantees and security."]]);
  add("sha", "Non-compete and Full-time Commitment", { l: "C", ko: "이해관계인 퇴사 시 주식 처리", en: "Founder Leaver Provisions",
    def: { ko: "창업자·핵심 임원이 회사를 떠날 때 보유 주식을 회사나 다른 주주가 정해진 가격에 사들이는 조항.", en: "Purchase of a departing founder's shares at a set price." },
    must: { ko: "Good leaver(사망·질병 등)와 Bad leaver(자진 퇴사·해임 사유)의 정의, 각 경우의 매수 가격(공정가치 vs 액면가·취득가), 매수 주체(회사·다른 주주·투자자 지정인), 행사 기한.", en: "Good and bad leaver definitions, price for each, purchaser, exercise period." },
    flag: { ko: "핵심 창업자가 떠나도 주식을 그대로 들고 있는 경우입니다. 회사에 기여하지 않는 대주주가 남아 후속 투자 유치와 의사결정이 막힙니다.", en: "" } },
    ["Good leaver / bad leaver", "Leaver price", "Purchaser and designee", "Exercise period", "Vesting interaction"],
    ["Bad leaver 사유가 ‘형사 유죄 확정’처럼 지나치게 좁아 실제로 적용되기 어려운 경우", "회사가 매수 주체인데 자기주식 취득 한도·절차를 고려하지 않은 경우"],
    [["US", "창업자 역베스팅(Repurchase right)으로 처리하는 경우가 많습니다.", "Usually handled through founder reverse vesting."], ["SG", "VIMA 창업자 계약 양식에 Leaver 조항이 있습니다.", "VIMA founders' agreement has leaver terms."], ["TH", "회사가 자기주식을 가질 수 없어 다른 주주나 지정인이 매수하도록 합니다.", "Have shareholders or a designee buy, not the company."]]);

  /* ---------- 2. Additional red flags ---------- */
  var M = {
  // NDA
  "k~nda~definition-of-confidential-information": ["회사가 이미 공개한 IR 자료나 언론 보도까지 비밀정보로 묶는 경우", "투자 검토를 했다는 사실 자체를 비밀로 해서 내부 투자심의·감독 보고까지 막히는 경우"],
  "k~nda~exclusions": ["예외에 해당한다는 입증 책임을 수령자에게 지우면서 입증 방법(서면 기록)을 엄격하게 정한 경우"],
  "k~nda~representatives": ["대리인(자문사)의 위반까지 우리가 무조건 책임지는 경우", "공동투자자에게 공유할 때마다 별도 NDA 체결을 요구해 신디케이션이 늦어지는 경우"],
  "k~nda~permitted-purpose": ["비밀정보를 이용한 ‘경쟁사 투자 금지’가 목적 제한 조항에 숨어 들어간 경우(사실상 투자 제한 약정)"],
  "k~nda~compelled-and-regulatory-disclosure": ["공개 전에 회사가 법적 대응(가처분 등)을 할 수 있도록 협조할 의무를 무제한으로 지는 경우"],
  "k~nda~return-or-destruction": ["반환·폐기 시점을 ‘요청 즉시’로 정해 내부 기록 정리 시간이 없는 경우"],
  "k~nda~term": ["계약 기간이 끝나도 의무가 자동 연장되거나, 투자 후에도 NDA가 주주간계약의 비밀유지 조항과 충돌하는 경우"],
  "k~nda~non-solicitation": ["‘회사 임직원·고객·거래처 무단 접촉 금지(No-contact)’가 함께 들어가 실사 중 고객 인터뷰나 레퍼런스 체크를 할 수 없는 경우", "위반 시 연봉의 몇 배를 배상하는 위약금이 붙은 경우"],
  "k~nda~no-obligation-no-agency": ["회사가 정보의 정확성을 보장하지 않는다는 조항 때문에, 본계약 진술·보장에서도 같은 면책을 주장하는 경우"],
  "k~nda~remedies-governing-law": ["해외 법원 전속관할로 정해 국내에서 다투기 어려운 경우", "회사의 가처분 신청 시 담보 제공을 면제하는 조항"],
  // Term Sheet
  "k~ts~security-and-amount": ["라운드 총액이 ‘최대 [●]원’으로만 되어 있어 최소 모집액 미달 시에도 투자 의무가 생기는 경우", "같은 라운드인데 투자자별로 증권 종류나 조건이 다른 경우(나중에 MFN 분쟁)"],
  "k~ts~pre-money-valuation-and-price-per-share": ["미전환 SAFE·전환사채가 이번 라운드에서 할인 전환되면서 실제 희석이 예상보다 큰데 자본구조표에 반영되지 않은 경우"],
  "k~ts~liquidation-preference": ["간주청산(M&A)에 영업양도·독점 라이선스·지배권 변경이 빠진 경우", "청산 시 지급 순서에 ‘배당금 누적분’이 포함되는지 불명확한 경우"],
  "k~ts~anti-dilution": ["리픽싱 하한이 최초 전환가의 70~80%로 정해져 큰 다운라운드에서 보호가 부족한 경우", "주식분할·무상증자 같은 기계적 조정 조항조차 빠진 경우"],
  "k~ts~redemption-put": ["풋옵션 가격에 이미 받은 배당금을 빼는지, 지연이자는 얼마인지 정하지 않은 경우", "풋옵션 행사 사유에 ‘중대한 계약 위반’만 있고 횡령·배임, 허위 진술, 핵심 인력 이탈 같은 구체적 사유가 없는 경우"],
  "k~ts~call-option": ["콜옵션 행사 대상이 ‘투자자 지분 전부’로 되어 있는 경우", "회사 가치가 오른 뒤에도 고정 가격으로 행사할 수 있는 경우"],
  "k~ts~token-rights": ["토큰을 발행하는 주체가 회사가 아니라 재단·다른 법인으로 정해져 있어 지분 투자자에게 권리가 없는 경우"],
  "k~ts~protective-provisions": ["사전동의 대상에 ‘자회사’의 행위가 빠져 있어 자회사를 통해 우회할 수 있는 경우", "동의 기한 내 회신이 없으면 동의한 것으로 보는 조항(간주동의)의 기간이 너무 짧은 경우"],
  "k~ts~board-composition": ["옵저버에게 ‘이사회 결의로 언제든 자료 제공을 제한할 수 있다’는 단서가 붙은 경우"],
  "k~ts~information-rights": ["정보 제공 의무가 ‘상장 준비’나 ‘영업비밀’을 이유로 쉽게 제한되는 경우", "회계감사를 받지 않는 회사인데 감사보고서 대신 무엇을 줄지 정하지 않은 경우"],
  "k~ts~pro-rata-preemptive-right": ["신주인수권 예외(스톡옵션·전략적 투자자 배정 등)가 넓어서 실제로 쓸 수 있는 경우가 거의 없는 경우"],
  "k~ts~rofr-co-sale-drag-along": ["동반매각권 발동 기준 가격이 없어 헐값 매각에 끌려갈 수 있는 경우", "창업자의 ‘가족·지주회사 양도’ 예외가 넓어 실질적으로 지분을 넘길 수 있는 경우"],
  "k~ts~founder-vesting-and-commitment": ["창업자가 다른 회사 이사·자문역을 겸하는 것을 허용하는 예외가 넓은 경우"],
  "k~ts~conditions-precedent": ["회사 측 선행조건(정관 변경, 기존 주주 동의)은 있는데 우리 측 조건(투자심의·규제 승인)이 빠진 경우", "선행조건 미충족 시 누가 비용을 부담하는지 정하지 않은 경우"],
  "k~ts~exclusivity-no-shop": ["독점 기간 중 회사가 다른 투자자 제안을 받으면 우리에게 알려야 할 의무가 없는 경우"],
  "k~ts~expenses": ["회사가 부담하기로 한 우리 비용을 투자금에서 공제하는지, 따로 지급하는지 불명확한 경우"],
  "k~ts~binding-and-non-binding-provisions": ["텀시트 유효기간이 없어 몇 달 뒤 조건 그대로 투자를 요구받을 수 있는 경우"],
  // LOI
  "k~loi~proposed-investment": ["투자 형태를 ‘보통주’로 적어 이후 우선주 협상에서 불리한 출발점이 되는 경우"],
  "k~loi~due-diligence": ["회사가 실사 자료를 늦게 줘도 일정이 우리 탓으로 밀리는 구조"],
  "k~loi~approvals-and-regulatory-conditions": ["일정(예: 30일 내 투자 결정)을 확약처럼 적은 경우"],
  "k~loi~non-binding-nature": ["‘성실히 협의한다’는 문구가 구속 조항에 들어가 협상 결렬 시 책임 시비가 생기는 경우"],
  "k~loi~confidentiality-costs-governing-law": ["회사가 LOI 사실을 다른 투자자 유치에 활용(언론·IR 자료)하는 것을 막지 못하는 경우"],
  // SSA
  "k~rcps~issuance-of-shares": ["주당 발행가가 액면가보다 낮은 할인 발행(상법상 주총 특별결의·법원 인가 필요)인 경우", "기존 주주의 신주인수권 포기서 없이 제3자 배정하는 경우"],
  "k~rcps~closing-and-payment": ["납입 계좌가 회사 명의가 아니거나 계약서와 다른 경우(송금 사기·자금 유용 위험)", "납입 후 신주 효력 발생일과 주주명부 기재일이 다르게 적힌 경우"],
  "k~rcps~conditions-precedent": ["선행조건 충족 여부를 회사가 스스로 판단하도록 한 경우(투자자가 확인·면제할 권리가 있어야 함)"],
  "k~rcps~use-of-proceeds": ["자금 사용 내역을 보고할 의무가 없는 경우"],
  "k~rcps~company-representations-and-warranties": ["진술·보장 기준일이 계약 체결일만 있고 납입일(클로징)에는 다시 보장하지 않는 경우", "공개목록이 ‘데이터룸 전체’를 공개한 것으로 보는 포괄 공개인 경우", "재무제표 보장 대상 기간에 최근 분기(감사 전) 자료가 빠진 경우"],
  "k~rcps~founder-representations": ["이해관계인이 서명 당사자가 아니어서 진술·보장 위반에도 직접 책임을 물을 수 없는 경우"],
  "k~rcps~voting-and-dividend-preference": ["우선배당률은 있는데 ‘배당을 하지 않으면 아무 권리 없음’(비누적)이라 사실상 의미가 없는 경우"],
  "k~rcps~liquidation-preference": ["후속 라운드 우선주가 우리보다 선순위가 될 수 있는데 그때 우리 동의가 필요하지 않은 경우"],
  "k~rcps~redemption-right": ["상환 청구 후 회사가 이행하지 못할 때 이해관계인 연대 의무나 풋옵션으로 넘어가는 장치가 없는 경우", "일부 상환만 될 때 어느 투자자 주식부터 상환하는지 정하지 않은 경우"],
  "k~rcps~company-redemption-right-issuer-call": ["회사 상환 통지 후 투자자가 전환을 선택할 수 있는 기간이 없거나 너무 짧은 경우"],
  "k~rcps~conversion-right": ["상장 시 자동 전환 요건(공모가·공모 규모 기준)이 없어 불리한 조건의 상장에서도 우선주가 사라지는 경우"],
  "k~rcps~conversion-price-adjustment-refixing": ["리픽싱 사유에 전환사채·신주인수권부사채·조건부지분인수계약 발행이 빠진 경우", "리픽싱이 ‘투자자 청구 시’에만 적용되고 자동 조정이 아닌 경우(청구 기한을 놓치면 끝)"],
  "k~rcps~duration": ["존속기간 만료 전에 상장하면 자동 전환된다고만 하고, 상장이 무산될 때의 처리가 없는 경우"],
  "k~rcps~termination-before-closing": ["해제 시 이미 지출한 실사·법률 비용의 정산 조항이 없는 경우"],
  "k~rcps~virtual-asset-regulatory-warranties": ["회사가 보유한 토큰·코인의 가치가 재무제표에 어떻게 반영됐는지(평가 기준) 보장하지 않는 경우"],
  "k~rcps~virtual-asset-regulatory-approvals": ["규제 승인 실패 시 투자금 반환 시기와 이자가 정해지지 않은 경우"],
  // SHA
  "k~sha~consent-and-consultation-matters": ["동의 대상 금액 기준이 회사 규모에 비해 너무 높아 사실상 모든 거래가 빠지는 경우", "동의 없이 한 행위의 효과(무효·주식매수청구 사유)를 정하지 않은 경우"],
  "k~sha~consent-to-token-issuance-and-listing": ["토큰 판매 대금을 회사가 아닌 재단이 받는 구조"],
  "k~sha~information-and-inspection": ["정보 요청 시 비용을 투자자가 부담하게 한 경우", "투자자가 받은 정보를 모회사·감독당국에 보고할 수 있는지 불명확한 경우"],
  "k~sha~board-and-observer-rights": ["옵저버 지명권이 지분율 기준(예: 5% 이상)에 묶여 후속 라운드 희석 후 바로 없어지는 경우"],
  "k~sha~preemptive-right": ["신주인수권을 행사하지 않으면 이후 라운드에서도 권리를 잃는 조항(Pay-to-play 유사)"],
  "k~sha~right-of-first-refusal": ["우선매수 가격이 ‘제3자 제안 가격’이 아니라 회사가 정한 가격으로 되어 있는 경우", "비금전 대가(주식 교환 등)일 때 가격 산정 방법이 없는 경우"],
  "k~sha~tag-along": ["공동매도 시 매수인이 요구하는 진술·보장과 책임을 투자자도 똑같이 지게 한 경우"],
  "k~sha~drag-along": ["동반매각에 끌려갈 때 경업금지·진술·보장 책임까지 지게 한 경우", "매각 대가가 현금이 아니라 비상장 주식인 경우"],
  "k~sha~founder-lock-up": ["처분 제한 위반 시 효과(양도 무효·위약벌·풋옵션)가 없는 경우"],
  "k~sha~non-compete-and-full-time-commitment": ["경업금지 위반 시 구제수단이 없는 경우"],
  "k~sha~put-option": ["풋옵션 행사 기간이 사유 발생 후 짧게(예: 30일) 정해져, 늦게 알게 되면 권리를 잃는 경우", "매수 대금 지급이 늦어질 때 지연이자나 담보 실행 같은 강제 수단이 없는 경우"],
  "k~sha~call-option-founder-or-designee": ["콜옵션을 행사한 뒤 대금을 안 내도 아무 불이익이 없는 경우", "지정인이 경쟁사나 우리가 투자할 수 없는 자일 수 있는 경우"],
  "k~sha~investor-call-option": ["행사 기간이 짧아 내부 승인을 받을 수 없는 경우"],
  "k~sha~token-warrant": ["토큰 워런트 양도가 금지되어 우리가 받을 수 없을 때 계열사로 넘길 수 없는 경우"],
  "k~sha~scope-of-founder-liability": ["책임 범위를 너무 좁혀(예: 형사 유죄 확정 시만) 사실상 책임을 묻기 어려운 경우"],
  "k~sha~penalty-and-indemnification": ["위약벌과 손해배상을 함께 청구할 수 있는지 정하지 않은 경우(위약벌만 받고 끝날 수 있음)"],
  "k~sha~most-favored-nation": ["MFN 적용을 ‘투자자가 요청한 날부터’로 해서 소급 적용이 안 되는 경우"],
  "k~sha~stock-option-pool": ["옵션 행사가격이 투자 가격보다 크게 낮은 경우(세무·회계 이슈와 지분 희석)"],
  "k~sha~exit-covenant": ["IPO 노력 의무 위반 시 효과가 없는 경우(동반매각권이나 풋옵션과 연결해야 함)"],
  "k~sha~compliance-anti-corruption-sanctions": ["위반 시 통지 의무와 투자자의 구제수단(풋옵션 사유)이 연결되지 않은 경우"],
  "k~sha~licence-custody-and-security-covenants": ["보안 사고 시 회사의 보험 가입·보상 재원에 대한 확약이 없는 경우"],
  "k~sha~termination-and-disputes": ["투자자가 지분을 일부만 팔아도 모든 권리가 사라지는 경우", "중재지·언어를 정하지 않은 국제 중재 조항"],
  // SPA
  "k~spa-kr~sale-shares": ["매매대상주식에 이미 질권이 설정되어 있는데 거래종결 전에 해제 의무가 없는 경우"],
  "k~spa-kr~purchase-price-and-payment": ["가격 조정(실사 결과 반영) 조항 없이 고정 가격만 있는 경우"],
  "k~spa-kr~transfer-mechanics": ["주권 발행 회사인데 주권 교부 없이 양도계약만으로 끝나는 경우(상법상 주권 교부가 효력 요건)"],
  "k~spa-kr~seller-representations": ["매도인이 여러 명인데 책임이 ‘각자’로만 되어 있어 일부 매도인이 자력이 없으면 배상받기 어려운 경우"],
  "k~spa-kr~company-acknowledgment": ["대상회사가 계약 당사자가 아니어서 확인서 외에는 아무 의무도 지지 않는 경우"],
  "k~spa-kr~consents-and-waivers": ["기존 투자자의 공동매도권 포기서가 빠져 거래종결 후 공동매도 청구를 받는 경우"],
  "k~spa-kr~assignment-of-investor-rights-deed-of-adherence": ["매도인의 권리 중 일부(정보권 등)만 승계되고 사전동의권·풋옵션은 승계되지 않는 경우"],
  "k~spa-kr~taxes": ["거래로 생기는 증권거래세 등 세금을 누가 내는지 정하지 않은 경우"],
  "k~spa-kr~indemnification": ["매도인이 개인이고 매매대금을 받은 뒤 해외로 나가 배상 집행이 어려운 경우(에스크로·보증 필요)"],
  "k~spa-kr~call-and-put-over-remaining-shares": ["매도인의 잔여 주식에 질권이 설정되어 콜옵션을 행사해도 깨끗하게 이전받을 수 없는 경우"]
  };
  GUIDE.flagMore = GUIDE.flagMore || {};
  Object.keys(M).forEach(function (k) { GUIDE.flagMore[k] = M[k]; });
})();
(function () {
  GUIDE.contracts.forEach(function (c) { if (c.id !== "nda") return; c.clauses.forEach(function (k) {
    if (k.en === "Non-Solicitation") {
      k.def = { ko: "투자자가 피투자사 임직원에게 채용을 권유하지 않을 의무.", en: k.def.en };
      k.flag = { ko: "채용 권유 금지 의무가 그룹 전 계열사에 적용되는 경우입니다. 다른 계열사가 정상적으로 채용해도 위반이 될 수 있으므로 의무 주체는 계약 당사자로, 기간은 12개월 이내로, 대상은 실제로 만난 핵심 임직원으로 좁혀야 합니다.", en: "" };
    }
  }); });
  var j = GUIDE.jn["k~nda~non-solicitation"];
  if (j && j.US) j.US.ko = "캘리포니아 등 일부 주에서는 채용 권유 금지·경업금지 약정의 효력이 크게 제한됩니다.";
})();
