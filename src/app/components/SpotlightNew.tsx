"use client";

import React from "react";
import { Spotlight } from "./spotlight-new";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { AnimatedGradientTextDemo } from "./AnimatedGradientTextDemo";
import { AnimatedShinyTextDemo } from "./AnimatedShinyTextDemo";

export function SpotlightNew() {
  return (
    <div className="h=screen w-full flex justify-center" >
      <AnimatedGradientTextDemo />
      <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="p-4 mx-auto relative z-10 w-full pt-20 px-10 md:pt-0 flex justify-between">
          <div className="w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Stablecoin for <br /> Global Payments.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-start">
            Power instant global transfers with a single integration.
            Grow more, pay less, move faster.
            </p>
            <AnimatedShinyTextDemo />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <TextRevealCardPreview />
          </div>
        </div>
      </div>
    </div>
  );
}