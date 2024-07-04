import Exclusive from "@/app/(root)/_components/body-items/exclusive";
import GameCard from "@/app/(root)/_components/body-items/game-card";
import NewPromo from "@/app/(root)/_components/body-items/new-promo";
import { exclusive as data } from "@/utils/constants/exclusive";
import { news, games } from "@/utils/constants/news";

const Body = () => {
  return (
    <div className="flex flex-col my-6 space-y-6">
      {/* Exclusive offers */}
      <Exclusive data={data} />
      {/* Game's card */}
      <GameCard games={games} />
      {/* News & promotions */}
      <NewPromo news={news} />
    </div>
  );
};

export default Body;
