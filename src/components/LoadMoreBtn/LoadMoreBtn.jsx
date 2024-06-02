import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore }) => {
  return <button onClick={onLoadMore}>Load more</button>;
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
