import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 absolute flex min-h-64 items-center justify-center">
      <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Backed by
          </span>
        <img 
        src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-tile.svg" 
        width={25} 
        height={25}  
        alt="Y" 
        className="pl-2"
        />

        <span className="text-orange-500 pl-2" >Combinator (W25)</span>

        {/* <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "} */}
        <ChevronRight className="ml-1 text-white size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
