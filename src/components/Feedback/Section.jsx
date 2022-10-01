import propTypes from 'prop-types';
import css from './Feedback.module.css';
const Section = ({ title, children }) => (
  <>
    <h2 className={css.title}>{title}</h2>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
};
