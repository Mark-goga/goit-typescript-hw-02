import css from './LoadMoreBtn.module.css'
import {FC} from 'react'

type LoadMoreBtnProps = {
  onLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button" className={css.loadMore}>
      load more
    </button>
  );
}
export default LoadMoreBtn