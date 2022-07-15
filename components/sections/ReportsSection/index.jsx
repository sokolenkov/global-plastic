import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import viewAll from '../../../utils/viewAll'

import { SliderNav, ReportsCard, ReportsDropdown } from 'components';

const ReportsSection = ({data}) => {
  const regions = [...new Set(data.map(el => el.reportRegion))];
  const countries = [...new Set(data.map(el => el.reportCountry))];

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(1);
  const [reportRegion, setReportRegion] = useState(null);
  const [reportCountry, setReportCountry] = useState(null);
  const [isMobile, setMobile] = useState(false);

  const filterData = data.filter(el => reportRegion ? el.reportRegion === reportRegion : el)
                         .filter(el => reportCountry ? el.reportCountry === reportCountry : el);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 520) {
      setMobile(true);
    } else if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
      setMobile(false);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
      setMobile(false);
    } else if (typeof window !== 'undefined' && window.screen.width > 1200) {
      setSlidesPerView(3);
      setMobile(false);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const renderCards = filterData.map((item, index) => {
      return <ReportsCard key={index} data={item} />;
    });
 

  const renderSwiperCards = filterData.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <ReportsCard data={item} />
      </SwiperSlide>
    );
  });

  const transferData = (event, dropdownData, dropdownName) => {
    if(dropdownName === 'reportRegion') {
      setReportRegion(dropdownData[event.target.id] || null)
    } 
    if(dropdownName === 'reportCountry') {
      setReportCountry(dropdownData[event.target.id] || null)
    } 
  }

  return (
    <section className="rektion">
      <div className="rektion__center">
        <div className="rektion__header">
          <h2 className="rektion__title">Reports & Guides</h2>
          <div className="rektion__container">
            <ReportsDropdown dropdownName='reportRegion' dropdownData={regions} transferData={transferData} />
            <ReportsDropdown dropdownName='reportCountry' dropdownData={countries} transferData={transferData}/>
          </div>
        </div>
        <div className={isMobile ? "rektion__none" : "rektion__slider--container"}>
          <div className="rektion__slider">
            <Swiper
              id="recktionSlider"
              slidesPerView={filterData.length < slidesPerView ? filterData.length : slidesPerView }
              spaceBetween={32}
              centeredSlides={false}
              onSwiper={(context) => handleContext(context)}
              onSlideChange={updateActiveIndex}
              loop={true}
            >
              {renderSwiperCards}
                
            </Swiper>
          </div>
          <div className="rektion__slider-nav">
            <SliderNav
              total={renderSwiperCards?.length ?? 0}
              current={activeIndex}
              onPrevClick={() => swiper.slidePrev(300)}
              onNextClick={() => swiper.slideNext(300)}
              theme="light"
            />
          </div>
        </div>
        <div className={isMobile ? "rektion__cards--container" : "rektion__none"}>
          <div className="rektion__wrapper">
            <div className="rektion__cards">
              {renderCards}
            </div>
          </div>
          <button className="rektion__button" onClick={viewAll}>View all</button>          
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
