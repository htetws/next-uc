import Exclusive from "@/app/(root)/_components/body-items/exclusive";
import GameCard from "@/app/(root)/_components/body-items/game-card";
import NewPromo from "@/app/(root)/_components/body-items/new-promo";
import { exclusive as data } from "@/utils/constants/exclusive";

const Body = () => {
  const popular_game_card = [
    {
      id: 1,
      image: "https://seagm-media.seagmcdn.com/icon_400/758.jpg",
      title: "Mobile Legends Diamonds",
      region: "global",
    },
    {
      id: 2,
      image: "https://seagm-media.seagmcdn.com/icon_400/930.jpg",
      title: "PUBG Mobile UC (Global)",
      region: "global",
    },
    {
      id: 3,
      image: "https://seagm-media.seagmcdn.com/icon_400/1515.jpg",
      title: "Honor of Kings Tokens & Packages",
      region: "global",
    },
    {
      id: 4,
      image: "https://seagm-media.seagmcdn.com/icon_400/869.jpg",
      title: "Free Fire Diamonds",
      region: "global",
    },
    {
      id: 5,
      image: "https://seagm-media.seagmcdn.com/icon_400/758.jpg",
      title: "Mobile Legends Diamonds",
      region: "global",
    },
    {
      id: 6,
      image: "https://seagm-media.seagmcdn.com/icon_400/758.jpg",
      title: "Mobile Legends Diamonds",
      region: "global",
    },
  ];

  const games = [
    { label: "popular game card", data: popular_game_card },
    { label: "popular game top-up", data: popular_game_card },
    { label: "new game card", data: popular_game_card },
    { label: "new game top-up", data: popular_game_card },
  ];

  return (
    <div className="flex flex-col my-6 space-y-6">
      {/* Exclusive offers */}
      <Exclusive data={data} />
      {/* Game's card */}
      <GameCard games={games} />
      {/* News & promotions */}
      <NewPromo />
    </div>
  );
};

export default Body;
