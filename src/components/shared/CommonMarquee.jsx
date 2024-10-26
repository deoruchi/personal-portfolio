import React from "react";

export const CommonMarquee = ({ text }) => {
  return (
    <div className="w-full bg-primary overflow-hidden py-2 bg-slate-100">
      <div className="relative flex whitespace-nowrap animate-marquee text-3xl font-thin text-black">
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
        <span className="mx-4 text-primary-foreground ">{text}</span>
      </div>
    </div>
  );
};
