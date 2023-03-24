import { RotatingLines } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';
import PropTypes from 'prop-types';

export const Loader = ({ showLoader }) => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={showLoader}
      wrapperClassName={css.loader}
      wrapperStyle={css.loader}
    />
  );
};

Loader.propTypes = {
  showModal: PropTypes.func,
};
