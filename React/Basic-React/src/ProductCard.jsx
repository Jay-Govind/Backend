import Product from "./Product.jsx";
import "./ProductCard.css";

function ProductCard() {
	return (
		<div className="ProductCard">
			<Product title={"Logitech MX Master"} idx={0} />
			<Product title={"Apple Pencil (2nd Gen)"} idx={1} />
			<Product title={"Zebronics Zeb-transformer"} idx={2} />
			<Product title={"Petronics Toad 23"} idx={3} />
		</div>
	);
}
export default ProductCard;
