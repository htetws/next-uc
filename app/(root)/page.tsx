import Carousel from "./_components/carousel";
import Body from "./_components/body";

const RootPage = () => {
  const images = [
    "https://seagm-media.seagmcdn.com/activity/pubg20240611_w.jpg",
    "https://seagm-media.seagmcdn.com/activity/HonorofKings20240619_w.jpg",
    "https://seagm-media.seagmcdn.com/activity/Brawlstars20240621_w.jpg",
    "https://seagm-media.seagmcdn.com/activity/GlobalSEAGMCard20240524_w.jpg",
    "https://seagm-media.seagmcdn.com/activity/pubg20240611_w.jpg",
    "https://seagm-media.seagmcdn.com/activity/steam20240702_w.jpg",
  ];
  return (
    <div className="flex-1 w-[95%] mt-3 lg:w-[75%] mx-auto">
      <Carousel images={images} />
      <Body />
    </div>
  );
};

export default RootPage;
