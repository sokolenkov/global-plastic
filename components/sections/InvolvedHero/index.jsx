import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import involvedAnimation from '../../../animation/involvedAnimation'

const InvolvedHero = ({data}) => {
  const router = useRouter();
  const {involvedHeroTitle, involvedHeroDescription} = data;
  const section = useRef();
  const icon = useRef();

  const getScrollPercent = () => {
    if(!section.current) return;    
    const sectionHeight = section.current.clientHeight;
    const scrollHeight = document.documentElement.scrollTop - section.current.offsetTop;
    const scrollPercent = Math.round(scrollHeight / sectionHeight * 100);  
    const percent = isNaN(scrollPercent) ? "" : scrollPercent;
    return percent;
  }

  useEffect(() => {
    const handleScroll = () => {
      const percent = getScrollPercent();
      involvedAnimation(percent, icon);
    }
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, []);

  return (
    <section className="inktion" ref={section}>
      <div className="inktion__center">
        <div className="inktion__icon" ref={icon}>
          <div className="inktion__message"></div>
        </div>
        <h2 className="inktion__title">{involvedHeroTitle}</h2>
        <p className="inktion__description">{involvedHeroDescription}</p>
          <button className="inktion__link arrow-hover-right" onClick={() => router.push("#form")}>
            Join to converstion
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-image"
            >
              <path
                d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
                fill="#F9B131"
              />
            </svg>
          </button>
      </div>
    </section>
  );
};

export default InvolvedHero;
