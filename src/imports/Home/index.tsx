import svgPaths from "./svg-ispmz5n1jc";
import imgNoisyGradients from "./7e24109bcd9a8ce8e2da86d2a7818871291daeb7.png";
import imgNoisyGradients1 from "./148c47bb0e78a60d80d2cbf6bfd32fa7dfc8c343.png";

function BgGradient() {
  return (
    <div className="absolute contents h-[1079px] left-[283px] top-[-43px] w-[1167px]" data-name="bg gradient">
      <div className="absolute flex h-[1066.876px] items-center justify-center left-[283px] top-[-36.44px] w-[1134.695px]">
        <div className="flex-none rotate-90">
          <div className="h-[1134.695px] opacity-47 relative w-[1066.876px]" data-name="noisy-gradients">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgNoisyGradients} />
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[122.08%] left-[-14.97%] max-w-none top-[-23.97%] w-[129.88%]" src={imgNoisyGradients1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1079px] items-center justify-center left-[301.44px] top-[-43px] w-[1148.557px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-gradient-to-r from-black h-[1148.557px] opacity-47 relative to-[92.578%] to-[rgba(0,0,0,0)] w-[1079px]" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[283px] top-[-43px]">
      <BgGradient />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[8px] relative shrink-0 w-full">
      <div className="absolute inset-[-12.5%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 9">
          <g id="Frame 1410104912">
            <line id="Line 1" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" x1="0.5" x2="21.5" y1="0.5" y2="0.5" />
            <line id="Line 3" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" x1="0.5" x2="21.5" y1="8.5" y2="8.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[16px] items-center relative shrink-0"}>
      <div className="content-stretch flex flex-col h-[14px] items-start justify-center relative shrink-0 w-[22px]">
        <Frame3 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Museo:500',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">About Tiff</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[49px]">
      <div className="[word-break:break-word] flex flex-col font-['Museo:500',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Work</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[172px] items-center relative shrink-0">
      <Frame4 />
      <Frame1 />
      <p className="[word-break:break-word] font-['Museo:500',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">{`Award & Speaking`}</p>
      <p className="[word-break:break-word] font-['Museo:500',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Coaching</p>
      <p className="[word-break:break-word] font-['Museo:500',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Connect</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[63px] items-start justify-center left-[10px] p-[10px] top-[958px] w-[1440px]">
      <Frame />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute bg-[#222] h-[1033px] left-[283px] top-[-3px] w-[1157px]" />
      <Group />
      <div className="absolute h-[98px] left-[100px] overflow-clip top-[178px] w-[70px]" data-name="tifflogo">
        <div className="absolute inset-[9.41%_45.45%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.1882 88.7741">
            <path d={svgPaths.p3b2807c0} fill="var(--fill-0, #B2933B)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[-0.01%_0_0_48.2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.2629 98.0067">
            <path d={svgPaths.pc888500} fill="var(--fill-0, #B2933B)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.05%_39.69%_14.73%_46.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.82344 66.8563">
            <path d={svgPaths.p36abcd80} fill="var(--fill-0, #B2933B)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[1052px] top-[904px] w-[248px]">
        <div className="absolute inset-[-7.36px_-0.4%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 249 14.7279">
            <path d={svgPaths.p399dcf40} fill="var(--stroke-0, #B2933B)" id="Arrow 15" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Avenir:Light',sans-serif] inset-[17.38%_27.01%_47.85%_33.13%] leading-[normal] not-italic text-[#e3c85c] text-[36px] whitespace-pre-wrap">
        I connect strategy to craft.
        <br aria-hidden />
        <br aria-hidden />I shape design functions and lead teams that build products from fintech to retail to SaaS, where clarity touches million lives.
      </p>
      <Frame2 />
    </div>
  );
}