import "./Overlay.css";

interface PropsInterface {}

const Overlay: React.FC<PropsInterface> = ({ children }) => {
  return <div className="Overlay">{children}</div>;
};

export default Overlay;
