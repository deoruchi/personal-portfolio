import React from "react";
import { Avatars } from "./Avatars";

import Tailwind from "/assets/icons/Tailwind.png";
import Css from "/assets/icons/Css-3.png";
import Html from "/assets/icons/Html.png";
import JavaScript from "/assets/icons/Js.png";
import Node from "/assets/icons/Node.png";
import ReactIcon from "/assets/icons/Library.png";

export const Skills = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 bg-white flex flex-row flex-1  items-center justify-center rounded-lg mt-6 ">
      <div className="flex flex-1 p-2 gap-y-4 items-center justify-center shadow-lg rounded-md overflow-x-auto">
        <Avatars image={Html} label="Html" alt="html icon" />
        <Avatars image={Css} label="Css" alt="css icon" />
        <Avatars image={JavaScript} label="Javascript" alt="Javascript icon" />
        <Avatars image={Node} label="Node" alt="Node icon" />
        <Avatars image={ReactIcon} label="React" alt="React icon" />
        <Avatars image={Tailwind} label="Tailwind" alt="Tailwind icon" />
      </div>
    </div>
  );
};
