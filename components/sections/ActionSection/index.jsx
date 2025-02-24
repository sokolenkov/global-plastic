import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, ActionCard } from 'components';

const ActionSection = ({ data }) => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [centeredSlide, setCenteredSlide] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
      setCenteredSlide(true);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
      setCenteredSlide(true);
    } else {
      setSlidesPerView(3);
      setCenteredSlide(false);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const actionCards = data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <ActionCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="aktion">
      <div className="action__center">
        <h2 className="action__title">Latest News</h2>
        <div className="action__slider">
          <Swiper
            id="aktionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={centeredSlide}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {actionCards}
          </Swiper>
        </div>
        <div className="action__slider-nav">
          <SliderNav
            total={actionCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
