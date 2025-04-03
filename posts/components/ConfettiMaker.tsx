"use client";

import { Button } from "@/components/ui/button";
import { useReward } from "react-rewards";

const confettiConfig = {
  decay: 0.93,
  spread: 150,
  elementCount: 150,
};

const suggestions = [
  { id: 1, value: "apple" },
  { id: 2, value: "banana" },
  { id: 3, value: "cherry" },
  { id: 4, value: "date" },
  { id: 5, value: "elderberry" },
];

export default function ConfettiMaker() {
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    ...confettiConfig,
    angle: 270,
  });
  const { reward: reward2 } = useReward("rewardId2", "confetti", {
    ...confettiConfig,
    angle: 0,
  });
  const { reward: reward3 } = useReward("rewardId3", "confetti", {
    ...confettiConfig,
    angle: 90,
  });
  const { reward: reward4 } = useReward("rewardId4", "confetti", {
    ...confettiConfig,
    angle: 180,
  });

  const confettiTime = () => {
    reward();
    setTimeout(() => {
      reward2();
    }, 500);

    setTimeout(() => {
      reward3();
    }, 1000);

    setTimeout(() => {
      reward4();
    }, 1500);
  };

  return (
    <div className="relative flex align-center justify-center">
      <span id="rewardId" className="fixed top-0  " />
      <span id="rewardId2" className="fixed left-0 top-1/4" />
      <span id="rewardId3" className="fixed bottom-0 left-1/2" />
      <span id="rewardId4" className="fixed top-1/4" style={{ right: 0 }} />
      <Button
        disabled={isAnimating}
        onClick={confettiTime}
        className="my-10"
        variant="confetti"
      >
        Click me
      </Button>
    </div>
  );
}
