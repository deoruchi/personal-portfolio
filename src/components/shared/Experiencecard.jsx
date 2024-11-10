import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
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
  return (
    <Card className="w-[100%] lg:w-[500px] p-4 border border-black">
      <CardTitle>{name}</CardTitle>
      {/* Use CardContent for better structure */}
      <CardContent className="pl-0">
        <CardDescription className=" flex flex-row justify-between items-center gap-1">
          <div>{role}</div>
          <div className="flex flex-row items-center gap-1">
            <Calendar className="w-3" />
            <p>{timeline}</p>
          </div>
        </CardDescription>
      </CardContent>
      <div className="p-0 text-gray-700">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold">Project:</span>
          <span className="text-sm">{proj_nm}</span>
        </div>
        <div>
          <ul>
            {resp?.map((items, id) => (
              <li className="mx-6 list-disc text-sm text-slate-500" key={id}>
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap flex-1 items-center gap-2 m-2">
          {skills?.map((items, id) => (
            <Badge variant="outline" key={id}>
              {items}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
