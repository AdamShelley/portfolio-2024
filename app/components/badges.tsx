import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  badges: string[];
};

const Badges = ({ badges }: Props) => {
  return (
    <div className="">
      {badges.map((badge) => (
        <Badge
          key={badge}
          variant="outline"
          className="mr-2 text-xs text-semibold dark:text-white dark:bg-gray-800 bg-gray-100"
        >
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default Badges;
