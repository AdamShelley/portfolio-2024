import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  badges: string[];
};

const Badges = ({ badges }: Props) => {
  return (
    <div className="mb-10 mt-10">
      {badges.map((badge) => (
        <Badge
          key={badge}
          variant="skill"
          className="mr-2 mt-1 text-[11px] font-normal rounded-sm"
        >
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default Badges;
