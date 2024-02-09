import { useState } from "react";
import "./VirtualGift.css";
import roseImage from "../assets/rose.png";
import chocolateImage from "../assets/chocolate.png";
import jewelryImage from "../assets/jewelry.png";
import carImage from "../assets/car.png";
import momoImage from "../assets/momo.jpeg";
import Success from "../Success/Success.jsx";

const items = [
  {
    id: 1,
    name: "Rose",
    image: roseImage,
    description: "Beautiful and romantic",
  },
  {
    id: 2,
    name: "Chocolate",
    image: chocolateImage,
    description: "Sweet and delicious",
  },
  {
    id: 3,
    name: "Jewelry",
    image: jewelryImage,
    description: "Elegant and luxurious",
  },
  {
    id: 4,
    name: "Car",
    image: carImage,
    description: "Electric and stylish",
  },
  {
    id: 5,
    name: "Momo",
    image: momoImage,
    description: "Steamed and delicious",
  },
];

function VirtualGift() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setShowSuccess(true);
    setCartOpen(false);
  };

  return (
    <>
      {showSuccess ? (
        <Success onClose={() => setShowSuccess(false)} />
      ) : (
        <div className="gift-container">
          <p>My queen, claim thy Virtual Tribute!🎁</p>
          <div className="virtual-gift">
            <div className="items">
              {items.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => addToCart(item)}>Add to Vault</button>
                </div>
              ))}
            </div>
          </div>
          <div className="cart">
            <button onClick={() => setCartOpen(!cartOpen)}>
              {cartOpen ? "Conceal Vault" : "Unveil Vault"}
            </button>
            {cartOpen && (
              <>
                {cart.length > 0 ? (
                  <>
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div>
                          <img src={item.image} alt={item.name} />
                          <span>{item.name}</span>
                        </div>
                        <div>
                          <button onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => addToCart(item)}>+</button>
                          <button onClick={() => removeFromCart(item.id)}>
                            Exile
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="checkout-btn" onClick={handleCheckout}>
                      Seal the deal
                    </button>
                  </>
                ) : (
                  <p>Vault is empty</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default VirtualGift;
