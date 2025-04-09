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
          className="mr-2 mt-1 text-[11px] font-normal dark:bg-teal-600/10 dark:text-teal-300/90 rounded-xs dark:border-teal-600 border-transparent rounded-sm"
        >
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default Badges;
