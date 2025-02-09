import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import { CompareDemo } from "./CompareDemo";
import { SparklesText } from "./ui/sparkles-text";

export function Payroll() {
  return (
    <div className="bg-neutral-950 h-screen w-full">
      <div className="flex justify-center ">
        <span>
          <h1>
            <SparklesText
              text="Process payments 24/7, anywhere."
              className="text-white text-5xl font-semibold"
            />
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center ml-40">
            Enable <span className="font-bold text-neutral-100">instant</span>{" "}
            settlements and expand your global reach. We take care of the
            compliance and tech.
          </p>
        </span>
      </div>
      <div className="bg-neutral-950 grid grid-cols-2 gap-8 p-10 w-11/12 mx-auto h-[calc(100vh-110px)]">
        <div className="bg-neutral-950 rounded-lg h-full w-full">
          <CompareDemo />
        </div>

        <div className="flex flex-col justify-center items-center h-full rounded-lg">
          <p className="text-neutral-300 text-sm px-14 font-medium mt-14 leading-relaxed tracking-wide text-center">
            Connect any <span className="font-bold text-neutral-100">blockchain </span> wallet, get real-time quotes and enjoy low
            fees for a smooth user experience.
          </p>
          <AnimatedBeamDemo />
        </div>
      </div>
    </div>
  );
}
