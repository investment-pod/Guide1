window.GUIDE = window.GUIDE || {};
/* Jurisdiction notes for every clause. Format: key -> [[jur, ko, en], ...] */
(function () {
  var N = {
  // ---------- NDA ----------
  "k~nda~definition-of-confidential-information": [
    ["KR", "영업비밀은 부정경쟁방지법으로도 보호되지만, 계약상 정의를 넓게 두는 것이 회사에 유리하므로 범위를 좁히도록 협상합니다.", "Trade secrets are also protected by statute; companies push for a broad contractual definition, so negotiate it down."],
    ["US", "미국 VC 다수는 NDA 서명을 거절합니다. 서명하더라도 표시(marking) 요건을 넣는 것이 관행입니다.", "Many US VCs decline NDAs; if signed, a marking requirement is customary."],
    ["SG", "VIMA에 모델 NDA가 있어 이를 기준으로 요청하면 협상이 짧아집니다.", "VIMA includes a model NDA; using it shortens negotiation."]],
  "k~nda~exclusions": [
    ["US", "독자 개발 예외가 없으면 동종 업계 투자 시 trade secret 분쟁 리스크가 커집니다.", "Without the independent-development carve-out, trade secret claims become a risk when investing in competitors."],
    ["TH", "태국어 번역본이 함께 있으면 예외 조항 문구가 두 언어에서 일치하는지 확인합니다.", "If a Thai translation exists, check that the exclusions match in both languages."]],
  "k~nda~representatives": [
    ["KR", "자본시장법상 정보교류 차단 대상 부서(IB·리서치·세일즈·자기매매)는 공유 허용 대상에서 빼야 합니다.", "Exclude FSCMA information-barrier divisions (IB, research, sales, trading)."],
    ["US", "CFIUS 대상 기업이면 비공개 기술정보를 받는 것 자체가 신고 판단 요소가 될 수 있습니다.", "For CFIUS-sensitive targets, receiving technical information can itself affect filing analysis."],
    ["AE", "그룹 계열사 공유를 허용할 경우 UAE 소재 계열사 포함 여부를 명시합니다.", "If group sharing is allowed, state whether UAE affiliates are included."]],
  "k~nda~permitted-purpose": [
    ["KR", "투자 후 공정가치 평가·감사 대응에도 같은 정보를 쓰므로 사후관리 목적을 포함합니다.", "Include post-investment monitoring, since the same data feeds valuation and audits."],
    ["SG", "VIMA 모델 NDA는 목적을 거래 평가로 정하므로 사후관리 목적을 추가 요청합니다.", "VIMA's model limits purpose to evaluation; add monitoring."]],
  "k~nda~compelled-and-regulatory-disclosure": [
    ["KR", "금융감독원 검사 시 사전통지가 불가능하므로 감독당국 예외를 반드시 둡니다.", "FSS examinations make prior notice impossible; keep the regulator carve-out."],
    ["US", "미국 양식은 ‘protective order’ 협조 의무가 붙는 경우가 많아 감독당국 공개는 예외로 둡니다.", "US forms often require cooperation in seeking protective orders; carve out regulators."],
    ["SG", "싱가포르 MAS 등 현지 감독기관 요청도 예외에 포함되도록 ‘any regulator’로 씁니다.", "Use ‘any regulator’ so local requests are covered."]],
  "k~nda~return-or-destruction": [
    ["KR", "금융투자회사는 투자 관련 기록 보존 의무가 있어 보관 예외가 필요합니다.", "Korean financial investment companies must retain records, so keep a retention carve-out."],
    ["US", "전자 백업 삭제가 불가능하다는 점을 명시하는 것이 관행입니다.", "It is customary to state that electronic backups need not be purged."]],
  "k~nda~term": [
    ["KR", "영업비밀은 기간과 무관하게 법률로도 보호되므로 계약 기간은 2–3년이면 충분합니다.", "Trade secrets are statutorily protected, so 2–3 years suffices."],
    ["US", "주법에 따라 무기한 의무의 효력이 제한될 수 있습니다.", "Some states limit perpetual obligations."]],
  "k~nda~non-solicitation": [
    ["US", "캘리포니아 등 일부 주에서는 비유인·경업 제한의 효력이 크게 제한됩니다.", "California and some states sharply limit non-solicits and non-competes."],
    ["KR", "그룹 전 계열사에 적용되면 증권사 인사 운영에 부담이 됩니다. 계약 당사자로 한정하세요.", "Limit to the contracting entity, not the whole group."]],
  "k~nda~no-obligation-no-agency": [
    ["US", "미국 판례상 협상 중 묵시적 합의 주장이 있으므로 ‘definitive agreement 전 구속력 없음’을 명시합니다.", "State there is no obligation absent a definitive agreement, to avoid implied-contract claims."],
    ["KR", "투자 검토 사실만으로 투자 확약으로 오해되지 않도록 명시합니다.", "Make clear review is not a commitment."]],
  "k~nda~remedies-governing-law": [
    ["KR", "서울중앙지방법원 관할이 일반적이며, 고정 위약벌은 법원이 감액할 수 있습니다.", "Seoul Central District Court is common; courts may reduce fixed penalties."],
    ["US", "델라웨어·뉴욕법 지정이 흔합니다.", "Delaware or New York law is common."],
    ["SG", "SIAC 중재 또는 싱가포르 법원이 일반적입니다.", "SIAC arbitration or Singapore courts."],
    ["AE", "ADGM 법·ADGM Courts를 지정하면 영미법 해석이 적용됩니다.", "ADGM law and courts give common-law interpretation."],
    ["TH", "태국 법원보다 SIAC 중재를 두고 뉴욕협약으로 집행하는 경우가 많습니다.", "SIAC arbitration enforced via the New York Convention is preferred over Thai courts."]],

  // ---------- Term Sheet ----------
  "k~ts~pre-money-valuation-and-price-per-share": [
    ["KR", "미전환 조건부지분인수계약·CB를 완전희석에 포함하는지 확인합니다.", "Check whether outstanding K-SAFEs and CBs count as fully diluted."],
    ["US", "Post-money SAFE가 많으면 우선주 라운드에서 창업자보다 신규 투자자 지분이 예상과 달라질 수 있습니다.", "Many post-money SAFEs change the round math for new investors."],
    ["SG", "CARE·전환노트 전환분을 pre-money에 넣는지 명시합니다.", "State whether CAREs and notes convert in the pre-money."]],
  "k~ts~liquidation-preference": [
    ["KR", "상법상 잔여재산분배 우선주로 정관에 근거가 있어야 하며, M&A 간주청산은 계약으로 보완합니다.", "Needs a charter basis as a class share; deemed liquidation is added contractually."],
    ["US", "COI에 기재되어 주주 전원을 구속합니다.", "Set in the COI and binds all holders."],
    ["AE", "ADGM에서는 Articles에, 온쇼어에서는 종류주식이 어려워 홀딩 레벨에서 설계합니다.", "ADGM Articles; onshore, design at the holdco."],
    ["TH", "정관(AoA)에 우선분배 권리를 등기해야 제3자에게 주장할 수 있습니다.", "Register preference in the AoA to assert it against third parties."]],
  "k~ts~anti-dilution": [
    ["KR", "국내는 리픽싱(최저가 조정)이 흔하고, 하한은 액면가입니다.", "Korea commonly uses refixing to the lower price, floored at par."],
    ["US", "Broad-based 가중평균이 표준이며 Full-ratchet은 이례적입니다.", "Broad-based weighted average is standard; full ratchet is unusual."],
    ["SG", "VIMA는 가중평균 방식을 기본으로 제시합니다.", "VIMA defaults to weighted average."]],
  "k~ts~redemption-put": [
    ["KR", "상환은 배당가능이익 한도 내, 풋은 이해관계인 책임 범위를 함께 정합니다.", "Redemption only from distributable profits; set founder liability for puts."],
    ["US", "상환권은 드물며 요구 시 협상 비용이 큽니다.", "Redemption is rare and costly to negotiate."],
    ["SG", "상환은 s.70 요건을 충족해야 합니다.", "Redemption must satisfy s.70."],
    ["TH", "회사는 자기주식을 가질 수 없어 창업자·홀딩 풋으로 설계합니다.", "No treasury shares; use a founder or holdco put."]],
  "k~ts~protective-provisions": [
    ["KR", "동의권이 넓으면 공정거래법상 지배력·계열편입 판단에 영향을 줄 수 있습니다.", "Broad vetoes can affect MRFTA control and affiliation analysis."],
    ["US", "시리즈별 동의(Series vote)가 있는지 확인합니다.", "Check for a series vote."],
    ["AE", "온쇼어 자회사 단계 행위까지 포함합니다.", "Cover onshore subsidiaries."]],
  "k~ts~board-composition": [
    ["KR", "증권사 임직원의 사외 이사 겸직은 내부 승인 대상입니다.", "Outside directorships of our staff need internal approval."],
    ["US", "이사 지명권은 CFIUS 신고 판단 요소입니다. 옵저버가 더 안전합니다.", "A board seat is a CFIUS trigger; an observer is safer."],
    ["TH", "BOI 장려 조건에 이사 구성 요건이 있는지 확인합니다.", "Check BOI conditions on board composition."]],
  "k~ts~information-rights": [
    ["KR", "분기 공정가치 평가(K-IFRS 1109)를 위해 제출 기한을 명시합니다.", "Set deadlines that fit quarterly K-IFRS 1109 valuation."],
    ["US", "Major Investor 기준 미달이면 IRA상 정보권이 없으므로 사이드레터로 확보합니다.", "Below the Major Investor threshold, secure rights by side letter."],
    ["SG", "감사 면제 소규모 회사는 감사보고서가 없을 수 있어 관리 재무제표로 대체 조항을 둡니다.", "Small exempt companies may lack audits; provide management accounts instead."]],
  "k~ts~pro-rata-preemptive-right": [
    ["KR", "금산법 한도 근처면 일부만 행사할 수 있도록 둡니다.", "Allow partial exercise near Art. 24 limits."],
    ["SG", "정관상 선매권과 함께 운영됩니다.", "Works alongside constitutional pre-emption."],
    ["TH", "법정 비례 배정 원칙이 있어 계약상 권리와 충돌하지 않게 씁니다.", "Align with the statutory pro-rata offer."]],
  "k~ts~rofr-co-sale-drag-along": [
    ["KR", "정관상 양도 제한(이사회 승인)도 함께 확인합니다.", "Check board-approval transfer restrictions in the articles."],
    ["US", "NVCA는 ROFR & Co-Sale, Voting(Drag) 계약으로 나뉩니다.", "NVCA splits these into ROFR & Co-Sale and Voting agreements."],
    ["SG", "주식 양도에 인지세가 붙습니다.", "Share transfers attract stamp duty."]],
  "k~ts~founder-vesting-and-commitment": [
    ["US", "창업자는 83(b) 선택을 했는지 확인합니다.", "Confirm founders filed 83(b) elections."],
    ["KR", "역베스팅 대신 주식처분 제한·전념 의무로 대체하는 경우가 많습니다.", "Often replaced with lock-up and commitment covenants."],
    ["SG", "VIMA 창업자 계약(Founders’ Agreement) 양식을 참고할 수 있습니다.", "VIMA's founders' agreement can be used."]],
  "k~ts~conditions-precedent": [
    ["KR", "금산법 승인, 외국환 신고(해외 딜)를 조건에 넣습니다.", "Include Art. 24 approval and FX filings for overseas deals."],
    ["US", "CFIUS 신고가 필요하면 승인 또는 대기기간 종료를 조건으로 합니다.", "If CFIUS filing is needed, condition on clearance."],
    ["TH", "외국인 지분 계산과 BOI·FBL 확인을 조건으로 합니다.", "Condition on foreign-ownership analysis and BOI or FBL evidence."]],
  "k~ts~exclusivity-no-shop": [
    ["KR", "내부 투자심의 일정이 길면 45–60일을 확보합니다.", "Secure 45–60 days if IC cycles are long."],
    ["US", "30일 내외가 일반적입니다.", "Around 30 days is typical."]],
  "k~ts~expenses": [
    ["US", "회사가 리드 투자자 법률비용을 상한 내에서 부담하는 관행이 있습니다.", "Company pays lead counsel up to a cap."],
    ["KR", "각자 부담이 일반적입니다.", "Each party bears its own."],
    ["SG", "VIMA 텀시트는 비용 조항 선택지를 제시합니다.", "VIMA term sheet offers options."]],
  "k~ts~binding-and-non-binding-provisions": [
    ["KR", "구속 조항을 번호로 특정하지 않으면 전체 구속력 분쟁이 생길 수 있습니다.", "Identify binding clauses by number to avoid disputes."],
    ["US", "뉴욕·델라웨어 판례는 ‘성실 협상 의무’를 인정하는 경우가 있어 문구를 명확히 합니다.", "Some US courts imply good-faith negotiation duties; draft clearly."]],

  // ---------- LOI ----------
  "k~loi~proposed-investment": [
    ["KR", "조건부지분인수계약도 선택지로 적을 수 있습니다.", "K-SAFE can be listed as an option."],
    ["US", "시드 단계는 SAFE로 제시하는 경우가 많습니다.", "Seed deals often propose a SAFE."],
    ["TH", "직접투자인지 싱가포르 홀딩 투자인지 미리 적어 둡니다.", "State whether investing directly or via a Singapore holdco."]],
  "k~loi~key-terms": [
    ["US", "NVCA 표준 조건을 기준으로 한다고 적으면 협상이 빨라집니다.", "Referencing NVCA standards speeds negotiation."],
    ["SG", "VIMA 기준을 언급합니다.", "Reference VIMA."]],
  "k~loi~due-diligence": [
    ["KR", "직무발명 승계, 4대보험, 스톡옵션 절차를 실사 목록에 넣습니다.", "Include employee inventions, social insurance and option grants."],
    ["US", "IP 양도서약(PIIA), 83(b), Form D 이력을 확인합니다.", "Check PIIAs, 83(b) elections and Form D history."],
    ["AE", "온쇼어 라이선스와 자회사 지분 구조를 확인합니다.", "Check onshore licences and subsidiary ownership."],
    ["TH", "주주 명의신탁 여부와 BOI 조건을 확인합니다.", "Check for nominee shareholders and BOI conditions."]],
  "k~loi~approvals-and-regulatory-conditions": [
    ["KR", "금산법 제24조, 외국환거래법 신고 일정을 반영합니다.", "Reflect Art. 24 and FX filing timelines."],
    ["US", "CFIUS 해당 여부를 사전 검토합니다.", "Pre-screen for CFIUS."],
    ["TH", "외국인사업법상 지분 한도를 사전 검토합니다.", "Pre-screen FBA ownership limits."]],
  "k~loi~non-binding-nature": [
    ["US", "구속력 없음 문구가 약하면 promissory estoppel 주장 여지가 있습니다.", "Weak wording invites promissory estoppel claims."],
    ["KR", "구속 조항을 번호로 특정합니다.", "Identify binding paragraphs by number."]],
  "k~loi~exclusivity": [
    ["KR", "LOI 단계 독점은 짧게, 본격 독점은 텀시트에서 둡니다.", "Keep LOI exclusivity short; full exclusivity in the term sheet."],
    ["SG", "현지 경쟁 라운드가 있으면 회사가 거절하는 경우가 많습니다.", "Companies often refuse when competing rounds exist."]],
  "k~loi~confidentiality-costs-governing-law": [
    ["KR", "감독당국 공개 예외를 넣습니다.", "Add a regulator carve-out."],
    ["SG", "준거법은 본계약 예정 준거법과 맞춥니다.", "Match the expected governing law of the main deal."],
    ["AE", "ADGM 법을 지정할 수 있습니다.", "ADGM law may be chosen."]],
  "k~loi~expiry": [
    ["KR", "내부 승인 일정보다 짧지 않게 둡니다.", "Do not set shorter than internal approval timing."],
    ["US", "보통 2–4주 내 회신을 요구합니다.", "Typically 2–4 weeks."]],

  // ---------- SSA ----------
  "k~rcps~closing-and-payment": [
    ["KR", "납입 후 2주 내 변경등기, 등기부·주주명부를 받습니다.", "Registration within two weeks; obtain registry and shareholder list."],
    ["US", "COI 제출 확인 후 송금하고, 회사는 Form D를 제출합니다.", "Wire after the COI is filed; company files Form D."],
    ["SG", "ACRA 배정 신고와 전자 주주명부 반영을 확인합니다.", "Confirm ACRA allotment return and register update."],
    ["AE", "ADGM 등록청 신고와 주주명부 갱신을 확인합니다.", "Confirm ADGM filings and register update."],
    ["TH", "DBD 증자 등기와 주주명부 갱신을 확인합니다.", "Confirm DBD registration and shareholder list."]],
  "k~rcps~conditions-precedent": [
    ["KR", "금산법 승인과 투자심의 승인을 조건에 넣습니다.", "Include Art. 24 and IC approval."],
    ["US", "CFIUS 해당 시 승인을 조건으로 합니다.", "CFIUS clearance where needed."],
    ["TH", "외국인 지분 합산 확인과 BOI·FBL 증빙을 조건으로 합니다.", "Foreign-ownership check and BOI or FBL evidence."],
    ["AE", "홀딩–온쇼어 자회사 지분 구조 확인을 조건으로 합니다.", "Verify holdco–subsidiary ownership."]],
  "k~rcps~use-of-proceeds": [
    ["KR", "용도 외 사용을 주식매수청구 사유와 연결합니다.", "Link misuse to the put."],
    ["AE", "홀딩에서 온쇼어 자회사로의 자금 이전 방식(증자·대여)을 정합니다.", "Specify how funds move to the onshore subsidiary."],
    ["TH", "외화 유입 시 은행 제출 서류와 용도 기재가 필요합니다.", "Inbound FX needs bank forms stating purpose."]],
  "k~rcps~founder-representations": [
    ["KR", "이해관계인의 책임 범위를 고의·중과실로 한정하는 추세입니다.", "Trend is to limit founder liability to wilful misconduct or gross negligence."],
    ["US", "NVCA는 창업자 개인 진술을 최소화합니다.", "NVCA minimises personal founder reps."],
    ["SG", "창업자도 보증인(Warrantor)이 되는 것이 일반적입니다.", "Founders usually act as warrantors."]],
  "k~rcps~voting-and-dividend-preference": [
    ["KR", "무의결권 우선주는 금산법 한도 관리에 쓰일 수 있습니다.", "Non-voting preferred can help manage Art. 24 limits."],
    ["US", "배당은 비누적·선언 시 지급이 일반적입니다.", "Dividends are non-cumulative, when declared."],
    ["TH", "우선주 의결권 비율을 정관에 정할 수 있습니다.", "Voting ratios for preference shares can be set in the AoA."]],
  "k~rcps~liquidation-preference": [
    ["KR", "간주청산 조항이 없으면 M&A 시 우선권이 작동하지 않습니다.", "Without deemed liquidation, the preference fails on a sale."],
    ["US", "COI에 시리즈 간 순위(Pari passu·Stacked)를 정합니다.", "Set seniority among series in the COI."],
    ["SG", "정관(Constitution)에 반영해야 합니다.", "Must be in the constitution."],
    ["AE", "ADGM Articles에 반영합니다.", "Put in the ADGM Articles."],
    ["TH", "AoA 등기 없이는 제3자 대항력이 약합니다.", "Weak against third parties without AoA registration."]],
  "k~rcps~conversion-right": [
    ["KR", "상법상 전환주식으로 정관 근거가 필요합니다.", "Needs a charter basis as convertible shares."],
    ["US", "적격 IPO 시 자동 전환 기준을 확인합니다.", "Check the Qualified IPO threshold."],
    ["TH", "전환 시 신주 발행 절차가 다시 필요할 수 있습니다.", "Conversion may need a new issuance process."]],
  "k~rcps~duration": [
    ["KR", "상환 기간보다 길게, 미상환분이 있으면 연장되도록 합니다.", "Longer than the redemption window; extend while unredeemed."],
    ["US", "미국 우선주는 존속기간 개념이 없는 경우가 많습니다.", "US preferred usually has no fixed duration."]],
  "k~rcps~termination-before-closing": [
    ["KR", "롱스톱 데이트를 규제 승인 일정에 맞춥니다.", "Set the long-stop date to fit regulatory approvals."],
    ["US", "CFIUS 심사 기간을 고려합니다.", "Allow for CFIUS timing."],
    ["TH", "BOI·FBL 절차 기간을 고려합니다.", "Allow for BOI or FBL timing."]],

  // ---------- SHA ----------
  "k~sha~information-and-inspection": [
    ["KR", "분기 공정가치 평가 일정에 맞춥니다.", "Align with quarterly fair-value close."],
    ["US", "IRA의 Information Rights와 경쟁사 예외 정의를 확인합니다.", "Check IRA information rights and the competitor carve-out."],
    ["SG", "자회사(태국 등) 재무정보도 포함합니다.", "Include subsidiaries' financials."],
    ["AE", "온쇼어 자회사 재무정보를 포함합니다.", "Include onshore subsidiary financials."]],
  "k~sha~board-and-observer-rights": [
    ["KR", "이사 지명 시 D&O 보험과 내부 겸직 승인을 확인합니다.", "D&O insurance and internal approval if a director."],
    ["US", "CFIUS 해당 기업이면 옵저버도 정보 접근 제한을 둡니다.", "For CFIUS targets, limit observer access."],
    ["SG", "옵저버는 비밀유지·이해상충 퇴장 조건이 붙는 것이 일반적입니다.", "Observers usually accept confidentiality and recusal terms."]],
  "k~sha~right-of-first-refusal": [
    ["KR", "정관상 양도 제한과 함께 운영합니다.", "Works with charter transfer restrictions."],
    ["US", "ROFR & Co-Sale Agreement에 들어갑니다.", "Sits in the ROFR & Co-Sale Agreement."],
    ["TH", "양도는 서면 증서와 주주명부 기재로 효력이 생깁니다.", "Transfers need a written instrument and register entry."]],
  "k~sha~tag-along": [
    ["US", "ROFR & Co-Sale Agreement에 들어갑니다.", "Sits in the ROFR & Co-Sale Agreement."],
    ["SG", "VIMA SHA에 표준 문구가 있습니다.", "VIMA SHA has standard wording."]],
  "k~sha~drag-along": [
    ["KR", "청산우선권 순서로 대금을 배분하도록 씁니다.", "Allocate proceeds per the preference."],
    ["US", "Voting Agreement에 들어가며 끌려가는 주주 보호 조건이 표준화되어 있습니다.", "In the Voting Agreement with standard protections."],
    ["TH", "외국인 매수인이면 외국인사업법 한도 확인이 필요합니다.", "A foreign buyer triggers FBA checks."]],
  "k~sha~founder-lock-up": [
    ["KR", "질권 설정도 제한 대상에 포함합니다.", "Include pledges."],
    ["US", "ROFR & Co-Sale Agreement의 Key Holder 제한으로 둡니다.", "Key Holder restrictions in the ROFR agreement."]],
  "k~sha~non-compete-and-full-time-commitment": [
    ["KR", "과도한 기간·범위는 무효가 될 수 있습니다.", "Excessive scope risks invalidity."],
    ["US", "캘리포니아 등은 경업금지 효력을 원칙적으로 인정하지 않습니다.", "California generally voids non-competes."],
    ["SG", "합리성(reasonableness) 기준으로 판단됩니다.", "Judged on reasonableness."]],
  "k~sha~scope-of-founder-liability": [
    ["KR", "벤처투자법 적용 투자자는 책임 범위 제한 의무가 있습니다.", "Venture Investment Act investors must limit founder liability."],
    ["US", "창업자 개인 책임은 거의 두지 않습니다.", "Personal founder liability is rare."],
    ["SG", "보증인 책임 한도(투자금 등)를 둡니다.", "Cap warrantor liability."]],
  "k~sha~penalty-and-indemnification": [
    ["KR", "과도한 위약벌은 법원이 감액할 수 있습니다.", "Courts may reduce excessive penalties."],
    ["SG", "영미법상 penalty 조항은 무효 위험이 있어 손해배상 예정 형태로 씁니다.", "Penalty clauses risk unenforceability; use genuine pre-estimates."],
    ["AE", "ADGM은 영미법 원칙이 적용됩니다.", "ADGM applies English-law principles."]],
  "k~sha~most-favored-nation": [
    ["US", "사이드레터 MFN으로 두는 경우가 많습니다.", "Often in a side letter."],
    ["SG", "후속 투자자 MFN이 기존 권리를 덮어쓰지 않도록 합니다.", "Prevent later MFNs overriding ours."]],
  "k~sha~stock-option-pool": [
    ["KR", "벤처기업법·상법상 부여 절차를 지켰는지 확인합니다.", "Check grants followed statutory procedure."],
    ["US", "409A 평가와 옵션 플랜 승인 여부를 확인합니다.", "Check 409A valuation and plan approval."],
    ["SG", "VIMA ESOP 자료를 참고할 수 있습니다.", "VIMA ESOP materials are available."],
    ["TH", "비상장사 스톡옵션 제도가 제한적이어서 홀딩 레벨 ESOP를 씁니다.", "Use a holdco ESOP due to local limits."]],
  "k~sha~exit-covenant": [
    ["KR", "주관사 지정권을 당사에 주면 이해상충 검토가 필요합니다.", "Giving us underwriting rights needs conflicts review."],
    ["US", "IPO 의무는 거의 없고 Drag-along으로 대체합니다.", "IPO covenants are rare; drag-along instead."],
    ["AE", "미국 상장을 위해 델라웨어 플립 협조 의무를 둡니다.", "Add flip cooperation for a US listing."],
    ["TH", "SET 상장 전 공개회사 전환이 필요합니다.", "Convert to a public company before SET listing."]],
  "k~sha~compliance-anti-corruption-sanctions": [
    ["KR", "청탁금지법·자금세탁방지 기준을 반영합니다.", "Reflect anti-graft and AML rules."],
    ["US", "FCPA와 OFAC 제재를 포함합니다.", "Include FCPA and OFAC."],
    ["AE", "실소유자 등록과 제재 스크리닝을 포함합니다.", "Include UBO and sanctions screening."],
    ["TH", "명의신탁 금지 위반 여부를 포함합니다.", "Include nominee prohibition."]],

  // ---------- SPA ----------
  "k~spa-kr~sale-shares": [
    ["KR", "우선주 매수 시 정관상 권리가 승계되는지 확인합니다.", "Check preferred rights carry over."],
    ["US", "주식 종류와 시리즈를 Carta 등 장부와 대조합니다.", "Match class and series to the cap table platform."],
    ["TH", "매수 후 외국인 지분 합산을 확인합니다.", "Check post-transfer foreign aggregate."]],
  "k~spa-kr~purchase-price-and-payment": [
    ["KR", "비거주자 매도인이면 원천징수 후 지급합니다.", "Withhold for non-resident sellers."],
    ["SG", "인지세 납부 후 명의개서가 진행됩니다.", "Stamp duty is paid before registration."],
    ["TH", "외화 송금 서류가 필요합니다.", "FX remittance documents are needed."]],
  "k~spa-kr~seller-representations": [
    ["US", "개인 매도인의 진술 범위가 좁으니 회사 확인서를 함께 받습니다.", "Individual sellers give narrow reps; add a company certificate."],
    ["SG", "Full title guarantee 문구를 씁니다.", "Use ‘full title guarantee’."]],
  "k~spa-kr~company-acknowledgment": [
    ["KR", "회사의 명의개서 확인서를 받습니다.", "Obtain the company's registration confirmation."],
    ["US", "회사의 ROFR 포기와 양도 승인을 받습니다.", "Obtain the company's ROFR waiver and consent."],
    ["SG", "ACRA 반영 확인서를 받습니다.", "Obtain ACRA confirmation."]],
  "k~spa-kr~consents-and-waivers": [
    ["KR", "정관상 이사회 양도 승인을 확인합니다.", "Check board-approval requirements."],
    ["US", "ROFR & Co-Sale Agreement 당사자 전원의 포기를 받습니다.", "Waivers from every ROFR & Co-Sale party."],
    ["TH", "주주 전원의 포기와 정관상 승인 요건을 확인합니다.", "All holders' waivers and AoA approvals."]],
  "k~spa-kr~assignment-of-investor-rights-deed-of-adherence": [
    ["KR", "이해관계인의 동의 없이는 투자계약상 권리가 승계되지 않을 수 있습니다.", "Rights may not pass without founders' consent."],
    ["US", "IRA·Voting·ROFR 각각에 가입(joinder)해야 합니다.", "Sign joinders to the IRA, Voting and ROFR agreements."],
    ["SG", "SHA 가입 증서(Deed of Adherence)를 씁니다.", "Use a deed of adherence."]],
  "k~spa-kr~indemnification": [
    ["KR", "청구 기간과 한도를 명시합니다.", "State survival and caps."],
    ["US", "세컨더리에서는 손해배상 대신 진술 범위를 좁히는 경우가 많습니다.", "Secondaries often narrow reps rather than indemnify."],
    ["SG", "매매대금 일부 에스크로를 고려합니다.", "Consider an escrow."]]
  };
  Object.keys(N).forEach(function (k) {
    var o = GUIDE.jn[k] || {};
    N[k].forEach(function (r) { o[r[0]] = { ko: r[1], en: r[2] }; });
    GUIDE.jn[k] = o;
  });
})();
