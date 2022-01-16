import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./loader.module.css";

const Loaderhearts = () => {
  //other logic
  return (
    <div>
      <Loader
        className={s.loader}
        type="Hearts"
        color="red"
        height={80}
        width={80}
      />
      ;
    </div>
  );
};

export default Loaderhearts;
