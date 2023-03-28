import "./ItemListContainer.css";
import Item from "../Item/item";
import Flex from "../Flex/Flex";

function ItemListContainer(props) {
  const products = [
    {
      id: 1,
      title: "Cuenco azul",
      price: 3000,
      description: "Cuenco estilo japones color azul.",
      img: "/imgs/cuenco_azul.jpg",
      category: "cuenco",
      stock: 5,
    },
    {
      id: 2,
      title: "Cuenco rojo",
      price: 3000,
      description: "Cuenco estilo japones color rojo.",
      img: "/imgs/cuenco_rojo.jpg",
      category: "cuenco",
      stock: 5,
    },
    {
      id: 3,
      title: "Palillos rojos",
      price: 1800,
      description: "Palillos estilos japones color rojo.",
      img:"/imgs/palillos_rojos.jpg",
      category: "palillos",
      stock: 10,
    },
  ];

  return(
    <Flex>
        {products.map((producto) => (
            <Item
                key = {producto.id}
                title = {producto.title}
                price = {producto.price}
                description = {producto.description}
                img = {producto.img}
            />
        ))}
    </Flex>
  )
}

export default ItemListContainer;
