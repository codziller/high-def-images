import React from "react";

const SearchIcon = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 25"
      role="img"
      //  fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M14.2929 17.2686C13.9024 16.8781 13.9024 16.2449 14.2929 15.8544C14.6834 15.4639 15.3166 15.4639 15.7071 15.8544L19.7071 19.8544C20.0976 20.2449 20.0976 20.8781 19.7071 21.2686C19.3166 21.6592 18.6834 21.6592 18.2929 21.2686L14.2929 17.2686Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11.5615C4 15.4275 7.13401 18.5615 11 18.5615C14.866 18.5615 18 15.4275 18 11.5615C18 7.69553 14.866 4.56152 11 4.56152C7.13401 4.56152 4 7.69553 4 11.5615ZM16 11.5615C16 14.3229 13.7614 16.5615 11 16.5615C8.23858 16.5615 6 14.3229 6 11.5615C6 8.8001 8.23858 6.56152 11 6.56152C13.7614 6.56152 16 8.8001 16 11.5615Z"
        fill="black"
      />
    </svg>
  );
};

const ArrowRight = ({ className }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-right"
      width="15px"
      height="15px"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#000000"
        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
      ></path>
    </svg>
  );
};

const CloseIcon = ({ fill }) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.84375"
        y="18.5693"
        width="18"
        height="2.25"
        rx="1.125"
        transform="rotate(-45 5.84375 18.5693)"
        fill={fill}
      />
      <rect
        x="7.43359"
        y="5.84082"
        width="18"
        height="2.25"
        rx="1.125"
        transform="rotate(45 7.43359 5.84082)"
        fill={fill}
      />
    </svg>
  );
};
export { SearchIcon, ArrowRight, CloseIcon };
