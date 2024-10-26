import React from "react";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
export const Main = () => {
  return (
    <main className="bg-image p-4 md:p-6 ml-2 mr-2 md:ml-4 md:mr-4 rounded-lg bg-no-repeat bg-cover">
      <Skills />
      <Projects />
    </main>
  );
};
