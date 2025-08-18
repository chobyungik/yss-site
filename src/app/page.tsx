"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

/*
 여상수 랜딩 페이지 - 섹션별 배경을 자유롭게 설정할 수 있도록 개편한 버전.
 - 각 섹션은 BG 객체에 정의된 사진을 배경으로 사용하며, ReasonBand를 통해 개별 경쟁력 항목마다 배경 사진을 지정할 수 있습니다.
 - 기본 배경색을 흰색으로 설정하여 우드톤을 제거하였습니다.
 - 글씨 가독성을 위해 적절한 흰색/검정 오버레이를 섹션별로 적용할 수 있습니다.
*/

// 브랜드 정보 및 네비게이션
const BRAND = {
name: "여상수",
tagline: "할머니의 손맛 그대로, 안동식 양념 소갈비를 트렌디하게 즐기는 여상수",
phone: "010-8230-0800",
address: "경기도 안양시 삼덕로 80-1, 1층 여상수",
bizno: "181-41-01276",
email: "contact@example.com",
logoSrc: "/images/logo.png",
};

const NAV = [
{ href: "#home", label: "HOME" },
{ href: "#about", label: "브랜드소개" },
{ href: "#edge", label: "경쟁력" },
{ href: "#profit", label: "수익률" },
{ href: "#cost", label: "창업비용" },
{ href: "#cases", label: "사례" },
{ href: "#process", label: "절차" },
{ href: "#faq", label: "FAQ" },
{ href: "#contact", label: "문의" },
];

// 경쟁력(이유) 데이터: 각 항목의 bg를 섹션 전체 배경으로 사용, img는 보조 이미지
const REASONS = [
{
num: "01",
title: "1인 운영 구조",
desc:     
`양념갈비살, 양념간받이, 한우대창, 청정특양 등.
     여러 부위의 소고기이지만 같은 양념 비율과 조리 방식만
     다를 뿐 사실상 단일 메뉴인 셈입니다.
     공정이 다른 메뉴들이 많으면 인력을 많이 써야 하지만,
     여상수는 사실상 단일 메뉴를 숙달해서 조리를 하기 때문에
     완성도는 높지만 주방에 혼자서 일하는 게 가능합니다.`,
img: "/images/reason1.jpg",
bg: "/images/reason1-bg.jpg",
overlay: "bg-gradient-to-b from-black/90 via-black/70 to-black/50 md:from-black/90 md:via-black/70",
textClass: "text-white drop-shadow-md",
},
{
num: "02",
title: "안정적인 매출",
desc: `요즘 어지간한 메뉴들 만 원 넘는 고물가 시대에 살고 있습니다.
여상수 갈비살은 1인분 18,000원, 할머니에게 전수받은 양념이라는 스토리,
흔치 않은 양념 소고기라는 정체성, 그리고 단출한 메뉴로 집중된 경험 덕분에
손님들은 가격을 수긍합니다.
무엇보다 양념은 타기 전에 빨리 먹어야 하고,
금방 익어 바로 먹을 수 있는 소고기이기에 자연스럽게 회전률이 높습니다.
우리는 하루 4~5시간 집중된 시간에, 테이블 단가는 평균 8만 원 이상을 보입니다.
짧은 시간, 높은 회전과 안정적인 매출. 이것이 여상수의 힘입니다.`,
img: "/images/reason2.jpg",
bg: "/images/reason2-bg.jpg",    
},
{
num: "03",
title: "합리적 원가",
desc: `타 프랜차이즈 같은 경우는 핵심 수익인 소 물류수익을
빼놓을 수가 없습니다.
소 물류수익을 기반으로 회사를 운영하기 때문에 공급단가가 높고,
공급단가가 높기 때문에 높은 매출을 요구할 수밖에 없습니다.
하지만 여상수는 좋은 소를 받을 수 있도록 연결을
시켜주는 역할을 하기 때문에 원가율이 35%가 넘지 않습니다. 
하지만 고객들이 느끼는 가성비는 확실합니다.`,
img: "/images/reason3.jpg",
bg: "/images/reason3-bg.jpg",
overlay: "bg-gradient-to-b from-black/90 via-black/70 to-black/50 md:from-black/90 md:via-black/70",
textClass: "text-white drop-shadow-md"
},
{
num: "04",
title: "낮은 투자비",
desc: `여상수는 작은 규모의 매장에서 출발합니다.
   인테리어는 이미 체계적으로 매뉴얼이 잡혀 있어,
   불필요한 과투자 없이 빠르고 간결하게 리모델링이 가능합니다.
   특히 덕트 같은 기본 설비가 갖춰진 매장을 인수한다면,
   공사비를 크게 줄이고 운영 준비 기간까지 단축할 수 있습니다.
   화려한 시설에 비용을 쓰기보다 필수 요소만 효율적으로 투자해
   안정적으로 시작할 수 있다는 것이 여상수의 강점입니다.`,
img: "/images/reason4.jpg",
bg: "/images/reason4-bg.jpg",
overlay: "",
},
{
num: "05",
title: "유행을 타 않는 아이템",
desc: `양념소갈비는 한식이자 대중적인 메뉴로,
   특별한 날에만 찾는 음식이 아니라 누구나 언제든
   즐길 수 있는 안정적인 아이템입니다.
   특히 젊은 층 위주의 신도시보다는, 오래된 구도심이나 오피스 상권,
   공장지대, 구축 아파트 단지 상권에서 수요가 높습니다.
   가족 단위, 직장 회식, 동네 단골까지 폭넓은 소비층을
   확보할 수 있어 계절이나 유행에 흔들리지 않는 것이 장점입니다.`,
img: "/images/reason5.jpg",
bg: "/images/reason5-bg.jpg",
overlay: "bg-gradient-to-b from-black/90 via-black/70 to-black/50 md:from-black/90 md:via-black/70",
textClass: "text-white drop-shadow-md"
},
];

