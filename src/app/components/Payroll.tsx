import { GlobeDemo } from "./Globe";
import { SparklesText } from "./ui/sparkles-text";

export function Payroll() {
    return(
        <div className="bg-neutral-950 h-screen w-full">
            <div className="flex justify-center">
                <span>
                    <h1>
                        <SparklesText text="Process payments 24/7, anywhere." className="text-white text-5xl font-semibold" />
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center ml-40">
                        Enable <span className="font-bold text-neutral-100" >instant</span> settlements and expand your global reach. We take care of the compliance and tech.
                    </p>
                </span>
            </div>
            <div className="bg-neutral-950 grid grid-cols-2" >
                <div className="bg-neutral-900 rounded-lg m-10" ></div>
                <GlobeDemo />
            </div>
        </div>
    )
}