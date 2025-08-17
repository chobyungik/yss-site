"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

/*
  평상집 스타일의 랜딩 페이지(사진은 공백 처리)

  - 섹션별 배경 사진을 지정할 수 있게 구성했습니다. 이미지 파일은 /public/images 아래에 두고
    BG 객체에서 경로만 지정하면 됩니다. 개발/배포 시 적절한 경로로 교체하세요.
  - 흰색 오버레이를 덧씌워 텍스트 가독성을 높였고, 모든 글씨 색상은 #222로 통일했습니다.
  - 네비게이션 바는 스크롤 시 상단에 고정되며, 좌측 로고 클릭 시 HOME(#home)으로 이동합니다.
  - 필요한 섹션(경쟁력, 수익률, 비용, 사례, 절차, FAQ, 문의)을 모두 포함했습니다. 원치 않는 섹션은 제거 가능.
  - 프레이머 모션을 사용해 섹션이 화면에 나타날 때 부드러운 애니메이션을 적용했습니다.
*/

// 브랜드 정보 및 네비게이션
const BRAND = {
  name: "여상수",
  tagline: "할머니의 손맛 그대로, 안동식 양념 소갈비를 트렌디하게 즐기는 여상수",
  phone: "010-8230-0800",
  address: "경기도 안양시 삼덕로 80-1, 1층 여상수",
  bizno: "181-41-01276",
  email: "contact@example.com",
  logoSrc: "/images/logo.png", // 로고 파일명
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

// 경쟁력(이유) 데이터: 홀수 index는 세로 분할 이미지, 짝수 index는 섹션 전체 배경으로 처리
const REASONS = [
  {
    num: "01",
    title: "1인 운영 구조",
    desc: `양념갈비살, 양념갈반입살, 한우대창, 청정특양 등.
여러 부위의 소고기이지만 같은 양념 비율과
조리 방식만 다를 뿐 사실상 단일 메뉴인 셈입니다.
공정이 다른 메뉴들이 많으면 인력을 많이 써야 하지만,
여상수는 사실상 단일 메뉴를 숙달해서 조리를 하기 때문에
완성도는 높지만 주방에 혼자서 일하는 게 가능합니다.`,
    img: "/images/reason1.jpg",
  },
  {
    num: "02",
    title: "안정 객단가",
    desc: "양념 + 소고기 중심으로 적은 테이블에서도 안정적인 매출을 기대할 수 있습니다.",
    img: "/images/reason2.jpg",
  },
  {
    num: "03",
    title: "원가율 관리",
    desc: "핵심 식자재 직공급으로 목표 원가율을 35% 내외로 유지합니다.",
    img: "/images/reason3.jpg",
  },
  {
    num: "04",
    title: "리모델링 창업",
    desc: "기존 매장 전환 시 리모델링을 통해 파격적으로 금액 절감가능합니다.",
    img: "/images/reason4.jpg",
  },
  {
    num: "05",
    title: "매뉴얼화",
    desc: "초보자도 가능한 조리·서비스 매뉴얼을 제공합니다.",
    img: "/images/reason5.jpg",
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
  { k: "가맹비", v: "10,000,000" },
  { k: "교육비", v: "5,000,000" },
  { k: "브랜딩/설계", v: "5,000,000 ~ 7,000,000" },
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


// 섹션별 배경 이미지 경로: 필요 시 실제 이미지 파일명으로 교체하세요.
const BG = {
  hero: "/images/hero.jpg",
  about: "/images/bg-about.jpg",
  edge: "/images/bg-edge.jpg",
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
  - id: 앵커 링크용 id
  - title, subtitle: 제목/부제목
  - children: 섹션 내부 콘텐츠
  - bg: 배경 이미지 경로
  - overlay: 오버레이 클래스명(default: bg-white/60 backdrop-blur)
  - fixed: true면 배경 고정(parallax)
*/
function Section({
  id,
  title,
  subtitle,
  children,
  bg,
  overlay = "bg-white/60 backdrop-blur",
  fixed = true,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  bg?: string;
  overlay?: string;
  fixed?: boolean;
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
        <div className={`absolute inset-0 -z-10 ${fixed ? "bg-fixed" : ""}`}>
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute inset-0 ${overlay}`} />
        </div>
      )}
      <Shell>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        {subtitle && (
          <p className="mb-8 text-[#6b6255] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </Shell>
    </motion.section>
  );
}

/* 도넛 차트를 그리는 컴포넌트
   - valuePercent: 수익률(0~100) */
function Donut({ valuePercent }: { valuePercent: number }) {
  // 비율에 따라 도넛의 길이를 계산합니다. stroke-dasharray 사용
  const dash = `${valuePercent} ${100 - valuePercent}`;
  return (
    <svg viewBox="0 0 42 42" width="220" height="220" aria-label="profit donut">
      <circle cx="21" cy="21" r="15.915" fill="#fff" />
      {/* 회색 배경 링 */}
      <circle
        cx="21"
        cy="21"
        r="15.915"
        fill="transparent"
        stroke="#eee"
        strokeWidth="6"
      />
      {/* 데이터 비율 */}
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

/* 메인 페이지 컴포넌트 */
export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#222]">
      {/* 네비게이션 바 */}
      <div className="sticky top-0 z-50 bg-[#f4efe7]/80 backdrop-blur border-b border-[#e5dccf]">
        <Shell>
          <nav className="h-16 md:h-20 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <img
                src={BRAND.logoSrc}
                alt={`${BRAND.name} 로고`}
                className="h-12 md:h-14 lg:h-16 w-auto object-contain shrink-0"
              />
            </a>
            {/* 데스크탑 메뉴 */}
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
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <Shell>
          <div className="relative h-[80vh] flex items-center">
           <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* 주황 라벨(작게) */}
  <p className="uppercase tracking-widest text-xs mb-3 text-[#e36f33]">
    성공창업의 동반자
  </p>

  {/* 메인 타이틀: 전부 하얀색 + 동일 크기 */}
  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow">
    할머니의 손맛 그대로, 안동식 양념 소갈비를
    <br className="hidden md:block" />
    트렌디하게 즐기는 여상수
  </h1>

  {/* 설명 문구: 전처럼 하얀색 */}
  <p className="max-w-3xl text-white/90 text-sm md:text-base">
    매장 운영 경험이 없어도 가능한 동선·공정 설계. 리모델링 기반의 실속형 창업 모델을 소개합니다.
  </p>

  <a
    href="#edge"
    className="inline-block mt-6 px-5 py-3 rounded-full bg-[#e36f33] text-white font-semibold hover:bg-[#c6541d] transition"
  >
    초보자들에게 여상수를 추천하는 이유
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
        overlay="bg-white/65 backdrop-blur"
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about-photo.jpg"
              alt="대표"
              className="w-full rounded-2xl shadow border border-[#e5dccf]"
            />
          </motion.div>
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="leading-7 text-[#3b342c]">
              여상수는 2023년 안양에서 시작된 안동식양념소갈비 전문 브랜드입니다.
              가맹사업을 시작하여 현재 8개이상의 가맹점이 활발히 영업 중입니다. 양념소갈비, 남녀노소에가 모두 사랑받는 메뉴로
              쉬운 운영과 최적화된 동선으로 누구나 쉽게 운영가능하며 어려운 시기에도 생존할 수 있는 강한 브랜드입니다. 
            </p>
            <ul className="list-disc ml-5 text-sm text-[#6b6255] space-y-2">
              <li>동일 품질을 위한 표준 레시피와 공급망</li>
              <li>인건비 최소화 구조로 비수기 완충</li>
              <li>리모델 중심의 초기 투자 절감 전략</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* EDGE(경쟁력) 섹션 */}
      <Section
        id="edge"
        title="경쟁력"
        subtitle="초보 창업자들에게 여상수를 권하는 5가지 이유"
        bg={BG.edge}
        overlay="bg-white/55 backdrop-blur"
      >
        {/* 경쟁력 목록: 이미지가 있는 항목과 배경 전체 이미지 항목을 구분합니다. */}
        <div className="space-y-24">
    {REASONS.map((r, i) => (
      <div
        key={r.num}
        className={`flex flex-col md:flex-row items-center gap-10 ${
          i % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* 이미지 */}
        <div className="md:w-1/2">
          <img
            src={r.img}
            alt={`이유 ${r.num} ${r.title}`}
            className="w-full rounded-xl border border-[#e5dccf] shadow object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 텍스트 */}
        <div className={`md:w-1/2 space-y-3 ${i % 2 === 1 ? "md:pr-6" : "md:pl-6"}`}>
          <span className="inline-block bg-[#e36f33] text-white text-xs font-bold rounded-full px-3 py-1">
            이유 {r.num}
          </span>
          <h3 className="text-2xl font-semibold text-[#2b2b2b]">{r.title}</h3>
          <p className="text-[#4a4339] leading-6">{r.desc}</p>
        </div>
      </div>
    ))}
  </div>
      </Section>

      {/* PROFIT 섹션 */}
      <Section
        id="profit"
        title="월 평균 수익률"
        subtitle="예상 수익 구조를 가시화한 표"
        bg={BG.profit}
        overlay="bg-white/70 backdrop-blur"
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
                    <td className="py-3 pl-4 text-right tabular-nums whitespace-nowrap text-[#2b2b2b]">{row.v}</td>
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
        overlay="bg-white/75 backdrop-blur"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-[#2b2b2b]">소프트웨어</h4>
            <ul className="space-y-2 text-sm">
              {COST_SOFT.map((c) => (
                <li
                  key={c.k}
                  className="flex justify-between border-b border-[#e5dccf] py-2 text-[#3b342c]"
                >
                  <span>{c.k}</span>
                  <span>{c.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[#2b2b2b]">하드웨어(실비)</h4>
            <ul className="space-y-2 text-sm">
              {COST_HARD.map((c) => (
                <li
                  key={c.k}
                  className="flex justify-between border-b border-[#e5dccf] py-2 text-[#3b342c]"
                >
                  <span>{c.k}</span>
                  <span>{c.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white/80 border border-[#e5dccf] rounded-xl text-sm text-[#4a4339] backdrop-blur">
          같은 컨셉이라도 리모델링 범위나 공실 여부에 따라 총비용이 달라집니다. 현장 실측 후 상세 견적을 제공합니다.
        </div>
      </Section>

      {/* CASES 섹션 */}
      <Section
        id="cases"
        title="BEFORE → AFTER"
        subtitle="실제 리모델링 사례"
        bg={BG.cases}
        overlay="bg-white/80 backdrop-blur"
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
                <div className="mt-4 p-4 border border-[#e5dccf] rounded-xl bg-white/80 backdrop-blur">
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
        overlay="bg-white/80 backdrop-blur"
      >
       {/* PROCESS 섹션 내부 교체 */}
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
      className="rounded-2xl border border-[#e5dccf] bg-white/85 backdrop-blur px-6 py-5 shadow-sm
                 flex items-center gap-3 min-w-[300px]"
    >
      <span className="grid place-items-center w-8 h-8 rounded-full bg-[#e36f33] text-white text-sm font-bold shrink-0">
        {i + 1}
      </span>
      <span className="text-base md:text-lg font-semibold text-[#1f1a14] whitespace-nowrap">
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
  overlay="bg-white/65 backdrop-blur"
>
  {/* 폼: 전체 폭 + 데스크톱에서 가로 3분할 */}
 <form
  action="https://formspree.io/f/xzzvwlna"  // ← Formspree 대시보드에서 복사한 ID로 교체
  method="POST"
  acceptCharset="UTF-8"
  className="grid gap-4 w-full"
>
  {/* 1줄 3칸 */}
  <div className="grid md:grid-cols-3 gap-4">
    <input name="name"  required placeholder="이름"
           className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full" />
    <input name="phone" required placeholder="연락처"
           className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full" />
    <input name="area"  placeholder="희망 상권/지역"
           className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full" />
  </div>

  {/* 내용 */}
  <textarea name="msg" placeholder="문의 내용"
            className="border border-[#e0d6c4] rounded-lg px-3 py-2 bg-white text-sm w-full"
            rows={6} />

  {/* 옵션: 제목 / 스팸 방지(봇용 숨김 필드) */}
  <input type="hidden" name="_subject" value="[여상수 문의]" />
  <input type="text"   name="_gotcha"  className="hidden" tabIndex={-1} autoComplete="off" />

  <div className="flex justify-end">
    <button type="submit"
            className="border border-[#d9cfbc] rounded-xl px-6 py-3 font-semibold bg-white/80 hover:bg-white transition text-sm w-full md:w-auto">
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
        <a href="#" className="hover:opacity-70">이용약관</a>
        <a href="#" className="hover:opacity-70">개인정보처리방침</a>
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