// 수익률 테이블
const PROFIT = [
{ k: "월매출(100%)", v: "31,278,000" },
{ k: "고기(30%)", v: "-9,383,400" },
{ k: "인건비(7%)", v: "-2,200,000" },
{ k: "임대료(2.8%)", v: "-900,000" },
{ k: "공과금(2.6%)", v: "-813,220" },
{ k: "숯 및 불판(1.5%)", v: "-470,000" },
{ k: "식자재 및 잡비(8.5%)", v: "-2,664,000" },
{ k: "세전이익(42%)", v: "13,188,000" },
];

// 비용: 소프트웨어 / 하드웨어
const COST_SOFT = [
{ k: "가맹비", v: "1,000만원" },
{ k: "교육비", v: "500만원" },
{ k: "브랜딩/설계", v: "500 ~ 700만원" },
{ k: "총", v: "2,000 ~ 2,200만원" },
];

const COST_HARD = [
{ k: "인테리어", v: "실비" },
{ k: "주방/기물", v: "실비" },
{ k: "사인/VMD", v: "실비" },
{ k: "기타설비", v: "실비" },
];

// 사례(BEFORE / AFTER)
const CASES = [
{
name: "안양중앙시장점(20평)",
before: "/images/case-ansung-before.jpg",
after: "/images/case-ansung-after.jpg",
memo: "덕트/가스/전기 보강 + 주방설비 + 간판",
total: "시설 1,800만 / 총 3,600만",
},
{
name: "안산중앙점(35평)",
before: "/images/case-sindorim-before.jpg",
after: "/images/case-sindorim-after.jpg",
memo: "리모델 2,700 + 설비증설 1,000 + 기물 1,000",
total: "시설 5,950만 / 총 7,950만",
},
{
name: "안산사동점(40평)",
before: "/images/case-gangneung-before.jpg",
after: "/images/case-gangneung-after.jpg",
memo: "인테리어 7,000 + 설비 2,000 + 가구/사인",
total: "시설 1억2천 / 총 1억4,200만",
},
];

// 섹션별 기본 배경 이미지. 원하는 사진으로 교체하세요.
const BG = {
hero: "/images/hero.jpg",
about: "/images/bg-about.jpg",
edge: "",
profit: "/images/bg-profit.jpg",
cost: "/images/bg-cost.jpg",
cases: "/images/bg-cases.jpg",
process: "/images/bg-process.jpg",
faq: "/images/bg-faq.jpg",
contact: "/images/bg-contact.jpg",
};

// 공용 컨테이너: 너비 제한 및 좌우 패딩
function Shell({ children }: { children: ReactNode }) {
return <div className="w-full max-w-6xl mx-auto px-4">{children}</div>;
}

