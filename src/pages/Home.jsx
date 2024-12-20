import React from "react";
import { Intro } from "../components/shared/Intro";
import { Header } from "../components/shared/Header";
import { Main } from "../components/shared/Main";
import { WorkExperienc } from "../components/shared/WorkExperienc.jsx";
import { Footer } from "../components/shared/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col gap-1 scroll-smooth snap-y snap-mandatory scroll-pt-0.5 p-4">
      <Header className="snap-always snap-start" />
      <Intro className="snap-always snap-start" />
      <Main className="snap-always snap-start" />
      <WorkExperienc className="snap-start" />

      <Footer />
    </div>
  );
};
