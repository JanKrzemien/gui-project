import './ProductGrid.css';

export const ProductGrid = ({ products = [
  {
    id: 1,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7m"
  },
  {
    id: 2,
    name: "Product-name", 
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7n"
  },
  {
    id: 3,
    name: "Product-name",
    author: "Product-author", 
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7o"
  },
  {
    id: 4,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7p"
  },
  {
    id: 5,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7q"
  },
  {
    id: 6,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7r"
  },
  {
    id: 7,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7s"
  },
  {
    id: 8,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7t"
  },
  {
    id: 9,
    name: "Product-name",
    author: "Product-author",
    rating: 4.7,
    image: "https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7u"
  }
] }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <button className="add-to-list-btn">+ Add to list</button>
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-author">{product.author}</p>
          <div className="rating-data">
            <span className="rating">{product.rating}</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4Fw9wIBBLnlud7v" alt="star" className="star-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};