/* 섹션 컴포넌트
  - bg: 배경 이미지 경로
  - overlay: Tailwind 클래스로 지정하는 밝은 오버레이
  - fixed: true면 배경 고정(parallax)
*/
function Section({
id,
title,
subtitle,
children,
bg,
// 기본적으로 오버레이를 사용하지 않도록 공백 문자열을 기본값으로 설정합니다.
overlay = "",
fixed = false,
titleClass = "",
textClass = "",
}: {
id: string;
title: string;
subtitle?: string;
children: ReactNode;
bg?: string;
overlay?: string;
fixed?: boolean;
titleClass?: string;
textClass?: string;
}) {
return (
<motion.section
id={id}
className="relative py-20 text-[#222]"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6 }}
>
{bg && (
<>
{/* 배경은 section 내부에서 독립된 스택이 되도록 z-0에 배치합니다 */}
<div
className={`absolute inset-0 z-0 ${fixed ? "bg-fixed" : ""}`}
style={{
backgroundImage: `url(${bg})`,
backgroundSize: "cover",
backgroundPosition: "center",
}}
/>
{/* 오버레이가 정의된 경우에만 덮습니다 */}
{overlay && overlay.trim() !== "" ? (
<div className={`absolute inset-0 z-0 ${overlay}`} />
) : null}
</>
)}
{/* 내용은 배경 위에 올라오도록 z-10에 배치합니다 */}
<div className="relative z-10">
<Shell>
<h2 className={`text-3xl md:text-4xl font-bold mb-3 ${titleClass} text-[#FF9C00]`}
>
{title}
</h2>
{subtitle && (
<p
className={`mb-8 text-[#6b6255] max-w-2xl leading-relaxed ${textClass}`}
>
{subtitle}
</p>
)}
{children}
</Shell>
</div>
</motion.section>
);
}

/* 도넛 차트를 그리는 컴포넌트 */
function Donut({ valuePercent }: { valuePercent: number }) {
const dash = `${valuePercent} ${100 - valuePercent}`;
return (
<svg
viewBox="0 0 42 42"
width="400"
height="400"
aria-label="profit donut"
>
<circle cx="21" cy="21" r="15.915" fill="#fff" />
<circle
cx="21"
cy="21"
r="15.915"
fill="transparent"
stroke="#eee"
strokeWidth="6"
/>
<circle
cx="21"
cy="21"
r="15.915"
fill="transparent"
stroke="#e36f33"
strokeWidth="6"
strokeDasharray={dash}
strokeDashoffset="25"
/>
<text
x="21"
y="23"
textAnchor="middle"
fontSize="6"
fill="#e36f33"
fontWeight="bold"
>
{valuePercent}%
</text>
</svg>
);
}

/* ReasonBand 컴포넌트: 개별 경쟁력 항목에 배경 사진을 적용합니다. */
function ReasonBand({
r,
flip = false,
header,
}: {
r: {
num: string;
title: string;
desc: React.ReactNode;   //
img?: string | null;
bg?: string | null;
overlay?: string;
textClass?: string; 
};
flip?: boolean;
header?: { title: ReactNode; subtitle?: ReactNode };
}) {
return (
<section className="relative py-20 text-[#222]">
{/* 배경 이미지 및 오버레이 */}
{r.bg && (
<>
<img
src={r.bg}
alt=""
className="absolute inset-0 z-0 w-full h-full object-cover"
/>
{/* 오버레이가 지정되어 있을 때만 렌더링 */}
{r.overlay && r.overlay.trim() !== "" && (
<div
className={`absolute inset-0 z-10 pointer-events-none ${r.overlay}`}
/>
)}
</>
)}
<Shell>
{/* 헤더(제목/부제목)를 첫 번째 이유에서만 출력 */}
{header && (
<div className="relative z-20 mb-8">
<h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#FF9C00]">
{header.title}
</h2>
{header.subtitle && (
<p className="text-[#6b6255] max-w-2xl leading-relaxed">
{header.subtitle}
</p>
)}
</div>
)}
<div
className={`relative z-20 flex flex-col md:flex-row items-center gap-10 ${
           flip ? "md:flex-row-reverse" : ""
         }`}
>
{r.img && (
<div className="md:w-1/2">
<img
src={r.img}
alt={`이유 ${r.num} ${r.title}`}
className="w-full rounded-xl border border-[#e5dccf] shadow object-cover"
loading="lazy"
decoding="async"
/>
</div>
)}
<div className={`md:w-1/2 space-y-3 ${flip ? "md:pr-6" : "md:pl-6"}`}>
<span className="inline-block bg-[#e36f33] text-white text-xs font-bold rounded-full px-3 py-1">
이유 {r.num}
</span>

<h3 className={`text-2xl font-semibold ${r.textClass || "text-[#2b2b2b]"}`}>
{r.title}
</h3>

{typeof r.desc === "string" ? (
<p className={`leading-6 whitespace-pre-line ${r.textClass || "text-[#4a4339]"}`}>
{r.desc}
</p>
) : (
r.desc
)}
</div>
</div>
</Shell>
</section>
);
}

