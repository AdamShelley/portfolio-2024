import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  badges: string[];
};

const Badges = ({ badges }: Props) => {
  return (
    <div className="mb-10">
      {badges.map((badge) => (
        <Badge
          key={badge}
          className="mr-2 text-[11px] font-normal dark:bg-teal-600/10 dark:text-teal-300/90"
        >
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default Badges;
