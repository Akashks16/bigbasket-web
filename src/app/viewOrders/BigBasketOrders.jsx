import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Home,
  Grid,
  Search,
  ChevronRight,
  Minus,
  Plus,
  Mic,
  PersonStanding,
} from "lucide-react";
import "./BigBasketOrders.css";

const BigBasketOrders = () => {
  const [cartCount, setCartCount] = useState(4);
  const [productQuantities, setProductQuantities] = useState({
    4: 1, // Initial quantity for Parry's Sugar
    5: 0,
    6: 0,
  });

  useEffect(() => {
    if (productQuantities) {
      let pCount = 0;
      Object.keys(productQuantities).map((_key) => {
        pCount = pCount + productQuantities[_key];
      });
      setCartCount(pCount);
    }
  }, [productQuantities]);

  const watermelonItems = [
    {
      id: 1,
      name: "freshol Watermelon - Organically Grown",
      price: 62.5,
      originalPrice: 115.22,
      weight: "1 pc - (Approx. 1-3 kg)",
      delivery: "11 mins",
      previouslyBought: true,
      imageLink:
        "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-109165284/109165284.jpg",
    },
    {
      id: 2,
      name: "freshol Watermelon - Small",
      price: 66,
      originalPrice: 98.63,
      weight: "1 pc - 1.7 - 2.5 kg",
      delivery: "11 mins",
      imageLink:
        "https://media.istockphoto.com/id/478266756/photo/watermelon.jpg?s=612x612&w=0&k=20&c=U94v8i3oEAYh4lbxgDQmZAuA9kww7vlOwY-K0k_ElXE=",
    },
    {
      id: 3,
      name: "freshol Watermelon - Striped, Large",
      price: 140.27,
      originalPrice: 175.34,
      weight: "1 pc - 3 kg - 5 kg",
      imageLink:
        "https://www.farmatma.in/wp-content/uploads/2017/12/watermelon-cultivation.jpg",
    },
  ];

  const sugarItems = [
    {
      id: 4,
      name: "Parry's Sugar/Sakkare - White Label",
      price: 47,
      originalPrice: 60,
      weight: "1 kg - Pouch",
      discount: "22% OFF",
      delivery: "12 mins",
      rating: 4.1,
      previouslyBought: true,
      imageLink:
        "https://www.jiomart.com/images/product/original/490008007/parry-s-pure-sulpher-free-refined-sugar-1-kg-product-images-o490008007-p490008007-0-202203170800.jpg?im=Resize=(1000,1000)",
    },
    {
      id: 5,
      name: "Madhur Sugar",
      price: 54.21,
      originalPrice: 65,
      weight: "1 kg",
      delivery: "12 mins",
      rating: 4.1,
      imageLink:
        "https://cdn.zeptonow.com/production/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/1f479cfd-06d3-4db6-bfc3-b6b92d9d87a6.jpeg",
    },
    {
      id: 6,
      name: "bb Popular Sugar/Sakkare",
      price: 225.5,
      originalPrice: 300,
      weight: "5 kg",
      discount: "25% OFF",
      delivery: "12 mins",
      rating: 4.0,
      imageLink:
        "https://www.bigbasket.com/media/uploads/p/xl/40019396_11-bb-popular-sugar.jpg",
    },
  ];

  const lemonJuiceItems = [
    {
      id: 7,
      name: "Lemon Juice",
      price: 18,
      originalPrice: 20,
      delivery: "12 mins",
      rating: 4.0,
      imageLink:
        "https://images.prismic.io/goodnature/11402763-2478-4bab-b470-531e0cb8b7e3_Does-Lemon-Juice-Need-to-be-Refrigerated.png",
    },
    {
      id: 8,
      name: "Nestea Lemon Iced Tea",
      price: 0,
      delivery: "12 mins",
      discount: "₹15 OFF",
      rating: 4.0,
      imageLink:
        "https://www.nestleprofessional.in/sites/default/files/2023-09/NESTEA%20Iced%20Tea%20Lemon%201Kg%20IN%20FOP%20400x380px.png",
    },
  ];

  const updateQuantity = (id, change) => {
    setProductQuantities((prev) => {
      const newQuantity = Math.max(0, (prev[id] || 0) + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  return (
    <div className="bb-container">
      {/* Header */}
      <div className="bb-header">
        <div className="bb-logo-container">
          <img
            src="https://www.theweek.in/content/dam/week/news/biz-tech/images/2020/11/8/BigBasket-logo.jpg.transform/schema-1x1/image.jpg"
            alt="BB Logo"
            className="bb-logo"
            style={{
              height: "20px",
              width: "20px",
            }}
          />
          <span className="bb-brand-name">bigbasket</span>
        </div>
        <div className="bb-user-icon">
          <PersonStanding />
        </div>
      </div>

      {/* Address bar */}
      <div className="bb-address-bar">
        <div className="address-info">
          <Home size={16} className="home-icon" />
          <span>Deliver to Home</span>
          <span className="address-details">
            A1305, sumadhura eden garden,Doddaban...
          </span>
        </div>
        <div className="delivery-time">
          <div className="delivery-badge">
            <span className="delivery-icon">⚡</span>
            <span>10 mins</span>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="bb-search-bar">
        <Search size={18} />
        <input type="text" placeholder="Search 20000+ products" />
        <Mic size={18} />
      </div>

      {/* Fashion Fest Banner */}
      {/* <div className="banner-container"> */}
      {/* <div className="fashion-banner">
          <div className="banner-text">
            <h2>Fashion Fest</h2>
          </div>
          <div className="banner-image">
            <img src="/api/placeholder/120/90" alt="Fashion items" />
          </div>
        </div> */}

      {/* Category icons */}
      {/* <div className="category-row">
          <div className="category-item">
            <div className="category-icon">
              <img src="/api/placeholder/50/50" alt="Women's fashion" />
            </div>
            <div className="category-name">Women's fashion</div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <img src="/api/placeholder/50/50" alt="Men's fashion" />
            </div>
            <div className="category-name">Men's fashion</div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <img src="/api/placeholder/50/50" alt="Jewellery & accessories" />
            </div>
            <div className="category-name">Jewellery & accessories</div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <img src="/api/placeholder/50/50" alt="Footwear" />
            </div>
            <div className="category-name">Footwear</div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Phone Advertisement */}
      {/* <div className="phone-ad">
        <img src="/api/placeholder/340/100" alt="OnePlus 13R" />
      </div> */}

      {/* Electronics Banner */}
      {/* <div className="electronics-banner">
        <h2>Get Electronics in 10 mins</h2>
        <div className="electronics-images">
          <img src="/api/placeholder/80/80" alt="Earbuds" />
          <img src="/api/placeholder/80/80" alt="Camera" />
        </div>
      </div> */}

      {/* Order Status */}
      {/* <div className="order-status">
        <div className="status-icon">
          <img src="/api/placeholder/24/24" alt="Delivered" />
        </div>
        <div className="status-text">Order delivered</div>
        <div className="order-count">+1 Orders</div>
      </div> */}

      {/* Cart summary */}
      <div className="cart-summary">
        <div className="ask-bb">
          <span className="ask-icon">✨</span>
          <span>Ask BB</span>
        </div>
        <div className="cart-button">
          <ShoppingBag size={18} />
          <span>{cartCount} Products</span>
        </div>
      </div>

      {/* Watermelon products */}
      <div className="product-section">
        <div className="product-items-container">
          {watermelonItems.map((item) => (
            <div key={item.id} className="product-card">
              {item.discount && (
                <div className="discount-badge">{item.discount}</div>
              )}
              <div className="product-image">
                <img
                  src={item?.imageLink ?? "/api/placeholder/80/80"}
                  alt={item.name}
                />
              </div>
              <div className="product-quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus size={14} />
                </button>
                <span className="quantity">
                  {productQuantities[item.id] || 0}
                </span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="product-details">
                <div className="product-price">
                  <span className="current-price">₹{item.price}</span>
                  <span className="original-price">₹{item.originalPrice}</span>
                </div>
                <div className="product-brand">
                  {item.id === 4 || item.id === 6
                    ? "Har Din Sasta!"
                    : item.name.split(" ")[0]}
                </div>
                <div className="product-title">{item.name}</div>
                <div className="product-weight">{item.weight}</div>
                {item.previouslyBought && (
                  <div className="previously-bought">PREVIOUSLY BOUGHT</div>
                )}
                <div className="product-footer">
                  <div className="delivery-time-small">⚡ {item.delivery}</div>
                  {item.rating && (
                    <div className="product-rating">★ {item.rating}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sugar products */}
      <div className="product-section">
        <div className="section-header">
          <h3>Sugar</h3>
          <ChevronRight size={18} />
        </div>

        <div className="product-items-row">
          {sugarItems.map((item) => (
            <div key={item.id} className="product-card">
              {item.discount && (
                <div className="discount-badge">{item.discount}</div>
              )}
              <div className="product-image">
                <img
                  src={item?.imageLink ?? "/api/placeholder/80/80"}
                  alt={item.name}
                />
              </div>
              <div className="product-quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus size={14} />
                </button>
                <span className="quantity">
                  {productQuantities[item.id] || 0}
                </span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="product-details">
                <div className="product-price">
                  <span className="current-price">₹{item.price}</span>
                  <span className="original-price">₹{item.originalPrice}</span>
                </div>
                <div className="product-brand">
                  {item.id === 4 || item.id === 6
                    ? "Har Din Sasta!"
                    : item.name.split(" ")[0]}
                </div>
                <div className="product-title">{item.name}</div>
                <div className="product-weight">{item.weight}</div>
                {item.previouslyBought && (
                  <div className="previously-bought">PREVIOUSLY BOUGHT</div>
                )}
                <div className="product-footer">
                  <div className="delivery-time-small">⚡ {item.delivery}</div>
                  {item.rating && (
                    <div className="product-rating">★ {item.rating}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lemon Juice section */}
      <div className="product-section">
        <div className="section-header">
          <h3>Lemon-Juice</h3>
          <ChevronRight size={18} />
        </div>

        <div className="product-items-row">
          {lemonJuiceItems.map((item) => (
            <div key={item.id} className="product-card">
              {item.discount && (
                <div className="discount-badge">{item.discount}</div>
              )}
              <div className="product-image">
                <img
                  src={item?.imageLink ?? "/api/placeholder/80/80"}
                  alt={item.name}
                />
              </div>
              <div className="product-quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <Minus size={14} />
                </button>
                <span className="quantity">
                  {productQuantities[item.id] || 0}
                </span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="product-details">
                <div className="product-price">
                  <span className="current-price">₹{item.price}</span>
                  <span className="original-price">₹{item.originalPrice}</span>
                </div>
                <div className="product-brand">
                  {item.id === 4 || item.id === 6
                    ? "Har Din Sasta!"
                    : item.name.split(" ")[0]}
                </div>
                <div className="product-title">{item.name}</div>
                <div className="product-weight">{item.weight}</div>
                {item.previouslyBought && (
                  <div className="previously-bought">PREVIOUSLY BOUGHT</div>
                )}
                <div className="product-footer">
                  <div className="delivery-time-small">⚡ {item.delivery}</div>
                  {item.rating && (
                    <div className="product-rating">★ {item.rating}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ask input */}
      <div className="ask-input-container">
        <input type="text" placeholder="Ask Bigbasket" className="ask-input" />
        <div className="mic-button">
          <Mic size={18} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item">
          <Home size={20} />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <Grid size={20} />
          <span>Categories</span>
        </div>
        <div className="nav-item active">
          <div className="ask-icon-container">
            <span className="ask-nav-icon">✨</span>
          </div>
          <span>Ask BB</span>
        </div>
      </div>
    </div>
  );
};

export default BigBasketOrders;
