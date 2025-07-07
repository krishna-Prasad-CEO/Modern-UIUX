"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";

type AnimatedPinDemoProps = {
  title: string;
  link: string;
  source: string;
};

export function AnimatedPinDemo({ title, link, source }: AnimatedPinDemoProps) {
  return (
    <div className="flex items-center justify-center m-5">
      <PinContainer title={link} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 "></span>
          </div>
          <img
            src={source}
            alt={title}
            className="w-full h-full object-fit rounded"
          />
        </div>
      </PinContainer>
    </div>
  );
}
