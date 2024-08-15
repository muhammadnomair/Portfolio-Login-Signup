import styles from "./CircleAnimation.module.scss";

export const CircleAnimation = () => {
  const { circle_image, main, circle, main_outer, circle_outer } = styles;
  return (
    <>
      <img
        src="/images/circle-half.png"
        alt=""
        // width="100% "
        className={circle_image}
      />

      <div className="main_container ">
        <div className={main}>
          <div className={circle}></div>
        </div>
      </div>
      <div className={main_outer}>
        <div className={circle_outer}></div>
      </div>
    </>
  );
};
