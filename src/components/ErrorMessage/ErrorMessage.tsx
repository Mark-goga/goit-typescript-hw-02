import css from "./ErrorMessage.module.css";
import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <div>
      <p className={css.text}>Please reload this page</p>
    </div>
  );
};

export default ErrorMessage;
