const Shield = ({ className, color = '#212020', ...restProps }) => {
  return (
    <svg
      className={className}
      {...restProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77215 4.04167C6.77215 2.49987 8.02202 1.25 9.56381 1.25H14.7298C16.1105 1.25 17.2298 2.36929 17.2298 3.75C17.2298 4.30228 17.6775 4.75 18.2298 4.75H18.8192C20.404 4.75 21.7979 5.97999 21.7333 7.66561C21.6506 9.82667 21.2308 13.2931 19.5475 16.3608C19.0912 17.1923 18.4818 18.0092 17.823 18.7703L17.7734 18.8276C16.8258 19.9226 16.0356 20.8356 15.1861 21.4579C14.2725 22.1273 13.2973 22.4607 12.001 22.4607C10.7047 22.4607 9.72951 22.1273 8.81582 21.4579C7.96635 20.8356 7.17619 19.9226 6.22852 18.8276L6.17893 18.7703C5.52016 18.0092 4.91077 17.1923 4.45448 16.3608C2.82533 13.3918 2.37867 10.2575 2.27715 8.24648C2.19164 6.55273 3.59556 5.33333 5.17162 5.33333H5.48048C6.19385 5.33333 6.77215 4.75503 6.77215 4.04167ZM15.5849 10.4706C15.8448 10.148 15.794 9.67589 15.4715 9.416C15.149 9.15611 14.6768 9.20689 14.4169 9.52943L12.3954 12.0382C11.9803 12.5533 11.7184 12.8755 11.5005 13.0791C11.398 13.1747 11.3326 13.2173 11.295 13.2361C11.267 13.2501 11.257 13.25 11.2516 13.25H11.2502C11.2448 13.25 11.2348 13.2501 11.2068 13.2361C11.1692 13.2173 11.1038 13.1747 11.0014 13.0791C10.7834 12.8755 10.5215 12.5533 10.1064 12.0382L9.58492 11.391C9.32503 11.0685 8.85288 11.0177 8.53034 11.2776C8.20781 11.5375 8.15702 12.0096 8.41691 12.3321L8.97098 13.0198C9.34349 13.4822 9.67214 13.8901 9.97756 14.1753C10.3055 14.4816 10.7132 14.75 11.2509 14.75C11.7887 14.75 12.1964 14.4816 12.5243 14.1753C12.8297 13.8901 13.1583 13.4822 13.5308 13.0198L15.5849 10.4706Z"
        fill={color}
      />
    </svg>
  );
};

export default Shield;
