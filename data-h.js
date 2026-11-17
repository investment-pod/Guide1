window.GUIDE = window.GUIDE || {};
/* Beginner-friendly watch-outs (flag) and English drafting terms per clause.
   key -> [flag (ko), [English provisions / terms to look for]] */
(function () {
  var H = {
  // ---------------- NDA ----------------
  "k~nda~definition-of-confidential-information": ["회사가 준 정보는 표시 여부와 상관없이 모두, 기한 없이 비밀이라고 정한 경우입니다. 이렇게 되면 어떤 정보가 비밀인지 경계가 없어, 나중에 우리가 다른 경로로 알게 된 정보까지 위반 시비가 붙을 수 있습니다.", ["“Confidential Information” definition", "Written, oral and electronic disclosures", "Marking / legend requirement", "Oral disclosure confirmed in writing within [15] days", "Fact and terms of discussions"]],
  "k~nda~exclusions": ["회사가 ‘독자 개발’ 예외를 빼 달라고 하는 경우입니다. 이 예외가 없으면 우리가 같은 업종의 다른 회사에 투자하거나 계열사가 비슷한 사업을 할 때 ‘그 정보를 써서 한 것 아니냐’는 주장을 막기 어렵습니다.", ["Exclusions: public domain", "Prior possession", "Lawfully received from a third party", "Independently developed (written records)"]],
  "k~nda~representatives": ["정보를 공유할 수 있는 범위를 ‘계열사 및 그 임직원 전체’처럼 넓게 쓴 경우입니다. 증권사는 IB·리서치·세일즈 부서와 정보를 나눌 수 없는 정보교류차단 의무가 있어, 계약상 허용되더라도 실제로 공유하면 내부통제 위반이 됩니다.", ["“Representatives” definition", "Need-to-know basis", "Investment committee, compliance and risk", "Professional advisers", "Co-investors with prior written consent", "Responsibility for Representatives’ breach"]],
  "k~nda~permitted-purpose": ["사용 목적이 ‘거래 검토’로만 좁게 적힌 경우입니다. 투자 후에도 같은 자료로 분기 평가·내부 보고를 하므로, 목적이 좁으면 투자 후 사용이 계약 위반이 될 수 있습니다.", ["“Permitted Purpose”: evaluate, negotiate, complete and monitor", "Standard of care (no less than reasonable care)"]],
  "k~nda~compelled-and-regulatory-disclosure": ["모든 공개 전에 회사에 미리 알리고 동의를 받으라는 조항입니다. 금융감독원 검사처럼 미리 알릴 수 없는 상황이 있어서, 그대로 서명하면 검사에 응하는 것만으로 계약 위반이 될 수 있습니다.", ["Compelled disclosure: prompt notice where lawful", "Minimum disclosure", "Regulatory examination carve-out (no notice required)"]],
  "k~nda~return-or-destruction": ["예외 없이 모든 자료를 파기하고 파기확인서를 내라는 요구입니다. 증권사는 법령·내부규정상 투자 기록을 보관해야 하고 백업 서버 자료는 지울 수 없어서, 지킬 수 없는 의무를 지게 됩니다.", ["Return or destruction on request", "Retention under law or compliance policy", "Automatic backup systems exception", "Continuing confidentiality of retained copies"]],
  "k~nda~term": ["모든 정보를 영구히 비밀로 해야 하는 경우입니다. 시간이 지나 의미가 없어진 정보까지 계속 관리해야 하고, 위반 위험이 끝나지 않습니다. 보통 2–3년으로 하고 영업비밀만 따로 오래 보호합니다.", ["Term: [2–3] years", "Trade secrets protected while they remain trade secrets", "Survival"]],
  "k~nda~non-solicitation": ["인력 스카우트 금지가 그룹 전 계열사에 적용되는 경우입니다. 다른 계열사가 정상적인 채용을 해도 위반이 될 수 있으니 계약 당사자와 기간(12개월 이내), 대상(실제로 만난 핵심 인력)을 좁혀야 합니다.", ["Non-solicitation: [12] months", "Key employees met in the process", "General solicitation exception"]],
  "k~nda~no-obligation-no-agency": ["‘투자 의무 없음’ 문구가 빠진 경우입니다. 이 문구가 없으면 NDA를 맺고 자료를 검토한 것만으로 투자를 약속한 것처럼 주장될 여지가 생깁니다.", ["No obligation to proceed", "Either party may terminate discussions", "No representation or warranty (“as is”)", "Definitive agreements govern"]],
  "k~nda~remedies-governing-law": ["위반 시 정해진 금액을 무조건 내는 위약벌이나 간접손해까지 배상하는 조항입니다. 실제 손해와 관계없이 큰 금액을 물 수 있으니, 실제 손해 배상과 가처분 정도로 한정합니다.", ["Injunctive relief", "Direct damages only", "Governing law", "Jurisdiction / arbitration (seat, rules, language)"]],

  // ---------------- Term Sheet ----------------
  "k~ts~security-and-amount": ["리드 투자자가 정해지지 않았는데 조건부터 확정하는 경우입니다. 이후 리드 투자자가 들어오면서 조건을 다시 바꾸자고 하는 일이 많아, 우리가 먼저 합의한 조건이 무의미해질 수 있습니다.", ["Security (Series [●] Preferred / RCPS)", "Aggregate round size", "Investor allocation", "Lead investor", "Minimum closing amount"]],
  "k~ts~pre-money-valuation-and-price-per-share": ["스톡옵션 풀 확대분을 투자 전 기업가치에 넣는 경우(Option Pool Shuffle)입니다. 겉으로 보이는 기업가치는 같아도 주당 가격이 낮아져, 사실상 기존 주주가 아니라 우리 지분이 희석되는 효과가 납니다.", ["Pre-money valuation", "Price per share", "Fully diluted capitalization", "Option pool increase (pre- or post-money)", "Capitalization table"]],
  "k~ts~liquidation-preference": ["우리보다 앞선 투자자가 참가형 또는 2배 이상의 우선권을 가진 경우입니다. 회사가 팔렸을 때 그 투자자가 먼저 많이 가져가고, 남은 금액을 다시 나눠 가져가서 우리 회수액이 크게 줄어듭니다.", ["Liquidation preference: [1]x", "Non-participating vs participating", "Seniority / pari passu among series", "Deemed liquidation event"]],
  "k~ts~anti-dilution": ["희석방지 조항이 아예 없거나, 예외 발행 범위가 지나치게 넓은 경우입니다. 다음 라운드가 더 낮은 가격(다운라운드)으로 진행될 때 우리 전환가격이 조정되지 않아 손실을 그대로 떠안습니다.", ["Anti-dilution: broad-based weighted average", "Full ratchet (avoid)", "Exempted securities", "Refixing (Korea)"]],
  "k~ts~redemption-put": ["상환 청구 시점이 10년 뒤처럼 너무 늦게 정해진 경우입니다. 형식상 권리는 있지만 실제로 쓸 수 없어 투자금을 회수하는 안전장치 역할을 하지 못합니다.", ["Redemption right: from year [3–5]", "Redemption price: principal + [●]% p.a. compounded", "Put option triggers", "Obligors (company / founders)"]],
  "k~ts~call-option": ["텀시트에 없던 창업자 콜옵션이 본계약 초안에 새로 들어오는 경우입니다. 콜옵션은 우리 수익의 상한을 정하는 경제 조건이라, 텀시트 단계에서 합의하지 않았다면 받아들이지 않는 것이 원칙입니다.", ["Call option: grantee (founders / designee)", "Portion cap ([●]%)", "Exercise window", "Exercise price floor (IRR or latest round)", "Exercise conditions"]],
  "k~ts~protective-provisions": ["예산 집행, 채용처럼 일상 경영까지 우리 동의를 받게 한 경우입니다. 경영에 깊이 관여하는 것으로 보이면 공정거래법상 계열회사 편입이나 금산법상 ‘사실상 지배’ 판단으로 이어질 수 있습니다.", ["Protective provisions / consent matters", "Charter amendments", "Senior or pari passu securities", "M&A and liquidation", "Debt above threshold", "Related-party transactions"]],
  "k~ts~board-composition": ["내부 승인 없이 우리 직원이 피투자사 등기이사로 들어가는 경우입니다. 이사는 회사에 대한 법적 책임을 지고 이해상충 문제도 생기므로, 보통은 의결권 없는 옵저버로 참여합니다.", ["Board composition", "Investor director / observer right", "Ownership threshold to keep the seat", "D&O insurance"]],
  "k~ts~information-rights": ["SAFE나 소액 투자라 정보권이 아예 없는 경우입니다. 증권사는 분기마다 투자자산의 공정가치를 평가해야 하는데, 재무자료를 받을 권리가 없으면 평가 자체가 불가능합니다.", ["Information rights", "Quarterly financials within [45] days", "Audited annual financials within [120] days", "Annual budget", "Capitalization table updates"]],
  "k~ts~pro-rata-preemptive-right": ["보유 지분이 ‘주요 투자자(Major Investor)’ 기준에 못 미쳐 신주인수권이 없는 경우입니다. 다음 라운드에 참여할 권리가 없어 지분율이 계속 줄어듭니다.", ["Pre-emptive / pro rata right", "Over-allotment", "Exercise through affiliates", "Major Investor threshold"]],
  "k~ts~rofr-co-sale-drag-along": ["창업자 주식뿐 아니라 우리 지분에도 회사·다른 주주의 우선매수권(ROFR)이 걸린 경우입니다. 우리가 지분을 팔 때마다 다른 주주에게 먼저 제안해야 해서 매각이 느려지고 가격 협상력이 떨어집니다.", ["Right of first refusal on founder shares", "Co-sale (tag-along)", "Drag-along thresholds", "Permitted transfers to affiliates"]],
  "k~ts~founder-vesting-and-commitment": ["공동창업자가 회사를 떠날 때 그 지분을 어떻게 할지 정하지 않은 경우입니다. 퇴사한 창업자가 큰 지분을 계속 들고 있으면 의사결정과 후속 투자 유치가 어려워집니다.", ["Founder vesting: [4] years, [1]-year cliff", "Acceleration", "Full-time commitment", "Leaver provisions"]],
  "k~ts~conditions-precedent": ["투자심의위원회 승인이나 금산법·외국환 신고 같은 규제 절차가 조건에서 빠진 경우입니다. 승인이 나지 않아도 투자해야 하는 의무가 생겨 내부 규정이나 법령을 위반할 수 있습니다.", ["Conditions precedent", "Satisfactory due diligence", "Investment committee approval", "Regulatory approvals and filings", "Definitive agreements"]],
  "k~ts~exclusivity-no-shop": ["회사는 독점협상을 거부하면서 우리만 실사 비용을 쓰는 경우입니다. 비용을 들여 실사를 끝냈는데 회사가 다른 투자자와 계약해 버릴 수 있습니다.", ["Exclusivity / no-shop: [30–60] days", "Binding provision", "Notice of unsolicited approaches"]],
  "k~ts~expenses": ["딜이 무산되어도 모든 비용을 우리가 부담하는 경우입니다. 회사 사정으로 무산될 때를 대비해 비용 분담이나 회사 부담 상한을 정해 둡니다.", ["Expenses: each party bears its own", "Company reimbursement of lead counsel (cap)", "Binding provision"]],
  "k~ts~binding-and-non-binding-provisions": ["어떤 조항에 구속력이 있는지 구분하지 않은 경우입니다. 나중에 상대방이 ‘텀시트 전체가 계약’이라고 주장하면 투자를 거절하기 어려워집니다.", ["Non-binding effect", "Binding provisions: exclusivity, confidentiality, expenses, governing law", "Expiry date"]],

  // ---------------- LOI ----------------
  "k~loi~proposed-investment": ["기업가치를 범위가 아니라 하나의 숫자로 적은 경우입니다. 실사에서 문제가 나와도 회사는 LOI의 숫자를 기준으로 협상하려 해 가격을 조정하기 어렵습니다.", ["Proposed instrument", "Indicative amount", "Indicative valuation range", "Subject to due diligence"]],
  "k~loi~key-terms": ["주요 조건을 전혀 적지 않은 경우입니다. 텀시트 단계에서 회사가 예상하지 못한 조건이라며 반발하기 쉬우니, 통상의 투자자 보호 조건이 들어간다는 점을 미리 알려 둡니다.", ["Customary investor protections", "Liquidation preference", "Information and consent rights", "Pre-emptive and co-sale rights"]],
  "k~loi~due-diligence": ["실사 기간과 범위를 정하지 않은 경우입니다. 자료 제출이 늦어져 일정이 계속 밀리고, 실사가 끝나지 않았는데 텀시트를 서두르게 됩니다.", ["Due diligence scope (legal, financial, tax)", "Timetable", "Document request list", "Access to management"]],
  "k~loi~approvals-and-regulatory-conditions": ["내부 승인이 조건이라는 문구가 없는 경우입니다. 회사가 LOI를 사실상의 투자 확약으로 받아들여 다른 투자 유치를 멈추면 분쟁이 생길 수 있습니다.", ["Investment committee approval", "Regulatory approvals (FX filings, Art. 24, CFIUS)", "Indicative timetable"]],
  "k~loi~non-binding-nature": ["구속력 없는 조항과 있는 조항을 구분하지 않은 경우입니다. 번호로 특정하지 않으면 LOI 전체가 계약처럼 다퉈질 수 있습니다.", ["Non-binding nature", "Binding paragraphs by number", "No obligation to invest"]],
  "k~loi~exclusivity": ["회사는 자유롭게 다른 투자자를 만나면서 우리만 묶이는 일방적 독점입니다. LOI 단계에서는 독점을 짧게 하거나 빼고, 텀시트에서 제대로 정합니다.", ["Exclusivity (short, optional)", "Mutual vs one-way", "Duration"]],
  "k~loi~confidentiality-costs-governing-law": ["비밀유지 조항에 감독당국·자문사 공개 예외가 빠진 경우입니다. 내부 보고나 법률 검토를 위한 공유도 위반이 될 수 있습니다.", ["Confidentiality (binding)", "Carve-outs: personnel, advisers, regulators", "Costs (binding)", "Governing law (binding)"]],
  "k~loi~expiry": ["회신 기한이 없는 경우입니다. 회사가 몇 달 뒤 LOI를 근거로 투자를 요구할 수 있으니 기한이 지나면 자동으로 효력이 없어지게 합니다.", ["Expiry date", "Countersignature", "Automatic lapse"]],

  // ---------------- SSA ----------------
  "k~rcps~issuance-of-shares": ["정관에 근거가 없는 종류주식(우선주)을 발행하는 경우입니다. 상법상 종류주식은 정관에 내용이 있어야 하므로, 근거 없이 발행하면 우리가 받은 우선주 권리 자체가 다퉈질 수 있습니다.", ["Subscription shares (class, number, price)", "Aggregate subscription price", "Authorized share capital", "Waiver of pre-emption rights", "Amended articles / constitution"]],
  "k~rcps~closing-and-payment": ["돈을 넣은 뒤 등기가 제대로 됐는지 확인하는 절차가 없는 경우입니다. 회사가 변경등기를 늦추거나 빠뜨리면 우리가 주주라는 공식 증빙이 없게 됩니다.", ["Completion / closing date", "Payment mechanics", "Closing deliverables", "Registration of allotment", "Updated register of members"]],
  "k~rcps~conditions-precedent": ["우리 투자심의위원회 승인이 조건에 없는 경우입니다. 승인이 나기 전에 계약을 맺으면 승인이 거절돼도 돈을 넣어야 하는 상황이 생깁니다.", ["Conditions precedent", "Accuracy of warranties", "Corporate approvals", "Investor internal and regulatory approvals", "No material adverse change", "Long-stop date"]],
  "k~rcps~use-of-proceeds": ["자금 용도를 어겼을 때 아무 제재가 없는 경우입니다. 위반하면 주식매수청구(풋옵션)나 해지 사유가 되도록 연결해야 실제로 지켜집니다.", ["Use of proceeds", "Prohibited uses (founder loans, related parties)", "Link to put option / default"]],
  "k~rcps~company-representations-and-warranties": ["모든 진술·보장 앞에 ‘회사가 아는 한’이라는 단서가 붙은 경우입니다. 회사가 몰랐다고만 하면 책임을 피할 수 있어 보장이 사실상 의미 없어집니다.", ["Representations and warranties", "Capitalization", "Financial statements", "Intellectual property", "Litigation, tax, employment", "Compliance (anti-bribery, sanctions)", "Disclosure letter / schedule", "Knowledge qualifier"]],
  "k~rcps~founder-representations": ["대표이사·최대주주 개인의 진술이 빠진 경우입니다. 창업자 지분에 담보가 잡혀 있거나 이전 직장과 분쟁이 있어도 책임을 물을 근거가 없습니다.", ["Founder warranties", "Title to shares, no encumbrances", "No conflicting engagements", "IP assignment"]],
  "k~rcps~voting-and-dividend-preference": ["의결권이 없는 우선주로 받는 경우입니다. 주주총회에서 목소리를 낼 수 없어 계약상 동의권에만 의존하게 됩니다(다만 금산법 한도 관리를 위해 일부러 무의결권을 택하기도 합니다).", ["Voting rights (as-converted)", "Dividend preference: [●]%", "Cumulative / non-cumulative", "Participating / non-participating"]],
  "k~rcps~liquidation-preference": ["합병이나 회사 매각을 ‘청산’으로 보는 조항(간주청산)이 없는 경우입니다. 실제 청산은 드물고 대부분 매각으로 엑시트하는데, 이 조항이 없으면 매각 때 우선권이 작동하지 않습니다.", ["Liquidation preference", "Deemed liquidation event", "Order of priority", "Accrued but unpaid dividends"]],
  "k~rcps~redemption-right": ["배당가능이익 한도를 고려하지 않고 상환을 약속한 경우입니다. 상법상 이익이 없으면 회사가 상환할 수 없어서, 이월·지연이자·창업자 풋 같은 대안이 없으면 실제로 돈을 돌려받지 못합니다.", ["Redemption right (holder option)", "Redemption start date", "Redemption price: principal + [●]% p.a.", "Distributable profits limit", "Carry-forward and default interest"]],
  "k~rcps~company-redemption-right-issuer-call": ["정관에 ‘회사 선택에 따라 상환’만 있고 투자자의 상환권은 없는 경우입니다. 회사가 유리할 때 원금 수준으로 상환해 버리면 우리는 지분 가치 상승분을 잃습니다.", ["Company redemption (issuer call)", "Investor consent", "Minimum return", "Right to convert after redemption notice"]],
  "k~rcps~conversion-right": ["회사가 일방적으로 보통주로 전환시킬 수 있는 경우입니다. 우선주 권리(청산우선권·상환권)를 우리 의사와 관계없이 잃게 됩니다.", ["Optional conversion", "Conversion ratio 1:1", "Automatic conversion on Qualified IPO", "Conversion procedure"]],
  "k~rcps~conversion-price-adjustment-refixing": ["스톡옵션·전략적 제휴 등 예외 발행 범위가 너무 넓은 경우입니다. 낮은 가격으로 주식이 나가도 예외에 해당해 전환가격이 조정되지 않습니다.", ["Anti-dilution / refixing", "Down-round adjustment", "Stock splits and bonus issues", "IPO price adjustment", "Exempted issuances", "Floor (par value)"]],
  "k~rcps~duration": ["우선주 존속기간이 상환 청구 기간보다 먼저 끝나는 경우입니다. 상환을 청구하기도 전에 보통주로 자동 전환돼 상환권을 쓸 수 없습니다.", ["Duration: [10] years", "Automatic conversion at expiry", "Extension while redemption is unpaid"]],
  "k~rcps~termination-before-closing": ["롱스톱 데이트(최종 기한)가 없는 경우입니다. 선행조건이 계속 충족되지 않아도 계약에서 빠져나올 시점이 없어 자금과 한도가 묶입니다.", ["Termination before completion", "Long-stop date", "Material breach and cure period", "Survival of accrued rights"]],

  // ---------------- SHA ----------------
  "k~sha~consent-and-consultation-matters": ["일상 경영 사항까지 우리 동의를 받게 한 경우입니다. 회사 운영이 느려지는 것은 물론, 우리가 회사를 지배한다고 보일 수 있어 공정거래법·금산법 문제로 번질 수 있습니다.", ["Reserved matters / consent matters", "Consultation matters", "Subsidiaries", "Response period", "Deemed consent"]],
  "k~sha~information-and-inspection": ["제출 기한 없이 ‘요청하면 제공’이라고만 쓴 경우입니다. 요청할 때마다 회사가 미루면 분기 평가와 내부 보고 일정을 맞출 수 없습니다.", ["Information rights (quarterly, annual, budget)", "Delivery deadlines", "Inspection rights", "Notice of material events"]],
  "k~sha~board-and-observer-rights": ["옵저버에게 비밀유지 의무만 지우고 이사회 자료는 주지 않는 경우입니다. 이름만 옵저버일 뿐 실제로 회사 상황을 알 수 없습니다.", ["Board composition", "Observer rights (notice, materials, attendance)", "Ownership threshold", "Recusal for conflicts"]],
  "k~sha~preemptive-right": ["신주인수권 행사 기간이 우리 내부 승인 기간보다 짧은 경우입니다. 권리는 있지만 투자심의를 받을 시간이 없어 사실상 행사할 수 없습니다.", ["Pre-emptive rights", "Notice period [15] business days", "Over-allotment", "Exercise through affiliates", "Excluded issuances"]],
  "k~sha~right-of-first-refusal": ["창업자가 주식을 팔면서 통지하지 않아도 아무 불이익이 없는 경우입니다. 통지 의무 위반 시 양도 무효나 우리 풋옵션 같은 효과를 정해야 권리가 지켜집니다.", ["Right of first refusal (ROFR)", "Transfer notice", "Exercise period", "Consequences of breach"]],
  "k~sha~tag-along": ["창업자가 일정 비율 이하를 팔 때는 공동매도권이 적용되지 않게 한 경우입니다. 창업자가 여러 번 나눠 팔면 우리는 함께 팔 기회를 계속 놓칩니다.", ["Tag-along / co-sale", "Pro rata participation", "Same price and terms", "Buyer must acquire tagged shares"]],
  "k~sha~drag-along": ["매각대금을 청산우선권 순서가 아니라 지분율대로 나누도록 한 경우입니다. 낮은 가격에 회사가 팔리면 우선주의 보호 장치가 사라집니다.", ["Drag-along", "Approval thresholds", "Minimum price", "Allocation per liquidation preference", "Limits on dragged holders’ liability"]],
  "k~sha~founder-lock-up": ["주식 매각은 막았지만 주식을 담보로 맡기는 것(질권 설정)은 막지 않은 경우입니다. 창업자가 대출을 못 갚으면 담보권자가 주식을 가져가 최대주주가 바뀔 수 있습니다.", ["Founder lock-up", "No transfer or encumbrance without consent", "Permitted transfers (estate planning)"]],
  "k~sha~non-compete-and-full-time-commitment": ["경업금지 기간과 범위를 지나치게 넓게 정한 경우입니다. 법원은 과도한 경업금지를 무효로 볼 수 있어 오히려 아무 보호도 못 받을 수 있습니다.", ["Non-compete (during and [12] months after)", "Non-solicit", "Full-time commitment", "Reasonableness of scope"]],
  "k~sha~put-option": ["풋옵션 의무자를 회사로만 정한 경우입니다. 회사는 배당가능이익 범위에서만 자기주식을 살 수 있어서, 회사 사정이 나쁠 때(바로 풋을 써야 할 때) 돈을 받지 못합니다.", ["Put option triggers", "Put price: principal + [●]% p.a. compounded", "Obligors (company and founders)", "Payment deadline and default interest", "Security (share pledge)"]],
  "k~sha~call-option-founder-or-designee": ["콜옵션 행사가격이 원금 수준이거나, 누가 사갈 수 있는지(지정인) 제한이 없는 경우입니다. 회사가 잘될수록 창업자나 제3자가 싸게 지분을 가져가 우리 수익이 원금 수준으로 묶입니다.", ["Call option grantee and designee approval", "Portion cap", "Exercise window", "Exercise price floor", "No exercise during breach or IPO process", "Payment deadline"]],
  "k~sha~investor-call-option": ["가격이나 기한 없이 ‘우선 협의한다’ 정도로만 쓴 경우입니다. 협의만 하면 되는 권리라 실제로는 아무것도 보장받지 못합니다.", ["Investor call option triggers", "Exercise price", "Follow-on option (valuation, amount, deadline)", "Warrant / statutory instrument"]],
  "k~sha~scope-of-founder-liability": ["회사의 모든 의무에 대해 창업자가 무제한으로 연대책임을 지게 한 경우입니다. 실제 분쟁에서 창업자와 관계가 틀어지고, 과도한 조건으로 평판 문제가 될 수 있습니다. 고의·중과실과 금액 한도로 제한하는 추세입니다.", ["Founder liability limited to fraud, wilful misconduct or gross negligence", "Liability cap", "Joint and several vs several"]],
  "k~sha~penalty-and-indemnification": ["위반 시 투자금의 수배에 이르는 위약벌을 정한 경우입니다. 국내 법원은 과도한 위약벌을 줄이고, 영미법 국가에서는 ‘penalty’로 보아 무효가 될 수 있습니다.", ["Indemnification", "Liquidated damages (genuine pre-estimate)", "Caps and survival"]],
  "k~sha~most-favored-nation": ["최혜대우 조항이 없는 경우입니다. 다음 투자자가 더 좋은 조건을 받아도 우리는 기존 조건에 머물러 상대적으로 불리해집니다.", ["Most favoured nation (MFN)", "Period", "Scope (economic terms / all terms)"]],
  "k~sha~stock-option-pool": ["이미 부여한 스톡옵션의 절차(주총 결의 등)에 하자가 있는 경우입니다. 나중에 무효 다툼이 생기면 자본구조가 흔들리고 상장 심사에서도 문제가 됩니다.", ["Option pool size ([10]%)", "Grant approvals", "Vesting", "Consent above the pool"]],
  "k~sha~exit-covenant": ["상장 주관사 지정권을 우리에게 주는 조항입니다. 증권사가 투자자이면서 주관사가 되면 이해상충과 주관사 지분 보유 한도 문제가 생깁니다.", ["Exit covenant (IPO / trade sale within [5] years)", "Consequences of failure (put, drag)", "Underwriter selection (no condition)"]],
  "k~sha~compliance-anti-corruption-sanctions": ["준법 조항에 우리 회사의 내부 기준(부패방지·제재·자금세탁방지)이 반영되지 않은 경우입니다. 피투자사의 위반이 금융회사인 우리에게 평판·제재 리스크로 돌아옵니다.", ["Compliance with laws", "Anti-bribery (FCPA)", "Sanctions (OFAC)", "Anti-money laundering", "Data protection"]],
  "k~sha~termination-and-disputes": ["상장 후에도 주주간 특약이 계속 남는 경우입니다. 거래소는 상장 후 특정 주주에게 특별한 권리가 남는 것을 문제 삼아 상장 심사가 지연될 수 있습니다.", ["Termination on IPO", "Survival", "Governing law", "Dispute resolution (court / arbitration)"]],

  // ---------------- SPA ----------------
  "k~spa-kr~sale-shares": ["보통주를 사면서 우선주 수준의 가격을 내는 경우입니다. 보통주에는 청산우선권 등 보호 장치가 없으니 가격에 그 차이를 반영해야 합니다.", ["Sale shares (class, number)", "Full title guarantee", "Rights attaching at completion"]],
  "k~spa-kr~purchase-price-and-payment": ["주식을 넘겨받기 전에 대금을 먼저 보내는 경우입니다. 명의개서가 되지 않으면 돈만 나가고 주주가 되지 못할 수 있으니 동시이행이나 에스크로로 합니다.", ["Purchase price", "Payment at completion", "Escrow", "Withholding"]],
  "k~spa-kr~transfer-mechanics": ["주권이 없는 회사인데 명의개서 확인 절차가 없는 경우입니다. 회사 주주명부에 우리 이름이 올라가야 회사에 주주로 대항할 수 있습니다.", ["Instrument of transfer", "Share certificates", "Register of members update", "Company confirmation"]],
  "k~spa-kr~seller-representations": ["매도인에게서 회사 사업에 대한 보장을 거의 받지 못하는 경우입니다. 구주 매입은 매도인이 개인인 경우가 많아, 회사 확인서나 자체 실사로 부족한 부분을 메워야 합니다.", ["Seller warranties: title, capacity, no encumbrances", "No disputes", "Information accuracy (knowledge)"]],
  "k~spa-kr~company-acknowledgment": ["회사의 협조 없이 매도인하고만 거래하는 경우입니다. 회사가 양도를 인정하지 않거나 기존 투자계약상 권리 승계에 동의하지 않으면 문제가 됩니다.", ["Company acknowledgment / certificate", "Capitalization confirmation", "Compliance with constitution"]],
  "k~spa-kr~consents-and-waivers": ["다른 주주의 우선매수권 포기서를 일부 빠뜨린 경우입니다. 포기하지 않은 주주가 나중에 양도가 무효라고 주장할 수 있습니다.", ["ROFR and co-sale waivers", "Board approval of transfer", "Third-party consents"]],
  "k~spa-kr~assignment-of-investor-rights-deed-of-adherence": ["매도인의 투자계약상 권리를 넘겨받지 못하는 경우입니다. 지분만 사고 동의권·정보권 같은 권리는 없어 일반 소액주주와 같아집니다.", ["Assignment of investor rights", "Deed of adherence / joinder", "Founder and company consent"]],
  "k~spa-kr~taxes": ["매도인이 비거주자인데 원천징수를 하지 않은 경우입니다. 세금을 안 낸 책임이 매수인인 우리에게 가산세와 함께 돌아올 수 있습니다.", ["Taxes (capital gains, transaction tax)", "Stamp duty", "Withholding obligation", "Tax indemnity"]],
  "k~spa-kr~indemnification": ["손해배상 청구 기간이 6개월 이하로 짧은 경우입니다. 문제는 보통 다음 결산이나 세무조사에서 드러나므로 그 전에 청구 기간이 끝나 버립니다.", ["Indemnity", "Cap (purchase price)", "Survival period ([2] years)", "Escrow / holdback"]],
  "k~spa-kr~call-and-put-over-remaining-shares": ["가격을 ‘추후 협의’로 남겨 둔 경우입니다. 나중에 합의가 안 되면 옵션이 있어도 행사할 수 없습니다.", ["Call option over remaining shares", "Put option and triggers", "Exercise price formula", "Lock-up of remaining shares", "Security for put obligor"]]
  };
  GUIDE.flagKo = {}; GUIDE.enTerms = {};
  Object.keys(H).forEach(function (k) { GUIDE.flagKo[k] = H[k][0]; GUIDE.enTerms[k] = H[k][1]; });
  var slug = function (s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80); };
  GUIDE.contracts.forEach(function (c) { c.clauses.forEach(function (k) {
    var key = "k~" + c.id + "~" + slug(k.en);
    if (GUIDE.flagKo[key]) k.flag = { ko: GUIDE.flagKo[key], en: (k.flag && k.flag.en) || "" };
  }); });

  /* Abbreviation glossary: expanded on first use within each block */
  GUIDE.abbr = [
    ["ROFR", "Right of First Refusal, 우선매수권"], ["ROFN", "Right of First Negotiation, 우선협상권"], ["MFN", "Most Favored Nation, 최혜대우"],
    ["RCPS", "Redeemable Convertible Preferred Shares, 상환전환우선주"], ["SAFE", "Simple Agreement for Future Equity"], ["CFIUS", "Committee on Foreign Investment in the United States, 미국 외국인투자위원회"],
    ["MAC", "Material Adverse Change, 중대한 부정적 변경"], ["NDA", "Non-Disclosure Agreement, 비밀유지계약"], ["LOI", "Letter of Intent, 투자의향서"],
    ["SSA", "Share Subscription Agreement, 신주인수계약"], ["SHA", "Shareholders’ Agreement, 주주간계약"], ["SPA", "Share Purchase Agreement, 주식매매계약"],
    ["IPO", "Initial Public Offering, 기업공개"], ["M&A", "Mergers and Acquisitions, 인수합병"], ["ESOP", "Employee Stock Option Plan, 임직원 주식매수선택권"],
    ["D&O", "Directors and Officers, 임원배상책임"], ["CB", "Convertible Bond, 전환사채"], ["BW", "Bond with Warrants, 신주인수권부사채"],
    ["NVCA", "National Venture Capital Association, 미국 벤처캐피탈협회"], ["VIMA", "Venture Capital Investment Model Agreements, 싱가포르 벤처투자 모델계약"],
    ["COI", "Certificate of Incorporation, 미국 회사 정관"], ["IRA", "Investors’ Rights Agreement, 투자자권리계약"], ["ADGM", "Abu Dhabi Global Market, 아부다비 국제금융지구"],
    ["DIFC", "Dubai International Financial Centre, 두바이 국제금융센터"], ["SIAC", "Singapore International Arbitration Centre, 싱가포르 국제중재센터"],
    ["ACRA", "Accounting and Corporate Regulatory Authority, 싱가포르 회사등기청"], ["DBD", "Department of Business Development, 태국 상무부 사업개발국"],
    ["BOI", "Board of Investment, 태국 투자청"], ["FBL", "Foreign Business License, 태국 외국인사업허가"], ["FBA", "Foreign Business Act, 태국 외국인사업법"],
    ["AoA", "Articles of Association, 정관"], ["TID", "Technology, Infrastructure, Data – CFIUS 민감 업종"], ["UBO", "Ultimate Beneficial Owner, 실소유자"],
    ["KYC", "Know Your Customer, 고객확인"], ["AML", "Anti-Money Laundering, 자금세탁방지"], ["OFAC", "Office of Foreign Assets Control, 미국 재무부 해외자산통제국"],
    ["FCPA", "Foreign Corrupt Practices Act, 미국 해외부패방지법"], ["PIIA", "Proprietary Information and Inventions Agreement, 발명양도·비밀유지 서약"],
    ["K-IFRS", "한국채택국제회계기준"], ["IRR", "Internal Rate of Return, 내부수익률"], ["KCAB", "Korean Commercial Arbitration Board, 대한상사중재원"],
    ["CARE", "Convertible Agreement Regarding Equity, VIMA의 SAFE형 계약"], ["SME", "Small and Medium-sized Enterprise, 중소기업"]
  ];
})();
