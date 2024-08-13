import { DNA } from "react-loader-spinner";
import {FC} from 'react'
import css from './Loader.module.css'
const Loader: FC = () => {
  return (
    <div className={css.loaderWrap}>
      <DNA
        visible={true}
        height="50"
        width="50"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
export default Loader;