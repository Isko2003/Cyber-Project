export default function ProductList({ products, title }) {
  return (
    <div className="product-list">
      <h1 className="title">{title}</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img}
                alt={product.title}
                width={200}
                height={200}
              />
              <h2>{product.title}</h2>
              <p className="product-price">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>
    </div>
  );
}
