import ItemCount from "../itemCount/ItemCount";

function ItemDetail(product,removeItem,handleAddToCart){
<div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.imgurl} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
   
        <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />
      <button className="btn"> Ir al carrito</button>
      <button className="btn" onClick={() => removeItem(product.id)}>Eliminar Item</button>
      <button className="btn">Vaciar Carrito</button>
      </div>

  </div>

}

export default ItemDetail;