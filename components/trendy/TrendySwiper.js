import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../data/products";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import TrendyCard from "./TrendyCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TrendySwiper = () => {
  const { isDesktop } = useIsDesktop();
  const [trendy, setTrendy] = useState(products);

  return (
    <Box pt='12'>
      <Swiper
        slidesPerView={isDesktop ? 3 : 1}
        spaceBetween={10}
        loop={true}
        // loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        pagination={{ dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'>
        {products
          .filter((product) => product.status === "trendy")
          .map((product) => (
            <SwiperSlide key={product.id}>
              <TrendyCard {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default TrendySwiper;
