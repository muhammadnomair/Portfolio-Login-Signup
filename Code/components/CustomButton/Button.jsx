"use client";
export const Button = ({
  text,
  onClick,
  type,
  filled,
  iconLeft,
  src,
  iconRight,
  className,
  loader,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` ${className} app-btns  px-[20px] py-[10px] text-[14px] md:text-[18px] w-full text-primary-space border-primary-space border border-solid  hover:transition-all transition-all hover:border-primary-red
      ${filled
          ? " bg-primary-red text-white border-transparent hover:bg-transparent hover:text-primary-red "
          : "bg-transparent hover:text-primary-red border-primary-red"
        }
      `}
    >
      {iconLeft && (
        <div className="flex items-center justify-center gap-[8px]">
          <img src={src} alt={text} />
          <span>{text}</span>
        </div>
      )}
      {loader && (
        <div className="flex items-center justify-center gap-[8px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200 "
            className="h-10"
          >
            <circle
              fill="#e74c3c"
              stroke="#e74c3c"
              stroke-width="15"
              r="15"
              cx="40"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              ></animate>
            </circle>
            <circle
              fill="#e74c3c"
              stroke="#e74c3c"
              stroke-width="15"
              r="15"
              cx="100"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              ></animate>
            </circle>
            <circle
              fill="#e74c3c"
              stroke="#e74c3c"
              stroke-width="15"
              r="15"
              cx="160"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </div>
      )}
      {iconRight && (
        <div className="flex items-center justify-center gap-[8px]">
          <span>{text}</span>
          <img src={src} alt={text} />
        </div>
      )}
      {!iconRight && !iconLeft ? <span>{text}</span> : <></>}
    </button>
  );
};
