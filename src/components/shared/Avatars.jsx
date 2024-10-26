import { AvatarImage, Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

export const Avatars = ({ image, alt, label }) => {
  //   console.log(image);
  return (
    <div className="flex flex-1 gap-1 justify-center items-center p-2">
      <Avatar>
        <AvatarImage
          src={image}
          alt={alt}
          className=" w-14 sm:w-12 rounded-lg"
        />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <label className="text-md">{label}</label>
    </div>
  );
};
