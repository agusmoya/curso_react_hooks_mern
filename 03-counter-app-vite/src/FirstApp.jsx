import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      {/* <h2>{getValue(12, 45)}</h2> */}
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: 'No hay titulo', 
  subtitle: 'No hay subtitulo'
}