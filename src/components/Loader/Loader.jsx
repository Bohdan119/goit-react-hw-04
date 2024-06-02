import css from "../Loader/Loader.module.css";

const Loader = () => {
    // console.log('isLoad')
  return (
    <div className={css["loader"]}>
      <div className={css["spinner"]}></div>
    </div>
  );
};

export default Loader;
