import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  badges: string[] | string;
};

const Badges = ({ badges }: Props) => {
  const badgeList = Array.isArray(badges)
    ? badges
    : typeof badges === "string"
      ? badges.split(",").map((b) => b.trim())
      : [];
  return (
    <div className="mb-10 mt-10">
      {badgeList.map((badge) => (
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
