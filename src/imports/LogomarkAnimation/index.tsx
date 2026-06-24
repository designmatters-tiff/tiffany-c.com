import svgPaths from "./svg-kia4fc38q6";

function Frame() {
  return (
    <div className="h-[112px] relative shrink-0 w-[80px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 112">
        <g clipPath="url(#clip0_1_134)" id="Frame">
          <path d={svgPaths.p2282f000} fill="var(--fill-0, #B2933B)" id="Vector" />
          <path d={svgPaths.pf16c00} fill="var(--fill-0, #B2933B)" id="Vector_2" />
          <path d={svgPaths.p3af69f80} fill="var(--fill-0, #B2933B)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_134">
            <rect fill="white" height="112" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[775px] pb-[40px] top-[86px]">
      <Frame />
    </div>
  );
}

export default function LogomarkAnimation() {
  return (
    <div className="bg-white relative size-full" data-name="logomark animation">
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Regular',sans-serif] leading-[normal] left-[273px] not-italic text-[#b2933b] text-[40px] top-[138px] whitespace-nowrap">{`t `}</p>
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Regular',sans-serif] leading-[normal] left-[298px] not-italic text-[#b2933b] text-[40px] top-[138px] whitespace-nowrap">i</p>
      <p className="[word-break:break-word] absolute font-['Century_Gothic:Regular',sans-serif] leading-[normal] left-[318px] not-italic text-[#b2933b] text-[40px] top-[138px] whitespace-nowrap">f</p>
      <Frame1 />
      <div className="absolute h-0 left-[373px] top-[162px] w-[355px]">
        <div className="absolute inset-[-7.36px_-0.28%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 14.7279">
            <path d={svgPaths.p2bf35e00} fill="var(--stroke-0, #877E7E)" id="Arrow 11" />
          </svg>
        </div>
      </div>
    </div>
  );
}