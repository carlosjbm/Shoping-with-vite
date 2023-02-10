import "./Product.css";

const Product = ({ nameProducto, image }) => {
  return (
    <div className="product">
      <img src={image} alt="Sofa" />
      <div className="tittle-description">
        <p className="name-item">{nameProducto}</p>
        <button className="button-tertiary">
          <p className="text">Shop now</p>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
              fill="#1E293B"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
