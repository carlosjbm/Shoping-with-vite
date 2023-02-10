import TopMenu from "./TopMenu";
import "./WithImageGrid.css";
import fondo from "../../assets/img.png";
import MegaMenu from "./MegaMenu";

const WithImageGrid = () => {
  return (
    <div
      className="with-image-grid"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <TopMenu />
      <MegaMenu />
    </div>
  );
};

export default WithImageGrid;