/* 메인 페이지 컴포넌트 */
export default function Page() {
return (
<div className="min-h-screen bg-white text-[#222]">
{/* 네비게이션 바 */}
<div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#e5dccf]">
<Shell>
<nav className="h-16 md:h-20 flex items-center justify-between">
<a href="#home" className="flex items-center gap-2">
<img
src={BRAND.logoSrc}
alt={`${BRAND.name} 로고`}
className="h-12 md:h-14 lg:h-16 w-auto object-contain shrink-0"
/>
</a>
<div className="hidden md:flex gap-6 text-sm">
{NAV.map((n) => (
<a
key={n.href}
href={n.href}
className="hover:text-[#e36f33] transition-colors"
>
{n.label}
</a>
))}
</div>
<a
href="#contact"
className="text-sm px-3 py-1 rounded-full border border-[#d9cfbc] bg-white/70 hover:bg-white/90 transition"
>
문의
</a>
</nav>
</Shell>
</div>

{/* 히어로 섹션 */}
<header id="home" className="relative">
<div className="absolute inset-0">
<img
src={BG.hero}
alt="hero"
className="w-full h-[80vh] object-cover"
/>
{/* 🔹 가독성용 오버레이(그라데이션) 추가 */}
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent md:from-black/70 md:via-black/50" />
</div>

<Shell>
<div className="relative h-[80vh] flex items-center">
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
{/* 🔸 주황 문구 크게 + 배경 */}
<p className="inline-block bg-black/40 text-[#e36f33] font-semibold tracking-wider text-sm md:text-base px-2.5 py-1.5 rounded-md mb-3">
성공창업의 동반자
</p>

{/* 🔸 메인 타이틀 가독성 강화: 굵게 + 강한 드롭섀도 */}
<h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
할머니의 손맛 그대로<br />안동식 양념 소갈비를
<br className="hidden md:block" />
트렌디하게 즐기는 여상수
</h1>

{/* 🔸 서브 카피도 반투명 배경으로 가독성 업 */}
<p className="inline-block max-w-3xl text-white/95 text-sm md:text-base bg-black/35 px-3 py-2 rounded-md">
매장 운영 경험이 없어도 가능한 동선·공정 설계. 리모델링 기반의 실속형 창업 모델을 소개합니다.
</p>
<div className="w-full" />
<a
href="#edge"
className="inline-block mt-6 px-5 py-3 rounded-full bg-[#e36f33] text-white font-semibold hover:bg-[#c6541d] transition"
>
초보자에게 여상수를 추천하는 이유
</a>
</motion.div>
</div>
</Shell>
</header>

{/* ABOUT 섹션 */}
<Section
id="about"
title="브랜드 소개"
subtitle="핵심은 단일공정·원가율·빠른 회전율"
bg={BG.about}
overlay=""
>
<div className="grid md:grid-cols-2 gap-8 items-center">
<motion.div
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>
<img
src="/images/about-photo.jpg"
alt="대표"
className="w-full rounded-xl border border-[#e5dccf] shadow object-cover"
/>
</motion.div>

<motion.div
className="space-y-4"
initial={{ opacity: 0, x: 40 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.15 }}
>
<p className="leading-7 text-[#3b342c]">
여상수는 2023년 안양에서 시작된 안동식양념소갈비 전문 브랜드입니다.<br />
가맹사업을 시작하여 현재 8개이상의 가맹점이 활발히 영업 중입니다.<br />
양념소갈비, 남녀노소에게 모두 사랑받는 메뉴로<br />
쉬운 운영과 최적화된 동선으로 누구나 쉽게 운영가능하며<br />
어려운 시기에도 생존할 수 있는 강한 브랜드입니다.
</p>
<ul className="list-disc ml-5 text-sm text-[#6b6255] space-y-2">
<li>동일 품질을 위한 표준 레시피와 공급망</li>
<li>인건비 최소화 및 운영최적화 구조로 안정적인 수익</li>
<li>리모델 중심의 초기 투자 절감 전략</li>
</ul>
</motion.div>
</div>
</Section>

{/* EDGE 섹션: 별도의 섹션 대신 첫 번째 ReasonBand에 제목/부제목을 포함하여 출력합니다. */}
{/* 앵커 역할을 위한 div를 추가합니다. */}
<div id="edge" className="block -mt-20 pt-20" />
{REASONS.map((r, i) => (
<ReasonBand
key={r.num}
r={r}
flip={i % 2 === 1}
header={
i === 0
? {
title:"경쟁력",
subtitle: <span className="text-white">
전통방식으로 조리? 특제 육수와 특제 소스? 정성을 다해서 끓이는 노력?<br />
이런 건 어디든지 다 하는 겁니다.<br />
화려한 미사여구는 빼고 담백하게 창업자가 알아야 할<br />
진짜 여상수의 장점을 알려드립니다.</span>,                
}
: undefined
}
/>
))}

{/* PROFIT 섹션 */}
<Section
id="profit"
title="월 평균 수익률"
subtitle="예상 수익 구조를 가시화한 표"
bg={BG.profit}
overlay=""
titleClass=""
textClass=""
>
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="flex justify-center">
<Donut valuePercent={42} />
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<tbody>
{PROFIT.map((row) => (
<tr key={row.k} className="border-b border-[#e5dccf]">
<td className="py-3 pr-4 font-medium text-[#3b342c]">
{row.k}
</td>
<td className="py-3 pl-4 text-right tabular-nums whitespace-nowrap text-[#2b2b2b]">
{row.v}
</td>
</tr>
))}
</tbody>
</table>
<p className="text-xs text-[#6b6255] mt-3">
* 예시는 가맹점 평균이 아닌 시뮬레이션 수치이며, 상권/운영에 따라 변동합니다.
</p>
</div>
</div>
</Section>

{/* COST 섹션 */}
<Section
id="cost"
title="창업비용"
subtitle="소프트웨어 비용은 고정이며, 하드웨어는 현장 상황에 따라 변동"
bg={BG.cost}
overlay="bg-gradient-to-b from-black/60 via-black/40 to-black/10 backdrop-blur-[2px]"
titleClass=""
textClass="text-white/90"
>
{/* 섹션 전체를 흰 글자 + 반투명 카드로 감싸기 */}
<div className="grid md:grid-cols-2 gap-8 text-white">
<div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
<h4 className="font-semibold mb-3 text-white">소프트웨어</h4>
<ul className="space-y-2 text-sm">
{COST_SOFT.map((c) => (
<li
key={c.k}
className="flex justify-between border-b border-white/20 py-2 text-white/90"
>
<span>{c.k}</span>
<span className="tabular-nums">{c.v}</span>
</li>
))}
</ul>
</div>

<div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
<h4 className="font-semibold mb-3 text-white">하드웨어(실비)</h4>
<ul className="space-y-2 text-sm">
{COST_HARD.map((c) => (
<li
key={c.k}
className="flex justify-between border-b border-white/20 py-2 text-white/90"
>
<span>{c.k}</span>
<span className="tabular-nums">{c.v}</span>
</li>
))}
</ul>
</div>
</div>

<div className="mt-6 bg-black/40 backdrop-blur-sm p-4 border border-white/20 rounded-xl text-sm text-white/80">
같은 컨셉이라도 리모델링 범위나 공실 여부에 따라 총비용이 달라집니다. 현장 실측 후 상세 견적을 제공합니다.
</div>
</Section>

{/* CASES 섹션 */}
<Section
id="cases"
title="BEFORE → AFTER"
subtitle="실제 리모델링 사례"
bg={BG.cases}
overlay=""
titleClass=""
textClass=""
>
<div className="space-y-12">
{CASES.map((c, i) => (
<motion.div
key={c.name}
className="grid md:grid-cols-2 gap-6"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: i * 0.15 }}
>
<div>
<img
src={c.before}
alt={`${c.name} before`}
className="w-full h-[360px] md:h-[420px] object-cover rounded-xl shadow border border-[#e5dccf]"
/>
</div>
<div>
<img
src={c.after}
alt={`${c.name} after`}
className="w-full h-[360px] md:h-[420px] object-cover rounded-xl shadow border border-[#e5dccf]"
/>
                               <div className="mt-4 p-4 rounded-xl bg-[#f5f0e8] border border-[#e5dccf] shadow-md">
  <h4 className="font-semibold text-[#2b2b2b]">{c.name}</h4>
  <p className="text-sm text-[#4a4339] mt-1">{c.memo}</p>
  <p className="text-sm text-[#6b6255] mt-1">{c.total}</p>
</div>
</div>
</motion.div>
))}
</div>
</Section>

