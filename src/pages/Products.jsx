import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Mahal",
    price: "Rp. 2.000.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam",
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam",
  },
  {
    id: 3,
    name: "Sepatu Lama",
    price: "Rp. 500.000",
    image: "/images/shoes-1.jpg",
    description:
      "lorem ipsum dolor sit amet, consectet, sed diam nonumy eirmod tempor, sed diam nonumy eirmod, tempor, sed diam nonumy eirmod",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 px-10 bg-blue-600 text-white items-center">
        {email} <Button classname="bg-red-600 ml-5" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5" >
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
