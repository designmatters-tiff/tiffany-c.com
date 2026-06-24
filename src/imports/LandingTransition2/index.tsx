import imgNoisyGradients from "./7e24109bcd9a8ce8e2da86d2a7818871291daeb7.png";
import imgNoisyGradients1 from "./148c47bb0e78a60d80d2cbf6bfd32fa7dfc8c343.png";

function BgGradient() {
  return (
    <div className="absolute contents h-[1492.407px] left-[-38.38px] top-[-182px] w-[1590.998px]" data-name="bg gradient">
      <div className="absolute flex h-[1492.407px] items-center justify-center left-[-38.38px] top-[-182px] w-[1590.998px]">
        <div className="flex-none rotate-[0.46deg]">
          <div className="h-[1479.693px] opacity-47 relative w-[1579.091px]" data-name="noisy-gradients">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgNoisyGradients} />
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[102.78%] left-[0.34%] max-w-none top-[8.47%] w-[96.31%]" src={imgNoisyGradients1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-38.38px] top-[-182px]">
      <BgGradient />
    </div>
  );
}

export default function LandingTransition() {
  return (
    <div className="bg-white relative size-full" data-name="Landing transition 2">
      <Group />
      <p className="[word-break:break-word] absolute font-['Avenir:Light',sans-serif] h-[152px] leading-[normal] left-[539px] not-italic text-[#b2933b] text-[36px] top-[182px] w-[574px]">I connect strategy to craft.</p>
    </div>
  );
}