{/* PROCESS 섹션 */}
<Section
id="process"
title="창업 절차"
bg={BG.process}
overlay="bg-gradient-to-b from-black/80 via-black/60 to-black/40"
titleClass=""
textClass="text-white drop-shadow-md"
>
<ol className="flex flex-wrap gap-5">
{[
"상담/상권 검토",
"현장 실측/견적",
"계약/일정 확정",
"조리/운영 교육",
"시범 운영/오픈",
].map((step, i) => (
<li
key={step}
className="inline-flex items-center gap-4 px-6 py-4
                  rounded-2xl bg-black/55 backdrop-blur-sm
                  ring-1 ring-white/20 shadow-md w-fit"
>
<span className="grid place-items-center w-10 h-10 md:w-12 md:h-12
                        rounded-full bg-[#e36f33] text-white
                        text-base md:text-lg font-extrabold shrink-0">
{i + 1}
</span>
<span className="text-lg md:text-xl font-semibold text-white whitespace-nowrap">
{step}
</span>
</li>
))}
</ol>
</Section>


{/* CONTACT 섹션 */}
<Section
id="contact"
title="문의"
subtitle="연락 주시면 24시간 이내에 회신합니다."
bg={BG.contact}
overlay=""
>
<form
action="https://formspree.io/f/xzzvwlna"
method="POST"
acceptCharset="UTF-8"
className="grid gap-4 w-full"
>
<div className="grid md:grid-cols-3 gap-4">
<input
name="name"
required
placeholder="이름"
className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full"
/>
<input
name="phone"
required
placeholder="연락처"
className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full"
/>
<input
name="area"
placeholder="희망 상권/지역"
className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full"
/>
</div>
<textarea
name="msg"
placeholder="문의 내용"
className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full"
rows={6}
/>
{/* Formspree hidden fields */}
<input type="hidden" name="_subject" value="[여상수 문의]" />
<input
type="text"
name="_gotcha"
className="hidden"
tabIndex={-1}
autoComplete="off"
/>
<div className="flex justify-end">
<button
type="submit"
className="border border-[#d9cfbc] rounded-xl px-6 py-3 font-semibold bg-white/80 hover:bg-white transition text-sm w-full md:w-auto"
>
문의 보내기
</button>
</div>
</form>
</Section>

{/* 푸터 */}
<footer className="border-t border-[#e5dccf]">
<Shell>
<div className="py-10 text-sm text-[#6b6255] flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div>
<div className="font-semibold text-[#1f1a14]">{BRAND.name}</div>
<div className="opacity-80">{BRAND.address}</div>
<div className="opacity-80 mt-1">대표번호: {BRAND.phone}</div>
<div className="opacity-80">이메일: {BRAND.email}</div>
<div className="opacity-80 text-xs">사업자등록번호: {BRAND.bizno}</div>
</div>
<div className="flex gap-6">
<a href="#" className="hover:opacity-70">
이용약관
</a>
<a href="#" className="hover:opacity-70">
개인정보처리방침
</a>
</div>
</div>
</Shell>
</footer>

{/* 고정 CTA 버튼 */}
<a
href="#contact"
className="fixed bottom-6 right-6 bg-[#1f1a14] text-white px-4 py-3 rounded-full shadow-lg text-sm hover:bg-black/85 transition"
>
지금 문의하기
</a>
</div>
);
}
