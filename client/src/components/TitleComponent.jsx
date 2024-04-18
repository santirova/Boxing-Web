import PropTypes from "prop-types";

const TitleComponent = ({ title, description }) => {
  return (
    <div className="title__section">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TitleComponent;
