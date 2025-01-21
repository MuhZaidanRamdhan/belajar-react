import CardProduct from "../components/Fragments/CardProduct";

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
  }
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
