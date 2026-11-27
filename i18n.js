/* ============================================================
   OneTap i18n · KO/EN runtime translation (v1)
   - ?lang=en|ko  >  localStorage 'onetap_lang'  >  navigator.language
   - DOM text and attributes are translated in place and restored on switch.
   - Elements added later by app.js are translated by a MutationObserver.
   - Missing keys are reported to console as "I18N_MISS: <korean>".
   ============================================================ */
(function (root, doc) {
  'use strict';

  var LANG_KEY = 'onetap_lang';
  var COMMON = /*__COMMON__*/ {"닫기":"Close","취소":"Cancel","저장":"Save","저장됨":"Saved","삭제":"Delete","복사":"Copy","복사됨":"Copied","다운로드":"Download","내려받기":"Download","공유":"Share","인쇄":"Print","초기화":"Reset","다시 시도":"Try again","불러오기":"Load","내보내기":"Export","적용":"Apply","추가":"Add","편집":"Edit","수정":"Edit","보기":"View","미리보기":"Preview","설정":"Settings","도움말":"Help","사용법":"Guide","예시":"Example","샘플":"Sample","무료":"Free","유료":"Paid","개인정보":"Privacy","개인정보 처리방침":"Privacy policy","개인정보 처리 안내":"Privacy notice","이용약관":"Terms","홈":"Home","뒤로":"Back","다음":"Next","이전":"Previous","확인":"OK","검색":"Search","필터":"Filter","전체":"All","없음":"None","준비 중":"Coming soon","준비 중입니다":"Coming soon","로딩 중":"Loading","불러오는 중":"Loading","처리 중":"Working","빈칸":"Blank","필수":"Required","선택":"Optional","이름":"Name","제목":"Title","날짜":"Date","시간":"Time","메모":"Note","상태":"Status","결과":"Result","요약":"Summary","상세":"Details","언어":"Language","한국어":"Korean","영어":"English","복사하기":"Copy","링크 복사":"Copy link","전체 복사":"Copy all","다크 모드로 전환":"Switch to dark mode","라이트 모드로 전환":"Switch to light mode","테마 전환":"Toggle theme","라이트/다크":"Light / dark","다크/라이트":"Dark / light","새 탭에서 보기":"Open in new tab","새 창":"New window","본문으로 건너뛰기":"Skip to content","본문으로 바로가기":"Skip to content","맨 위로":"Back to top","더 보기":"Show more","접기":"Collapse","펼치기":"Expand","자주 묻는 질문":"Frequently asked questions","이 브라우저에만 저장됩니다":"Saved only in this browser","이 브라우저에만 저장됩니다 · 서버 전송 0":"Saved only in this browser · zero uploads","서버 전송 없음":"No upload","서버 업로드 없음":"No server upload","100% 브라우저 처리":"100% in-browser","브라우저에서 처리":"Processed in your browser","파일은 서버로 전송되지 않습니다":"Files never leave your device","파일이 서버로 전송되지 않습니다":"Files never leave your device","붙여넣은 코드는 서버로 전송되지 않습니다":"Pasted code never leaves your device"};
  var APP = /*__DICT__*/ {"연말정산 13월의 월급 역산기 — 12/31까지 뭘 해야 하나, 30초":"Year-End Tax Reverse Calculator — what to do before 31 December, in 30 seconds","총급여와 카드·연금·월세만 넣으면 12월 31일 전에 무엇을 얼마나 해야 세금이 얼마 줄어드는지 역산합니다. 카드 25% 문턱, 공제 한도 잔여, 연금저축·IRP 900만원 한도, 월세 17%까지. 로그인 없이 브라우저에서만 계산.":"Enter your gross salary, card spending, pension and rent to work backwards to what to do before 31 December and how much tax it saves: the 25% card threshold, remaining deduction caps, the ₩9,000,000 pension and IRP limit and the 17% rent credit. No login; everything is calculated in your browser.","연말정산 13월의 월급 역산기":"Year-End Tax Reverse Calculator","연말정산 13월의 월급 역산기 — 12/31까지 뭘 해야 하나":"Year-End Tax Reverse Calculator — what to do by 31 December","미리보기는 12/18에 닫힙니다. 카드 얼마가 아니라, 지금 무엇을 해야 세금이 얼마 줄어드는지 30초에 역산합니다.":"The HomeTax preview closes on 18 December. This is not about how much more to put on a card — in 30 seconds see what to do now and how much tax it saves.","12/31 전에 뭐 해야 하나, 30초 역산 — 연말정산 13월의 월급 역산기":"What to do by 31 December, reverse-calculated in 30 seconds — Year-End Tax Reverse Calculator","카드 25% 문턱·공제 한도·연금 900만원·월세 17%를 12/31 기준으로 역산합니다.":"Works back from 31 December on the 25% card threshold, deduction caps, the ₩9,000,000 pension limit and the 17% rent credit.","연말정산 13월의 월급 역산기, 맨 위로":"Year-End Tax Reverse Calculator, back to top","섹션":"Sections","마감 일정":"Deadlines","역산 요약":"Reverse summary","역산 결과 공유 카드 미리보기":"Share card preview","이 계산기는 브라우저에서 자바스크립트로 동작합니다. 자바스크립트를 켜면 총급여·카드·연금·월세를 넣어 12월 31일 전 남은 절세 금액을 바로 계산할 수 있습니다.":"This calculator runs on JavaScript in your browser. With JavaScript on, enter your gross salary, card, pension and rent to see at once how much tax you can still save before 31 December.","본문으로 바로가기":"Skip to content","13월의 월급 역산기":"13th-Month Pay Reverse Calculator","입력":"Inputs","카드":"Card","연금":"Pension","월세":"Rent","공유":"Share","서버 전송 0건":"Nothing sent to a server","귀속":"tax year","로그인 없음":"No login","2026년 귀속 · 12/31 마감":"2026 tax year · closes 31 Dec","무료 · 로그인 없음":"Free · no login","귀속 · 12월 31일 마감":"tax year · closes 31 December","13월의 월급은,":"You have","남은":"","40일":"40 days","에 결정됩니다":" left to decide it.","카드를 얼마 더 써야 하나가 아닙니다.":"This is not about how much more to spend on a card.","지금 무엇을 해야 세금이 얼마 줄어드는지":"what to do now and how much tax it saves","30초 역산 시작":"Start the 30-second check","12/31 전 할 일 3개":"3 things to do by 31 Dec","로그인·가입 없음":"No login or sign-up","입력값 저장 안 함":"Inputs never stored","남은 기한":"Time left","2026년 귀속":"2026 tax year","홈택스 미리보기":"HomeTax preview","계획을 세우는 화면":"where you plan","카드 · 연금 · 월세":"Card · pension · rent","2026년 몫 확정":"2026 amounts fixed","12/18이 지나면 홈택스의 계획 화면이 닫힙니다. 12/31은 카드 사용·연금 납입·월세 지급이 올해 몫으로 끝나는 날입니다.":"After 18 December the HomeTax planning screen closes. 31 December is the last day card spending, pension contributions and rent payments count for this year.","30초 입력":"30-second input","모르는 항목은 비워두세요. 넣는 만큼 정확해집니다.":"Leave anything you don't know blank — the more you fill in, the more exact it gets.","지금 절세":"Savings now","총급여":"Gross salary","만원":" ₩10k","연봉이 아니라":"It is not your annual package but the","비과세(식대·차량 등)를 뺀":"taxable pay after excluding tax-free items (meals, cars)","금액입니다. 급여명세서의 과세 대상 급여 합계를 보세요.":" amount. Use the taxable pay total on your payslip.","기본공제 대상 자녀":"Children eligible for the basic deduction","카드 한도":"Card cap","없음":"None","1명":"1","2명 이상":"2 or more","2026년 사용분부터 자녀가 있으면 카드 기본한도가 50만~100만원 늘어납니다.":"From 2026 spending, having children raises the card base cap by ₩500,000–₩1,000,000.","신용카드":"Credit card","체크·현금영수증":"Debit · cash receipt","전통시장·대중교통에서 쓴 금액은 빼고 넣습니다. 겹치면 공제가 두 번 계산됩니다.":"Leave out amounts spent at traditional markets and on public transport — including them counts the deduction twice.","대중교통":"Public transport","전통시장":"Traditional market","버스·지하철·택시, 온누리상품권 포함. 결제수단과 상관없이":"Buses, subway and taxis, including Onnuri vouchers. Whatever the payment method, they are","공제입니다.":"deductible.","연금저축":"Pension savings","연금저축은":"Pension savings are credited up to","연 600만원":"₩6,000,000 a year",", IRP와 합쳐":", and with IRP up to","900만원":"₩9,000,000","까지 세액공제 됩니다. 연금저축만 900만원 넣으면 300만원은 공제되지 않습니다.":" combined. Put ₩9,000,000 into pension savings alone and ₩3,000,000 gets no credit.","월 · 만원":"monthly · ₩10k","무주택 세대주이고, 월세를 실제로 냈다면 넣으세요. 연 1,000만원까지만 공제 대상입니다.":"Fill this in if you are a renter household head with no home and actually pay rent; only up to ₩10,000,000 a year qualifies.","고급 설정 — 부양가족·보험료 가정":"Advanced — dependants and insurance assumptions","추가 부양가족 수":"Extra dependants","명":" people","본인과 자녀를 제외한 배우자·부모 등 기본공제 대상자 수입니다. 1명당 150만원이 소득에서 빠집니다.":"Dependants eligible for the basic deduction other than you and your children (spouse, parents…). Each takes ₩1,500,000 off income.","국민연금은 총급여의 4.75%, 건강·고용보험은 4.9673%로 추정합니다(2026년 요율). 실제 고지액과 조금 다를 수 있습니다.":"Pension is estimated at 4.75% of gross pay and health plus employment insurance at 4.9673% (2026 rates); the actual billed amount can differ slightly.","입력값 저장·전송 없음":"Inputs never stored or sent","예시로 채워보기":"Fill with an example","지우기":"Clear","역산 요약 · 2026년 귀속":"Reverse summary · 2026 tax year","실시간":"Live","총급여를 넣으면 바로 계산됩니다":"Enter your gross salary to calculate","지방소득세 포함 · 결정세액 범위 안에서만":"Local income tax included · limited to the tax you actually owe","연금계좌 남은 한도":"Pension account room left","900만원까지":"up to ₩9,000,000","월세 세액공제":"Rent tax credit","무주택 세대주":"renter with no home","25% 문턱·한도":"25% threshold · cap","미리보기":"Preview","납입·결제":"Pay in · spend","할 일 3개 보기":"See the 3 actions","카드 저장":"Save card","12/31 전, 이 순서로 하세요":"Before 31 December, do it in this order","연금과 월세는 추가 지출 없이 줄어드는 돈, 카드는 더 써야 줄어드는 돈입니다. 그래서 이 순서입니다.":"Pension and rent cut your tax without extra spending; cards only cut it if you spend more. That is the order.","카드 25% 문턱과 공제 한도":"The 25% card threshold and the deduction cap","총급여의 25%를 넘긴 사용액에만 공제가 붙습니다. 문턱을 넘기 전에는 어떤 카드로 써도 공제가 0원입니다.":"Only spending above 25% of gross salary is deductible. Below the threshold, any card gives a ₩0 deduction.","25% 문턱":"25% threshold","총급여 × 25%":"gross salary × 25%","올해 사용액 합계":"Total spent this year","신용 + 체크 + 대중교통 + 전통시장":"credit + debit + transport + markets","카드 소득공제":"Card deduction","한도 적용 후":"after the cap","기본한도":"Base cap","추가한도":"Extra cap","지금 100만원을 더 쓴다면":"If you spend ₩1,000,000 more now","유리":"Better","신용카드 15%":"Credit card 15%","세금이 이만큼 줄어듭니다 (지방세 포함)":"your tax falls by this much (local tax included)","체크카드·현금영수증 30%":"Debit card · cash receipt 30%","100만원을 더 쓰면 세금은 조금 줄지만, 통장에서는 100만원이 나갑니다.":"Spending another ₩1,000,000 cuts tax a little but takes ₩1,000,000 out of your account.","카드 공제 계산 과정":"Card deduction steps","구분":"Item","사용액":"Spent","공제액":"Deduction","문턱(최저사용금액)은 공제율이 낮은 신용카드분에서 먼저 차감합니다. 추가한도는 전통시장·대중교통 공제액 범위에서만 인정됩니다.":"The threshold (minimum spending) is taken first from credit-card spending, which has the lower rate. The extra cap only applies up to the market and transport deduction.","연금저축·IRP 역산":"Pension savings and IRP, reverse-calculated","900만원 한도까지 남은 금액과, 지금 넣었을 때 늘어나는 세액공제. 12월 31일 입금분까지 올해 몫입니다.":"How much room is left under the ₩9,000,000 cap and the extra credit if you pay in now. Deposits made by 31 December count for this year.","공제 대상 납입액":"Contributions eligible for credit","연금저축 600 + IRP 합산 900":"pension savings 600 + IRP, 900 combined","공제율":"Credit rate","총급여 5,500만원 기준":"on gross salary of ₩55,000,000","남은 한도 채우면":"If you fill the remaining room","세금 감소 (지방세 포함)":"tax saved (local tax included)","900만원 한도":"₩9,000,000 cap","연금저축 600만원 + IRP 300만원":"pension savings ₩6,000,000 + IRP ₩3,000,000","연금저축으로 인정된 금액":"Amount recognised as pension savings","IRP에 더 넣을 수 있는 금액":"Amount you can still put into IRP","합산 900만원까지":"up to ₩9,000,000 combined","55세 전에 해지하면 공제받은 금액과 운용수익에":"Cashing in before 55 adds","기타소득세 16.5%":"16.5% other-income tax","가 붙습니다. 생활비로 쓸 돈은 넣지 마세요.":" to the credited amount and the investment return. Don't put in money you need for living costs.","12월 31일 밤 이체는 늦을 수 있습니다. 금융사 영업 마감 시간 안에 입금이 끝나야 올해 납입으로 인정됩니다.":"A transfer late on 31 December may be too late. The deposit must clear within your provider's business hours to count for this year.","이미 낸 돈이라 새로 쓸 필요가 없습니다. 12월 31일 기준 무주택이면 서류만 챙기면 됩니다.":"The money is already spent — nothing new to pay. If you are a renter with no home on 31 December, just gather the paperwork.","총급여 5,500 / 8,000만원 기준":"on gross salary of ₩55,000,000 / ₩80,000,000","공제 대상 월세":"Rent eligible for credit","연 1,000만원 한도":"₩10,000,000 a year cap","돌려받는 세금":"Tax you get back","지방소득세 포함":"local income tax included","계약서 주소 = 주민등록 주소":"Lease address = registered address","85㎡ 이하 또는 기준시가 4억원 이하":"85 m² or less, or standard value ₩400,000,000 or less","제출 서류":"Documents to submit","숫자는 이렇게 나옵니다":"How the numbers are built","가정을 숨기지 않습니다. 아래 목록과 다르게 적용되는 항목이 있으면 결과도 달라집니다.":"No hidden assumptions. If any item applies differently from the list below, the result changes too.","계산 단계":"Step","금액":"Amount","근거·가정":"Basis · assumption","적용한 가정":"Assumptions used","는 비과세(식대·차량 등)를 뺀 과세 대상 급여로 봅니다.":" is treated as taxable pay after excluding tax-free items (meals, cars).","인적공제":"Personal deduction","는 본인·자녀·추가 부양가족을 모두 기본공제 대상(1인 150만원)으로 봅니다. 경로·장애인 추가공제는 넣지 않았습니다.":" counts you, your children and extra dependants as basic-deduction dependants (₩1,500,000 each). Senior and disability extras are not included.","국민연금":"National pension","은 총급여 × 4.75%,":" is gross pay × 4.75%,","건강·고용보험":"Health and employment insurance","은 총급여 × 4.9673%로 추정합니다(2026년 요율).":" is estimated at gross pay × 4.9673% (2026 rates).","의료비·교육비·기부금·보장성보험료":"Medical, education, donations and protection premiums","세액공제는 입력받지 않아 0원입니다. 표준세액공제 13만원과 건강·고용보험 소득공제 중 유리한 쪽을 자동 적용합니다.":" credits are not collected, so they are ₩0. The tool applies whichever is better between the ₩130,000 standard credit and the health and employment insurance deduction.","자녀세액공제":"Child tax credit","는 자녀가 9세 이상 기본공제 대상이라고 가정합니다(2026년 귀속 기준).":" assumes each child is 9 or older and a basic-deduction dependant (2026 tax year).","연금계좌":"Pension account","는 연금저축 600만원·합산 900만원 한도만 반영합니다. ISA 전환 추가한도 300만원은 제외했습니다.":" reflects only the ₩6,000,000 pension-savings and ₩9,000,000 combined caps. The extra ₩3,000,000 for ISA transfers is excluded.","는 연 1,000만원 한도, 12개월 거주로 계산합니다. 중도 입주는 연간 합계로 바꿔 넣으세요.":" uses the ₩10,000,000 annual cap and 12 months of residence. For a partial year, enter the annual total.","는 국내 사용분이며, 도서·공연·체육 30% 항목은 별도 입력 없이 신용/체크 공제율로 계산했습니다.":" is domestic spending; the 30% item for books, performances and sports is calculated at the credit/debit rate without a separate entry.","기납부세액":"Tax already paid","은 받지 않습니다. 그래서 ‘환급액’이 아니라 ‘줄어드는 세금’만 계산합니다.":" is not collected, so the tool shows the tax saved, not a refund amount.","결과 카드와 퍼가기":"Result card and embed","이름·연봉 원액·계약 내용은 카드에 넣지 않습니다. 카톡·스레드에 올리고, 블로그에는 iframe으로 붙이세요.":"No names, exact salaries or lease terms go on the card. Post it on KakaoTalk or Threads, and embed it in a blog with the iframe.","카드에는 총급여 구간만":"Only the salary band appears on the card","표시됩니다. 정확한 연봉·월세·계좌는 이미지에 남지 않습니다.":". Exact salary, rent and account details never reach the image.","iframe 퍼가기":"Iframe embed","로 머리말·꼬리말을 뺍니다.":" strips the header and footer.","카드에 담기는 것":"On the card","총급여 구간 · 연금·월세·카드 3줄 · D-day":"salary band · three lines on pension, rent and card · D-day","담기지 않는 것":"Not on the card","이름 · 연봉 원액 · 월세 계약 내용":"name · exact salary · lease terms","퍼가기 코드":"Embed code","코드 복사":"Copy code","임베드 뷰에는 하단에 작은":"The embedded view carries a small","“Powered by 원탭 도구 허브”":"“Powered by OneTap Tools Hub”","링크가 붙습니다. 미리보기:":" link at the bottom. Preview:","결과 카드 PNG 저장":"Save the result card as PNG","요약 문구 복사":"Copy summary text","카드에는 이름·연봉 원액·월세 계약 내용이 들어가지 않습니다.":"The card never carries your name, exact salary or lease terms.","기준일과 자주 묻는 질문":"Dates and common questions","기준일 2026년 11월 21일 · 2026년 귀속(2027년 1~2월 정산) 현행 법령 기준입니다.":"As of 21 November 2026, under current law for the 2026 tax year (settled January–February 2027).","홈택스 미리보기와 숫자가 다른데요?":"The HomeTax preview shows different numbers?","이 도구는":"This tool","카드·연금·월세·인적공제":"card, pension, rent and personal deductions","만으로 줄어드는 세금을 역산합니다. 미리보기는 전년도 지급명세서와 기납부세액, 의료비·교육비·기부금까지 반영한 추정치라 서로 다를 수 있습니다. 미리보기 자체도 “확정 금액이 아니다”라고 안내합니다. 확정은 1월 연말정산 간소화 자료로 확인하세요.":" alone. The preview also uses last year's withholding statement, tax already paid, and medical, education and donation figures, so the two can differ — and the preview itself says it is not final. Confirm with the January simplified year-end documents.","카드 100만원을 더 쓰면 정말 이득인가요?":"Is spending another ₩1,000,000 on a card really worth it?","아닙니다. 신용카드 15%·체크카드 30% 소득공제는":"No. The 15% credit-card and 30% debit-card deduction is","쓴 금액의 일부를 과세표준에서 빼는 것":"removing part of what you spent from the tax base","입니다. 100만원을 더 쓰면 세금은 2만~5만원 줄지만 통장에서는 100만원이 나갑니다. 기본한도가 이미 찼다면 0원입니다. 그래서 이 도구는 “더 쓰세요”가 아니라":". Another ₩1,000,000 cuts tax by ₩20,000–₩50,000 but takes ₩1,000,000 from your account; if the base cap is full, it saves ₩0. That is why this tool does not say “spend more” but","“이미 쓸 돈이면 체크카드로”":"“if you were going to spend it anyway, use a debit card”","라고 말합니다.":".","연금저축 900만원을 넣으면 148만 5,000원을 그대로 받나요?":"Does paying ₩9,000,000 into pension savings give me ₩1,485,000 back?","총급여 5,500만원 이하라면 납입액의 16.5%(지방소득세 포함), 초과라면 13.2%가 세액공제 됩니다. 다만":"With gross salary of ₩55,000,000 or less, 16.5% of contributions is credited (local tax included); above that, 13.2%. But it is only granted","결정세액 범위 안에서만":"within the tax you actually owe","돌려받으므로, 이미 낼 세금이 적다면 실제 감소액은 더 작습니다. 연금저축 단독은 600만원까지만 인정되니 남은 300만원은 IRP로 넣어야 합니다.":", so if you owe little tax the real saving is smaller. Pension savings alone only count to ₩6,000,000, so the other ₩3,000,000 must go into an IRP.","월세 1,000만원이면 170만원을 돌려받나요?":"With ₩10,000,000 of rent, do I get ₩1,700,000 back?","월세액의 17%(총급여 5,500만원 이하) 또는 15%(8,000만원 이하)가 소득세에서 빠지고, 지방소득세를 더하면 각각":"17% of rent (gross salary ₩55,000,000 or less) or 15% (up to ₩80,000,000) comes off income tax, and with local tax that is","187만원·165만원":"₩1,870,000 and ₩1,650,000","입니다. 무주택 세대주, 계약서 주소와 주민등록 주소 일치, 85㎡ 이하 또는 기준시가 4억원 이하 요건이 필요합니다.":". You need to be a renter household head with no home, the lease and registered addresses must match, and the home must be 85 m² or less or valued at ₩400,000,000 or less.","입력한 값이 저장되거나 전송되나요?":"Are my inputs stored or sent anywhere?","아니요. 계산은 브라우저 안에서만 이뤄지고, 입력값을 서버로 보내거나 브라우저 저장소에 남기지 않습니다. 새로고침하면 모두 사라집니다.":"No. Everything is calculated in your browser, and inputs are never sent to a server or left in browser storage. Refreshing clears them all.","근거 법령과 출처":"Law and sources","2026-11-21 확인. 세법은 매년 12월 말 개정되므로 2027년 1월에 다시 대조해야 합니다.":"Checked 21 November 2026. Tax law is amended each December, so re-check in January 2027.","조세특례제한법 §126의2":"Restriction of Special Taxation Act §126-2","법령 원문":"Full text","소득세법 §47":"Income Tax Act §47","소득세법 §55":"Income Tax Act §55","소득세법 §59":"Income Tax Act §59","소득세법 §59의2":"Income Tax Act §59-2","소득세법 §59의3":"Income Tax Act §59-3","조세특례제한법 §95의2":"Restriction of Special Taxation Act §95-2","국세청 안내":"NTS guidance","국세청":"National Tax Service","보도":"Report","보건복지부":"Ministry of Health and Welfare","보도자료":"Press release","국세청 「자주 하는 연말정산 실수」":"NTS “common year-end mistakes”","안내":"Guidance","이어서 쓸 도구":"Tools to use next","무료 도구 21종":"21 free tools","원탭 도구 허브":"OneTap Tools Hub","급여명세서·퇴직금·세금까지 한 번에":"payslips, severance and tax in one place","사업자·프리랜서":"Businesses and freelancers","부가세·종소세 계산기":"VAT and income tax calculator","3.3% 원천징수와 순수익 계산":"3.3% withholding and net profit","모의 역산입니다.":"This is a simulation.","2026년 귀속 소득세법·조세특례제한법과 국세청 안내를 기준으로 단순화해 계산했습니다. 실제 환급·추납액은 최종 총급여, 기납부세액, 의료비·교육비·기부금, 부양가족 요건에 따라 달라지므로":"Calculated simply from the Income Tax Act, Restriction of Special Taxation Act and NTS guidance for the 2026 tax year. The actual refund or extra payment depends on final gross pay, tax already paid, medical, education and donation amounts and dependant rules, so check","홈택스 연말정산 미리보기와 회사 정산 결과":"the HomeTax preview and your employer's settlement","로 확인해야 합니다.":".","기준일 2026-11-21 · 2026년 귀속 소득세법·조세특례제한법 기준. 입력값은 서버로 전송되지 않고 브라우저 저장소에도 남지 않습니다. 외부 분석 도구를 쓰지 않습니다. ·":"As of 2026-11-21 · Income Tax Act and Restriction of Special Taxation Act for the 2026 tax year. Inputs are never sent to a server and are not stored in the browser. No external analytics. ·","개인정보 처리방침":"Privacy policy","개인정보 처리방침 · 연말정산 13월의 월급 역산기":"Privacy policy · Year-End Tax Reverse Calculator","← 계산기로 돌아가기":"← Back to the calculator","시행일 2026-11-21":"Effective 2026-11-21","이 페이지는 무료 웹 계산기":"This page explains what the free web calculator","가 어떤 정보를 다루는지 설명합니다.":" does with your information.","요약: 수집하는 개인정보가 없습니다.":"Summary: no personal data is collected.","총급여·카드 사용액·연금 납입액·월세는 서버로 전송되지 않고, 브라우저 저장소(쿠키·localStorage·sessionStorage)에도 남지 않습니다. 새로고침하면 입력값은 사라집니다.":"Gross salary, card spending, pension contributions and rent are never sent to a server and are not stored in cookies, localStorage or sessionStorage. Refreshing clears them.","1. 처리하는 정보":"1. Information processed","이용자가 화면에 입력하는 총급여, 카드 사용액, 연금계좌 납입액, 월세, 자녀·부양가족 수는":"The gross salary, card spending, pension contributions, rent and dependant counts you enter are used","이용자 기기의 브라우저 메모리에서만":"only in your device's browser memory","계산에 사용됩니다. 서버 전송, 회원가입, 로그인, 본인인증이 없습니다.":" for the calculation. There is no server transfer, sign-up, login or identity check.","2. 수집하지 않는 정보":"2. Information not collected","이름, 주민등록번호, 주소, 전화번호, 이메일":"Name, national ID, address, phone number, email","계좌번호, 카드번호, 비밀번호":"Account numbers, card numbers, passwords","접속 기록, IP 주소, 기기 식별자":"Access logs, IP address, device identifiers","위치 정보":"Location","3. 쿠키·분석 도구":"3. Cookies and analytics","쿠키를 쓰지 않고, Google Analytics 같은 외부 분석 도구나 광고 스크립트를 넣지 않습니다. 모든 파일은 이 사이트에서 직접 내려받아 쓰는 정적 파일이며, 외부 도메인으로 요청을 보내지 않습니다.":"No cookies, and no external analytics such as Google Analytics or ad scripts. Every file is a static file served from this site, and no request goes to an external domain.","4. 결과 카드 이미지":"4. Result card image","공유 카드 PNG는":"The share card PNG is drawn and downloaded","이용자 기기 안에서":"inside your device","Canvas로 그려져 다운로드됩니다. 카드에는 총급여 구간만 표시되고 정확한 총급여·월세·계좌 정보는 담기지 않습니다. 생성된 이미지는 어디에도 업로드되지 않습니다.":" with Canvas. The card shows only the salary band — no exact salary, rent or account details — and the image is never uploaded.","5. 외부 링크":"5. External links","결과 화면의 ‘원탭 도구 허브’, ‘부가세·종소세 계산기’, 출처 링크를 누르면 다른 페이지로 이동합니다. 이동한 페이지의 개인정보 처리 방식은 해당 사이트의 방침을 따릅니다.":"Links to the OneTap Tools Hub, the VAT and income tax calculator and source pages take you to other sites, whose own policies govern their handling of personal data.","6. 아동의 개인정보":"6. Children's privacy","만 14세 미만 아동의 개인정보를 수집하지 않습니다. 자녀 수를 입력하더라도 자녀의 이름·생년월일 등 식별 정보는 받지 않습니다.":"No personal data of children under 14 is collected. Even if you enter the number of children, no names, birth dates or other identifiers are requested.","7. 문의":"7. Contact","이 계산기는 개인이 만든 무료 도구입니다. 계산 결과에 대한 이의나 정정 요청은 결과 화면의 출처 링크(국세청·국가법령정보센터)를 통해 공식 기준을 확인해 주세요.":"This calculator is a free tool made by an individual. For questions about a result, check the official rules through the source links on the result screen (NTS, Korean Law Information Centre).","8. 고지":"8. Notice","이 도구의 결과는":"The results of this tool are","모의 역산":"a simulated reverse calculation","입니다. 실제 환급·추납액은 최종 총급여, 기납부세액, 의료비·교육비·기부금, 부양가족 요건에 따라 달라집니다. 확정 금액은 홈택스 연말정산 미리보기와 회사 정산 결과로 확인해야 합니다.":". The actual refund or extra payment depends on final gross pay, tax already paid, medical, education and donation amounts and dependant rules. Confirm the final figure with the HomeTax preview and your employer's settlement.","© 2026 13월의 월급 역산기 · 서버 없음 · 계정 없음 · 외부 전송 0건":"© 2026 13th-Month Pay Reverse Calculator · no server · no account · nothing sent out","68만 4,000원":"₩684,000","원":" KRW","근로소득세액공제":"Earned-income tax credit","연금계좌 세액공제":"Pension account credit","표준세액공제":"Standard tax credit","오늘 마감":"Closes today","일":" days","2026년 귀속 연말정산은":"The 2026 year-end settlement","마감":"has closed","됐습니다":".","12/31까지 챙길 수 있는 세금":"Tax you can still claim by 31 Dec","12/31까지 더 챙길 세금은 없습니다":"No more tax to claim by 31 Dec","낼 소득세가 이미 0원입니다. 공제를 더 받아도 돌려받을 세금이 없습니다.":"You already owe ₩0 income tax, so extra deductions return nothing.","카드·연금 한도를 이미 채웠다면 12/18 미리보기로 기납부세액을 확인하세요":"If the card and pension caps are already full, check tax already paid in the 18 December preview","900만원 한도 완료":"₩9,000,000 cap reached","요건 확인 필요":"conditions to check","공제 0원":"₩0 deduction","한도 완료":"cap reached","총급여를 넣으면 연금계좌 한도가 계산됩니다":"Enter your gross salary to see the pension account cap","먼저":"first","총급여 5,500만원을 기준으로 세액공제율 16.5%와 13.2%가 갈립니다.":"The 16.5% and 13.2% credit rates split at ₩55,000,000 of gross salary.","월세를 냈다면 17%를 돌려받습니다":"If you pay rent, 17% comes back","이미 낸 돈":"money already spent","월 60만원이면 연 720만원 × 17% = 122만 4,000원(소득세).":"₩600,000 a month is ₩7,200,000 a year × 17% = ₩1,224,000 (income tax).","카드 사용액을 넣으면 25% 문턱을 판정합니다":"Enter card spending to test the 25% threshold","확인":"Check","문턱을 넘기 전에는 어떤 카드로 써도 공제가 0원입니다.":"Below the threshold, any card gives a ₩0 deduction.","세금 0원":"₩0 tax","낼 세금이 이미 0원이라 더 넣어도 돌려받는 세금은 늘지 않습니다. 내년 한도로 기억해 두세요.":"You already owe ₩0 tax, so paying in more returns nothing. Note the room for next year.","추가 지출 0":"no extra spending","한도까지":"up to the cap","세액 한도 적용":"credit capped","지방세 포함":"local tax included","연금계좌 900만원 한도를 다 채웠습니다":"The ₩9,000,000 pension account cap is full","완료":"Done","더 넣어도 세액공제는 늘지 않습니다. 초과분은 다음 해로 넘길 수 있는지 금융사에 확인하세요.":"Paying in more does not raise the credit. Ask your provider whether the excess can carry into next year.","월세 공제 요건을 확인하세요":"Check the rent credit conditions","총급여 8,000만원 초과이거나 무주택·전입 요건이 맞지 않으면 공제되지 않습니다.":"No credit if gross salary is above ₩80,000,000 or the no-home and move-in conditions are not met.","월세를 낸다면 17%를 돌려받습니다":"If you pay rent, 17% comes back","월 60만원이면 연 720만원 → 세금 122만원대. 무주택 세대주·전입신고가 조건입니다.":"₩600,000 a month is ₩7,200,000 a year → about ₩1,220,000 of tax. You need to be a no-home household head with a move-in registration.","카드 공제가 0원입니다":"Card deduction is ₩0","더 써야 함":"more spending needed","문턱을 넘기 전에는 어떤 카드로 써도 공제가 0원입니다. 새로 쓰면서 채우는 건 손해입니다.":"Below the threshold any card gives ₩0. Spending just to cross it costs you money.","사용액이 없습니다. 이미 쓸 돈이 있다면 체크카드로 결제하세요.":"No spending entered. If you already have money to spend, pay by debit card.","카드 소득공제 한도를 다 채웠습니다":"The card deduction cap is full","더 쓰면 공제는 0원입니다. 남은 카드 사용은 세금과 무관합니다.":"Spending more gives ₩0. Any further card use has no effect on tax.","기본한도 소진":"base cap used up","명 +":" +","자녀 없음":"no children","추가한도 소진":"extra cap used up","대중교통 40%":"Public transport 40%","전통시장 40%":"Traditional market 40%","지방세 포함 · 소득세 15% + 지방 1.5%":"local tax included · 15% income tax + 1.5% local","지방세 포함 · 소득세 12% + 지방 1.2%":"local tax included · 12% income tax + 1.2% local","보다 작음":"smaller than this","한도를 다 채웠습니다":"You have filled the cap","한도 소진":"cap used up","은 공제되지 않습니다":" is not credited","연 600만원 한도 중":"of the ₩6,000,000 annual cap","IRP 한도도 소진":"IRP cap also used up","대상 아님":"not eligible","총급여 5,500만원 이하 · 지방세 포함 18.7%":"gross salary up to ₩55,000,000 · 18.7% with local tax","총급여 5,500~8,000만원 · 지방세 포함 16.5%":"gross salary ₩55,000,000–₩80,000,000 · 16.5% with local tax","총급여 8,000만원 초과 또는 월세 미입력":"gross salary above ₩80,000,000 or no rent entered","비과세 제외":"excluding tax-free pay","근로소득공제":"Earned-income deduction","근로소득금액":"Earned income","명 × 150만원":" × ₩1,500,000","국민연금 보험료":"National pension contribution","총급여 × 4.75% 가정":"gross pay × 4.75% assumed","건강·고용보험료":"Health and employment insurance","총급여 × 4.9673% 가정":"gross pay × 4.9673% assumed","신용카드 등 소득공제":"Card and similar deduction","과세표준":"Tax base","산출세액":"Tax computed","특별공제 미적용 시":"without special deductions","결정세액(소득세)":"Final income tax","세액공제 합계가 산출세액을 넘어 한도 적용":"credits exceed the tax computed, so they are capped","지방소득세":"Local income tax","결정세액 × 10%":"final tax × 10%","총 부담(소득+지방)":"Total (income + local)","카드는 더 쓰는 게 절세가 아닙니다":"Spending more on a card is not tax saving","카드 한도가 이미 찼다면 더 써도 0원입니다":"If the card cap is full, spending more saves ₩0","로그인 없이 무료 · 서버 전송 0건":"free, no login · nothing sent to a server","확정 금액은 홈택스·회사 연말정산에서 확인하세요.":"Confirm the final amount on HomeTax or in your employer's settlement.","미입력":"not entered","1,000만원 미만":"under ₩10,000,000","대":"band","예시 값을 넣었습니다. 내 숫자로 바꿔보세요.":"Filled with an example — swap in your own numbers.","입력값을 지웠습니다.":"Cleared the inputs.","총급여를 먼저 넣어주세요.":"Enter your gross salary first.","이미지를 만들지 못했습니다.":"Could not create the image.","13월의월급-역산-2026.png":"13th-month-reverse-2026.png","결과 카드를 저장했습니다.":"Saved the result card.","퍼가기 코드를 복사했습니다.":"Copied the embed code.","복사가 막혔습니다. 코드를 직접 선택해 주세요.":"Copy was blocked. Select the code and copy it yourself.","직접 계산: https://marcj81.github.io/yearend-tax-reverse/":"Calculate it yourself: https://marcj81.github.io/yearend-tax-reverse/","요약 문구를 복사했습니다.":"Copied the summary text.","복사가 막혔습니다.":"Copy was blocked.","— 총급여와 카드·연금·월세만 넣으면 12월 31일 전 행동을 역산합니다. 입력값은 서버로 가지 않습니다.":"— enter your gross salary, card, pension and rent and it works back from 31 December to the actions that matter. Your inputs never leave the browser.","전통시장·대중교통":"Traditional markets and public transport","이제부터 쓰는 금액에 공제율이 붙습니다. 신용 15%보다 체크·현금 30%가 두 배입니다.":"From here on, the rate applies to what you spend — 30% for debit and cash is double the 15% for credit.","줄지만, 통장에서는":"but ₩1,000,000 leaves your account, so","공제액 합계 → 한도 적용":"Total deduction → after cap","낼 세금이 이미 적어서, 한도를 채워도 실제 감소액은":"You owe little tax already, so even filling the cap saves only","입니다. 세액공제는 결정세액을 넘을 수 없습니다.":". A tax credit cannot exceed the tax you owe.","(소득세), 지방소득세 포함":"(income tax), local income tax included",". 월세 세액공제를 받으면 표준세액공제 13만원은 적용되지 않으며, 계산에 이미 반영했습니다.":". Claiming the rent credit removes the ₩130,000 standard credit, which is already reflected here.","<iframe src=\"https://marcj81.github.io/yearend-tax-reverse/?embed=1\" width=\"100%\" height=\"900\" style=\"border:0;max-width:100%;border-radius:16px\" title=\"연말정산 13월의 월급 역산기\" loading=\"lazy\"></iframe>":"<iframe src=\"https://marcj81.github.io/yearend-tax-reverse/?embed=1\" width=\"100%\" height=\"900\" style=\"border:0;max-width:100%;border-radius:16px\" title=\"Year-End Tax Reverse Calculator\" loading=\"lazy\"></iframe>","카드 사용액을 넣으면":"Enter card spending to see the","문턱까지 남은 금액":"amount left to the threshold","과":" and","100만원을 더 쓸 때의 차이":"difference if you spend ₩1,000,000 more","를 계산합니다.":".","지금은 100만원을 더 써도":"Even if you spend ₩1,000,000 more now,","줄어드는 세금이 0원":"the tax cut is ₩0","입니다. 문턱을 못 넘었거나 한도가 이미 찼기 때문입니다.":" — the threshold is not met or the cap is already full.","남은 기본한도":"Base cap left","(소득세)입니다.":"(income tax).","년":" years","개월":" months","— 12월 31일 기준. 세대원도 세대주가 주택 공제를 받지 않으면 가능합니다.":" — as of 31 December. A household member can claim if the head of household does not take a housing deduction.","— 전입신고가 안 되어 있으면 공제되지 않습니다.":" — no credit without a move-in registration.","— 주거용 오피스텔·고시원 포함.":" — includes residential officetels and gosiwon rooms.","— 주민등록등본, 임대차계약서 사본, 계좌이체 내역.":" — resident register copy, lease copy and bank transfer records.","— 카톡·스레드·인스타 세로 비율에 맞춘 크기입니다.":" — sized for KakaoTalk, Threads and Instagram portrait.","— 티스토리·워드프레스에 붙이면 그 자리에서 계산됩니다.":" — paste it into Tistory or WordPress and it calculates right there.","— 신용카드 등 소득공제. 25% 문턱, 공제율 15/30/40%, 기본한도 300·250만원, 자녀 1명 350·275만원, 2명 이상 400·300만원, 추가한도 300·200만원.":" — card and similar deductions. 25% threshold, rates 15/30/40%, base caps ₩3,000,000/₩2,500,000, one child ₩3,500,000/₩2,750,000, two or more ₩4,000,000/₩3,000,000, extra caps ₩3,000,000/₩2,000,000.","— 근로소득공제 구간(500만·1,500만·4,500만·1억, 한도 2,000만원).":" — earned-income deduction brackets (₩5M · ₩15M · ₩45M · ₩100M, cap ₩20M).","— 종합소득세율 6~45%, 누진공제.":" — income tax rates 6–45% with progressive deduction.","— 근로소득세액공제 55%/30%, 총급여별 한도 74만~20만원.":" — earned-income tax credit 55%/30%, caps from ₩740,000 down to ₩200,000 by salary.","— 자녀세액공제 1명 25만·2명 55만·3명 이상 95만원.":" — child tax credit ₩250,000 for one, ₩550,000 for two, ₩950,000 for three or more.","— 연금계좌 세액공제 15%/12%(지방세 포함 16.5%/13.2%), 연금저축 600·합산 900만원.":" — pension account credit 15%/12% (16.5%/13.2% with local tax), pension savings ₩6M and ₩9M combined.","— 월세 세액공제 17%/15%, 연 1,000만원 한도.":" — rent tax credit 17%/15%, ₩10,000,000 annual cap.","— 2026년 귀속 연말정산 미리보기 2026.10.28~12.18.":" — 2026 year-end settlement preview, 28 October–18 December 2026.","— 2026년 건강보험료율 7.19%(근로자 3.595%), 장기요양보험료율 0.9448%.":" — 2026 health insurance rate 7.19% (employee 3.595%), long-term care 0.9448%.","— 월세·의료비 3% 문턱·부양가족 요건.":" — rent, the 3% medical threshold and dependant rules.","만":"","연금 추가 납입":"Extra pension contribution ","+ 월세":" + rent ","· 지방세 포함":" · local tax included","남음":" left","문턱":"Threshold ","여유":"Room ","초과":" over","연금계좌에":"In your pension account ","여유가 있습니다":" of room is left","연금저축·IRP에":"Into pension savings and IRP ","더 넣기":" more","· 세액공제":" · tax credit ","· 12/31 입금 마감":" · deposits close 31 Dec","챙기기":" to claim","연 월세":"Annual rent ","· 등본·계약서·납부내역 제출":" · submit register, lease and payment records","카드 문턱까지":"To the card threshold ","남았습니다":" left","카드 공제 여유":"Card deduction room ","체크카드로 100만원 더 쓰면 세금":"Spend ₩1,000,000 more on a debit card and tax falls by ","(신용카드는":" (credit card: ","신용":"Credit ","· 체크":" · debit ","· 교통":" · transport ","· 시장":" · market ","기본":"base ","+ 추가":" + extra ","자녀":"children ","남은 추가한도":"Extra cap left ","전통시장·대중교통 공제액":"Market and transport deduction ","세액 한도 때문에 계산상":"capped by the tax credit to ","납입 시":" if contributed","남은 한도":"Room left ","한도 초과":"Over the cap ","본인+부양가족":"you + dependants ","한도":"cap ","− 누진공제":" − progressive deduction ","100만원 더 쓰면 세금":"Spend ₩1,000,000 more and tax falls by ","감소 · 통장에서 100만원 지출":" · with ₩1,000,000 leaving your account","· 모의 역산":" · simulated","[2026년 귀속 연말정산]":"[2026 year-end settlement]\n","· 연금저축·IRP:":"· Pension savings and IRP: ","(남은 한도":" (room left ","· 월세 세액공제:":"· Rent tax credit: ","· 카드: 100만원 더 쓰면":"· Card: spending ₩1,000,000 more saves "};
  var PATTERNS = /*__PATTERNS__*/ [[new RegExp("^(\\d[\\d.,]*)\\s*일$", ""), "$1 days"],[new RegExp("^(\\d[\\d.,]*)\\s*년$", ""), "$1 years"],[new RegExp("^(\\d[\\d.,]*)\\s*개월$", ""), "$1 months"],[new RegExp("^(\\d[\\d.,]*)\\s*시간$", ""), "$1 hours"],[new RegExp("^(\\d[\\d.,]*)\\s*분$", ""), "$1 min"],[new RegExp("^(\\d[\\d.,]*)\\s*명$", ""), "$1 people"],[new RegExp("^(\\d[\\d.,]*)\\s*개$", ""), "$1"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월$", ""), "$1 yr $2 mo"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 yr $2 mo $3 d"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*(\\d[\\d.,]*)\\s*일$", ""), "$1 mo $2 d"],[new RegExp("^(\\d[\\d.,]*)\\s*일\\s*전$", ""), "$1 days ago"],[new RegExp("^(\\d[\\d.,]*)\\s*개월\\s*전$", ""), "$1 months ago"],[new RegExp("^(\\d[\\d.,]*)\\s*년\\s*전$", ""), "$1 years ago"],[new RegExp("^연금 추가 납입 (\\{\\d+\\}) \\+ 월세 (\\{\\d+\\}) · 지방세 포함$", ""), "Extra pension $1 + rent $2 · local tax included"],[new RegExp("^(\\{\\d+\\}) 남음$", ""), "$1 left"],[new RegExp("^\\+(\\{\\d+\\})$", ""), "+$1"],[new RegExp("^(\\{\\d+\\}) × (\\d+)%$", ""), "$1 × $2%"],[new RegExp("^문턱 (\\{\\d+\\}) 초과$", ""), "Threshold $1 over"],[new RegExp("^여유 (\\{\\d+\\})$", ""), "Room $1"],[new RegExp("^연금저축·IRP에 (\\{\\d+\\}) 더 넣기$", ""), "Put $1 more into pension savings and IRP"],[new RegExp("^연금저축 (\\{\\d+\\}) \\+ IRP (\\{\\d+\\}) · 세액공제 (.+) · 12/31 입금 마감$", ""), "Pension savings $1 + IRP $2 · tax credit $3 · deposits close 31 Dec"],[new RegExp("^월세 세액공제 (\\{\\d+\\}) 챙기기$", ""), "Claim the $1 rent tax credit"],[new RegExp("^연 월세 (\\{\\d+\\}) × (\\d+)% · 등본·계약서·납부내역 제출$", ""), "Annual rent $1 × $2% · submit register, lease and payment records"],[new RegExp("^카드 공제 여유 (\\{\\d+\\})$", ""), "Card deduction room $1"],[new RegExp("^체크카드로 (\\{\\d+\\}) 더 쓰면 세금 (\\{\\d+\\}) \\(신용카드는 (\\{\\d+\\})\\)$", ""), "Spend $1 more on debit → tax falls $2 (credit card: $3)"],[new RegExp("^총급여 (\\{\\d+\\}) × 25%$", ""), "Gross salary $1 × 25%"],[new RegExp("^신용 (\\{\\d+\\}) · 체크 (\\{\\d+\\}) · 교통 (\\{\\d+\\}) · 시장 (\\{\\d+\\})$", ""), "Credit $1 · debit $2 · transport $3 · market $4"],[new RegExp("^기본 (\\{\\d+\\}) \\+ 추가 (\\{\\d+\\})$", ""), "base $1 + extra $2"],[new RegExp("^(\\{\\d+\\}) / (\\{\\d+\\})$", ""), "$1 / $2"],[new RegExp("^남은 추가한도 (\\{\\d+\\})$", ""), "Extra cap left $1"],[new RegExp("^전통시장·대중교통 공제액 (\\{\\d+\\})$", ""), "Market and transport deduction $1"],[new RegExp("^문턱을 (\\{\\d+\\}) 넘겼습니다\\.$", ""), "You are $1 past the threshold."],[new RegExp("^(\\{\\d+\\})을 더 쓰면 세금은$", ""), "Spending $1 more cuts tax by"],[new RegExp("^이 나갑니다\\. 순손실 (\\{\\d+\\})입니다\\.$", ""), " goes out. Net loss $1."],[new RegExp("^연금저축 (\\{\\d+\\}) \\+ IRP (\\{\\d+\\})$", ""), "Pension savings $1 + IRP $2"],[new RegExp("^남은 (\\{\\d+\\}) 납입 시$", ""), "contribute the remaining $1"],[new RegExp("^남은 한도 (\\{\\d+\\})$", ""), "Room left $1"],[new RegExp("^월세 (\\{\\d+\\}) × 17% =$", ""), "Rent $1 × 17% ="],[new RegExp("^− (\\{\\d+\\})$", ""), "− $1"],[new RegExp("^\\+ (\\{\\d+\\})$", ""), "+ $1"],[new RegExp("^본인\\+부양가족 (\\d+)명 × (\\{\\d+\\})$", ""), "you + $1 dependants × $2"],[new RegExp("^한도 (\\{\\d+\\})$", ""), "cap $1"],[new RegExp("^(\\d+)% − 누진공제 (\\{\\d+\\})$", ""), "$1% − progressive deduction $2"],[new RegExp("^남은 기본한도 (\\{\\d+\\})$", ""), "Base cap left $1"],[new RegExp("^세액 한도 때문에 계산상 (\\{\\d+\\})보다 작음$", ""), "capped by the tax credit to $1, smaller than that"],[new RegExp("^월세를 넣으면 공제액을 계산합니다\\. 월 (\\{\\d+\\})이면 연 (\\{\\d+\\}) × 17% =$", ""), "Enter rent to see the credit. $1 a month is $2 a year × 17% ="]];
  var BLOCKS = /*__BLOCKS__*/ {};

  var DICT = {};
  var k;
  for (k in COMMON) if (Object.prototype.hasOwnProperty.call(COMMON, k)) DICT[k] = COMMON[k];
  for (k in APP) if (Object.prototype.hasOwnProperty.call(APP, k)) DICT[k] = APP[k];

  var HANGUL = /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3]/;
  var SKIP_TAG = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, SVG: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var state = { lang: 'ko' };
  var records = [];
  var missing = {};
  var missingList = [];
  var observer = null;

  /* ---------- language ---------- */
  function detect() {
    try {
      var q = new URLSearchParams(root.location.search).get('lang');
      if (q === 'ko' || q === 'en') return q;
    } catch (e) { /* very old browser */ }
    try {
      var saved = root.localStorage.getItem(LANG_KEY);
      if (saved === 'ko' || saved === 'en') return saved;
    } catch (e) { /* private mode */ }
    var nav = root.navigator.language || root.navigator.userLanguage || 'ko';
    return /^ko/i.test(nav) ? 'ko' : 'en';
  }

  /* ---------- lookup ---------- */
  function report(text) {
    if (missing[text]) return;
    missing[text] = 1;
    missingList.push(text);
    if (root.console && console.warn) console.warn('I18N_MISS: ' + text);
  }

  /* Pattern with capture translation: captures that still hold Korean are looked up too. */
  function applyPattern(core, p) {
    if (!p[0].test(core)) return null;
    var m = p[0].exec(core);
    var caps = [], i, ok = true;
    for (i = 1; i < m.length; i++) {
      var c = m[i];
      if (c == null) { caps[i] = ''; continue; }
      if (HANGUL.test(c)) {
        var t = lookupSmall(c.trim());
        if (t == null) { ok = false; caps[i] = c; } else { caps[i] = t; }
      } else { caps[i] = c; }
    }
    var out = p[1].replace(/\$(\d+)/g, function (all, n) { return caps[+n] != null ? caps[+n] : all; });
    if (!ok || HANGUL.test(out)) return null;
    return out;
  }

  function tr(raw) {
    if (typeof raw !== 'string' || !HANGUL.test(raw)) return raw;
    raw = raw.replace(/\u00a0/g, ' ');
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
    var lead = m[1], core = m[2], tail = m[3];
    if (!core) return raw;
    var hit = DICT[core];
    if (hit == null && /\s{2,}|\n/.test(core)) hit = DICT[core.replace(/\s+/g, ' ').trim()];
    if (hit != null) return lead + hit + tail;

    /* Korean date: 2026년 11월 27일 -> November 27, 2026 */
    var dt = /^(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일$/.exec(core);
    if (dt) {
      var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mm = parseInt(dt[2], 10);
      if (mm >= 1 && mm <= 12) return lead + MO[mm - 1] + ' ' + parseInt(dt[3], 10) + ', ' + dt[1] + tail;
    }

    /* money in Korean format: 81만 원 / 2,980,750원  ->  {0} template */
    var money = takeMoney(core);
    if (money.map.length) {
      var tpl = money.text;
      var th = DICT[tpl];
      if (th == null && /\s{2,}|\n/.test(tpl)) th = DICT[tpl.replace(/\s+/g, ' ').trim()];
      if (th == null && /^\{0\}$/.test(tpl.trim())) th = '{0}';
      if (th != null) return lead + putMoney(th, money.map) + tail;
      for (var mi = 0; mi < PATTERNS.length; mi++) {
        var mo = applyPattern(tpl, PATTERNS[mi]);
        if (mo != null) return lead + putMoney(mo, money.map) + tail;
      }
      var mseg = trSegments(tpl);
      if (mseg != null) return lead + putMoney(mseg, money.map) + tail;
    }
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(core, PATTERNS[i]);
      if (pout != null) return lead + pout + tail;
    }
    var seg = trSegments(core);
    if (seg != null) return lead + seg + tail;
    report(core);
    return raw;
  }


  /* Korean money -> token template; values are formatted as ₩1,234,567 */
  function won(n) { return (n < 0 ? '−₩' : '₩') + Math.abs(n).toLocaleString('en-US'); }
  function takeMoney(core) {
    var map = [];
    var out = core.replace(/([\d,]+)\s*억(?:\s*([\d,]+)\s*만)?(?:\s*([\d,]+))?\s*원/g, function (all, a, b, c) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 100000000 +
        (b ? parseInt(b.replace(/,/g, ''), 10) * 10000 : 0) +
        (c ? parseInt(c.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([\d,]+)\s*만(?:\s*([\d,]+))?\s*원/g, function (all, a, b) {
      var n = parseInt(a.replace(/,/g, ''), 10) * 10000 + (b ? parseInt(b.replace(/,/g, ''), 10) : 0);
      map.push(won(n));
      return '{' + (map.length - 1) + '}';
    });
    out = out.replace(/([+\-\u2212]?[\d,]+)\s*원/g, function (all, a) {
      var raw = a.replace(/\u2212/g, '-').replace(/,/g, '');
      var num = parseInt(raw, 10);
      map.push(isFinite(num) ? won(num) : a);
      return '{' + (map.length - 1) + '}';
    });
    return { text: out, map: map };
  }
  function putMoney(s, map) {
    return s.replace(/\{(\d+)\}/g, function (all, i) { return map[+i] != null ? map[+i] : all; });
  }

  /* A small unit: dictionary hit or pattern hit, no whitespace trimming. */
  function lookupSmall(unit) {
    var hit = DICT[unit];
    if (hit != null) return hit;
    for (var i = 0; i < PATTERNS.length; i++) {
      var pout = applyPattern(unit, PATTERNS[i]);
      if (pout != null) return pout;
    }
    return null;
  }

  function trPipe(line) {
    var parts = line.split(/\s*\|\s*/);
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var t = lookupSmall(parts[i].trim());
      if (t == null) return null;
      out.push(t);
    }
    return out.join(' | ');
  }

  /* piece lookup: dictionary, patterns, money token, or bare number/unit */
  function piece(unit) {
    var u = unit.trim();
    if (!u) return '';
    if (!HANGUL.test(u)) return u;
    if (/^\{\d+\}$/.test(u)) return u;
    var t = lookupSmall(u);
    if (t != null) return t;
    return null;
  }

  var SEG_SPLIT = /\s*(\s·\s|\s→\s|\s:\s|\s\/\s)/;
  function trSplit(line) {
    var parts = line.split(SEG_SPLIT);
    if (parts.length < 3) return null;
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      if (i % 2) { out.push(parts[i]); continue; }
      var t = piece(parts[i]);
      if (t == null) return null;
      out.push(t);
    }
    return out.join('');
  }

  function trSegments(core) {
    if (core.indexOf('\n') > -1) {
      var lines = core.split('\n');
      var out = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!line.trim()) { out.push(line); continue; }
        var t = line.indexOf('|') > -1 ? trPipe(line) : piece(line);
        if (t == null) t = trSplit(line);
        if (t == null) { if (root.__I18N_DEBUG) (root.__I18N_SEGFAIL = root.__I18N_SEGFAIL || []).push(line); return null; }
        out.push(t);
      }
      return out.join('\n');
    }
    if (core.indexOf('|') > -1) return trPipe(core);
    if (/[·:→]/.test(core) && /\s/.test(core)) return trSplit(core);
    return null;
  }

  /* ---------- DOM walking ---------- */
  function skipped(el) {
    while (el) {
      if (el.nodeType === 1) {
        if (SKIP_TAG[el.tagName]) return true;
        if (el.getAttribute && (el.hasAttribute('data-i18n-skip') || el.getAttribute('contenteditable') === 'true')) return true;
        if (el.classList && el.classList.contains('onetap-lang')) return true;
      }
      el = el.parentNode;
    }
    return false;
  }

  function trText(node) {
    var v = node.nodeValue;
    if (!v || !HANGUL.test(v)) return;
    var out = tr(v);
    if (out !== v) {
      records.push({ n: node, v: v });
      node.nodeValue = out;
    }
  }

  function trAttrs(el) {
    var i, at, v, out;
    for (i = 0; i < ATTRS.length; i++) {
      at = ATTRS[i];
      if (!el.hasAttribute(at)) continue;
      v = el.getAttribute(at);
      if (!v || !HANGUL.test(v)) continue;
      out = tr(v);
      if (out !== v) {
        records.push({ e: el, a: at, v: v });
        el.setAttribute(at, out);
      }
    }
    if (el.tagName === 'INPUT' && el.hasAttribute('value') && el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'hidden') {
      v = el.getAttribute('value');
      if (v && HANGUL.test(v)) {
        out = tr(v);
        if (out !== v) {
          records.push({ e: el, a: 'value', v: v });
          el.setAttribute('value', out);
          if (el.value === v) el.value = out;
        }
      }
    }
    if (el.tagName === 'INPUT') {
      var ty = (el.type || '').toLowerCase();
      if (ty === 'button' || ty === 'submit' || ty === 'reset') {
        v = el.value;
        if (v && HANGUL.test(v)) {
          out = tr(v);
          if (out !== v) { records.push({ e: el, a: 'value', v: v }); el.value = out; }
        }
      }
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { trText(node); return; }
    if (node.nodeType !== 1) return;
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'SVG' &&
        !(node.classList && node.classList.contains('onetap-lang'))) trAttrs(node);
    if (skipped(node)) return;
    if (node.tagName === 'META') return;
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function trMeta() {
    var list = doc.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], v = el.getAttribute('content');
      if (v && HANGUL.test(v)) {
        var out = tr(v);
        if (out !== v) { records.push({ e: el, a: 'content', v: v }); el.setAttribute('content', out); }
      }
    }
  }

  function trJsonLd() {
    var list = doc.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      try {
        var data = JSON.parse(el.textContent);
        var changed = fixJson(data);
        if (changed) el.textContent = JSON.stringify(data);
      } catch (e) { /* leave as is */ }
    }
  }

  function fixJson(o) {
    var changed = false, i;
    if (Array.isArray(o)) {
      for (i = 0; i < o.length; i++) if (fixJson(o[i])) changed = true;
      return changed;
    }
    if (!o || typeof o !== 'object') return false;
    for (var key in o) {
      if (!Object.prototype.hasOwnProperty.call(o, key)) continue;
      var v = o[key];
      if (typeof v === 'string' && HANGUL.test(v)) {
        var out = DICT[v.trim()];
        if (out != null) { o[key] = out; changed = true; }
      } else if (v && typeof v === 'object') {
        if (fixJson(v)) changed = true;
      }
    }
    return changed;
  }

  /* ---------- apply / restore ---------- */
  function applyBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], id = el.getAttribute('data-i18n-block');
      if (!BLOCKS[id] || el.__i18nOrig != null) continue;
      el.__i18nOrig = el.innerHTML;
      el.innerHTML = BLOCKS[id];
    }
  }
  function restoreBlocks() {
    var list = doc.querySelectorAll('[data-i18n-block]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__i18nOrig != null) { el.innerHTML = el.__i18nOrig; el.__i18nOrig = null; }
    }
  }

  function applyEn() {
    var title = root.__onetapTitle || (root.__onetapTitle = doc.title);
    applyBlocks();
    walk(doc.body);
    trMeta();
    trJsonLd();
    doc.documentElement.lang = 'en';
    var t = DICT[title] || DICT[title.trim()];
    doc.title = t || title;
  }

  function restoreKo() {
    for (var i = records.length - 1; i >= 0; i--) {
      var r = records[i];
      if (r.n) { if (r.n.nodeValue !== r.v) r.n.nodeValue = r.v; }
      else if (r.e) {
        if (r.a === 'value') { if (r.e.value !== r.v) r.e.value = r.v; }
        else if (r.e.getAttribute(r.a) !== r.v) r.e.setAttribute(r.a, r.v);
      }
    }
    records.length = 0;
    restoreBlocks();
    var title = root.__onetapTitle;
    if (title) doc.title = title;
    doc.documentElement.lang = 'ko';
  }

  /* ---------- language switch UI ---------- */
  function buildSwitch() {
    var wrap = doc.createElement('div');
    wrap.className = 'onetap-lang';
    wrap.setAttribute('role', 'group');
    wrap.innerHTML = '<button type="button" data-onetap-lang="ko" aria-pressed="true">KO</button>' +
      '<button type="button" data-onetap-lang="en" aria-pressed="false">EN</button>';
    var box = doc.querySelector('.top-actions') || doc.querySelector('.topbar__inner') ||
      doc.querySelector('.topbar-inner') || doc.querySelector('.topbar-in') ||
      doc.querySelector('.top-badges') || doc.querySelector('.top-in') ||
      doc.querySelector('.topbar') || doc.querySelector('header');
    if (box) {
      if (box.classList.contains('top-badges')) box.insertBefore(wrap, box.firstChild);
      else if (box.classList.contains('top-actions')) box.insertBefore(wrap, box.firstChild);
      else {
        var act = box.querySelector('.top-actions');
        if (act) box.insertBefore(wrap, act); else box.appendChild(wrap);
      }
    } else {
      wrap.style.cssText = 'position:fixed;top:10px;right:10px;z-index:99999;background:rgba(255,255,255,.9);color:#111';
      doc.body.appendChild(wrap);
    }
    wrap.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-onetap-lang]');
      if (!b) return;
      setLang(b.getAttribute('data-onetap-lang'));
    });
    return wrap;
  }

  var CSS = '.onetap-lang{display:inline-flex;flex:none;align-items:center;padding:2px;border:1px solid currentColor;border-radius:999px;opacity:.72;transition:opacity .15s;vertical-align:middle;align-self:center}' +
    '.onetap-lang:hover,.onetap-lang:focus-within{opacity:1}' +
    '.onetap-lang button{appearance:none;-webkit-appearance:none;border:0;background:transparent;color:inherit;font:inherit;font-size:10.5px;font-weight:700;letter-spacing:.04em;line-height:1;padding:5px 6px;border-radius:999px;cursor:pointer;min-width:26px;text-align:center}' +
    '.onetap-lang button[aria-pressed="true"]{background:rgba(128,128,128,.3)}' +
    '@media (max-width:520px){.onetap-lang button{padding:4px 4px;font-size:10px;min-width:22px}.onetap-lang{margin-left:2px}}' +
    'html[lang="en"] .unit,html[lang="en"] .won{margin-left:4px}';

  function injectCss() {
    var s = doc.createElement('style');
    s.id = 'onetap-lang-css';
    s.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(s);
  }

  function paintSwitch() {
    var bs = doc.querySelectorAll('[data-onetap-lang]');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', bs[i].getAttribute('data-onetap-lang') === state.lang ? 'true' : 'false');
    }
    var wrap = doc.querySelector('.onetap-lang');
    if (wrap) wrap.setAttribute('aria-label', state.lang === 'ko' ? '언어' : 'Language');
  }

  /* ---------- observe ---------- */
  function startObserver() {
    if (observer || !root.MutationObserver) return;
    observer = new MutationObserver(function (muts) {
      if (state.lang !== 'en') return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'characterData') { trText(m.target); continue; }
        if (m.type === 'attributes') { if (m.target.nodeType === 1 && !skipped(m.target)) trAttrs(m.target); continue; }
        for (var j = 0; j < m.addedNodes.length; j++) {
          if (m.addedNodes[j].nodeType === 1 && m.addedNodes[j].hasAttribute && m.addedNodes[j].hasAttribute('data-i18n-block')) applyBlocks();
          walk(m.addedNodes[j]);
        }
      }
    });
    observer.observe(doc.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label', 'title', 'alt'] });
  }

  function setLang(lang) {
    state.lang = lang === 'en' ? 'en' : 'ko';
    try { root.localStorage.setItem(LANG_KEY, state.lang); } catch (e) { /* private mode */ }
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      if (observer) { observer.disconnect(); observer = null; }
      restoreKo();
    }
    paintSwitch();
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  function boot() {
    injectCss();
    buildSwitch();
    state.lang = detect();
    if (state.lang === 'en') {
      applyEn();
      startObserver();
    } else {
      doc.documentElement.lang = 'ko';
    }
    paintSwitch();
    root.ONETAP_I18N = {
      lang: function () { return state.lang; },
      setLang: setLang,
      t: tr,
      missing: function () { return missingList.slice(); },
      dict: DICT
    };
    try { doc.dispatchEvent(new CustomEvent('onetap:lang', { detail: { lang: state.lang } })); } catch (e) { /* old */ }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window, document);
