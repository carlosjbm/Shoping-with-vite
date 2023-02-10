import Product from "./Producto";
import newArrivals from "../../assets/Photo.png";
import sofa from "../../assets/sofa.png";
import chairs from "../../assets/chairs.png";
import homeDeco from "../../assets/homedeco.png";
import "./MegaMenu.css";

const MegaMenu = () => {
  return (
    <div className="mega-menu-container">
      <Product nameProducto="New Arrivals" image={newArrivals} />
      <Product nameProducto="Sofas" image={sofa} />
      <Product nameProducto="Chairs" image={chairs} />
      <Product nameProducto="Home Deco" image={homeDeco} />
    </div>
  );
};

export default MegaMenu;
