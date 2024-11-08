
import "./navbar.css";


function ItemListContainer({greeting}) {
  return (
    <div>
      <h2 className="custom-heading">{greeting}</h2>
      <p>Bienvenido a nuestra tienda de tecnología</p>
      </div>
  );
}

export default ItemListContainer