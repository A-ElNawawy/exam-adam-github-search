import "./Container.css";

interface PropsInterface {}

const Container: React.FC<PropsInterface> = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default Container;
