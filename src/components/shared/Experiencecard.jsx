import React, { useId } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
export const Experiencecard = ({
  name,
  role,
  timeline,
  proj_nm,
  resp,
  skills,
}) => {
  const id = useId();
  return (
    <Card className=" w-[100%] lg:w-[500px] p-4 border-1 border-black" key={id}>
      <CardTitle>{name}</CardTitle>
      <CardDescription className="flex justify-between items-center space-y-1">
        <p>{role}</p>
        <p className="flex items-center gap-1 ">
          <Calendar className="w-3" />
          {timeline}
        </p>
      </CardDescription>
      <CardContent className="p-0 text-gray-700">
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold">Project:</p>
          <p className="text-sm ">{proj_nm}</p>
        </div>
        <ul>
          {resp?.map((items, id) => {
            return (
              <li className=" mx-6 list-disc text-sm text-slate-500" key={id}>
                {items}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap felx-1 items-center gap-2 mx-2">
          {skills?.map((items, id) => {
            return (
              <Button
                variant="outline"
                className="text-sm text-slate-600 font-semibold w-fit p-1  rounded-lg"
                key={id}
              >
                {items}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
