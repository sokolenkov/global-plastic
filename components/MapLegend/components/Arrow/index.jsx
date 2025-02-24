import { useId } from 'react';

const Arrow = ({ width = '24', height = '17' }) => {
  const id = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8224 1.12839C14.8401 0.694696 15.3644 0.473538 15.6754 0.776395C17.8247 2.86993 21.4826 6.74354 23.408 8.57764C23.6206 8.78017 23.6204 9.12106 23.4058 9.32146C21.4821 11.1178 17.8331 14.72 15.6831 16.7478C15.3674 17.0456 14.8403 16.8216 14.8226 16.3879C14.7571 14.7807 14.6201 12.1838 14.6176 11.4741C14.6265 11.2503 14.4193 11.0781 14.2055 11.0759C9.69034 10.4284 5.17513 9.7826 0.659924 9.13733C0.188665 9.06946 0.188166 8.42978 0.659573 8.36294C1.7256 8.2118 2.79199 8.06317 3.85739 7.90677C7.30751 7.41422 10.7582 6.91999 14.2083 6.42521C14.4193 6.42188 14.6242 6.25251 14.617 6.0315C14.6204 5.32104 14.7569 2.73289 14.8224 1.12839Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="23.5"
          y1="9"
          x2="1"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0799C8" offset="0" />
          <stop offset="1" stopColor="#0799C8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Arrow;
