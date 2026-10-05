import React, { useRef } from "react";
import "./home.css";

const foodItems = [
  {
    name: "Chicken Biryani",
    category: "Biryani",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cheese Burger",
    category: "Burgers",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chicken Noodles",
    category: "Noodles",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "French Fries",
    category: "Snacks",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Masala Dosa",
    category: "South Indian",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  { name: "All", icon: "🍽️" },
  { name: "Biryani", icon: "🍛" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Noodles", icon: "🍜" },
  { name: "Snacks", icon: "🍟" },
  { name: "Drinks", icon: "🥤" },
];

function Home() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">🍴</div>
          <span>
            Quick<span>Feast</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#orders">My Orders</a>
          <a href="#track">Track Order</a>
        </div>

        <div className="nav-actions">
          <button className="cart-button">
            🛒 <span>Cart</span>
          </button>

          <button className="login-button">
            Login
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="small-heading">
            🍽️ YOUR CAMPUS FOOD PARTNER
          </div>

          <h1>
            Hungry?
            <br />
            <span>We've got you.</span>
          </h1>

          <p>
            Skip the queue. Pick your favourite food,
            place your order and enjoy your meal without
            waiting around the canteen.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Order Now →
            </button>

            <button className="secondary-button">
              View Menu
            </button>
          </div>

          <div className="hero-info">
            <div>
              <strong>10+</strong>
              <span>Food Choices</span>
            </div>

            <div>
              <strong>15 min</strong>
              <span>Average Time</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Fresh Food</span>
            </div>
          </div>

        </div>

        {/* HERO FOOD IMAGE */}
        <div className="hero-food">
          <div className="circle-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90"
            alt="Fresh healthy food"
          />

          <div className="floating-card rating-card">
            <span>⭐</span>

            <div>
              <strong>4.8/5</strong>
              <small>Student Rating</small>
            </div>
          </div>

          <div className="floating-card delivery-card">
            <span>⚡</span>

            <div>
              <strong>Fast Delivery</strong>
              <small>At your campus</small>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="category-section">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>What are you craving?</h2>
          </div>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.name}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FOOD SLIDER */}
      <section className="food-section" id="menu">
        <div className="section-heading food-heading">

          <div>
            <span>STUDENT FAVOURITES</span>
            <h2>Popular near you</h2>
          </div>

          <div className="slider-buttons">
            <button onClick={scrollLeft}>
              ←
            </button>

            <button onClick={scrollRight}>
              →
            </button>
          </div>

        </div>

        {/* HORIZONTAL SLIDER */}
        <div
          className="food-slider"
          ref={sliderRef}
        >
          {foodItems.map((food) => (
            <div
              className="food-card"
              key={food.name}
            >
              <div className="food-image">
                <img
                  src={food.image}
                  alt={food.name}
                />

                <span className="food-tag">
                  Popular
                </span>
              </div>

              <div className="food-details">
                <span className="food-category">
                  {food.category}
                </span>

                <h3>{food.name}</h3>

                <div className="food-bottom">
                  <strong>
                    ₹{food.price}
                  </strong>

                  <button>
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRACK ORDER */}
      <section
        className="track-section"
        id="track"
      >
        <div className="track-content">
          <span>ORDER TRACKING</span>

          <h2>
            Where's your food?
          </h2>

          <p>
            Track your order in real time and know
            exactly when your food will be ready.
          </p>

          <div className="tracking-box">
            <div className="tracking-input">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Enter your order ID"
              />
            </div>

            <button>
              Track Order
            </button>
          </div>
        </div>

        <div className="tracking-steps">
          <div className="tracking-step active">
            <div>✓</div>
            <span>Order Placed</span>
          </div>

          <div className="line active-line"></div>

          <div className="tracking-step">
            <div>👨‍🍳</div>
            <span>Preparing</span>
          </div>

          <div className="line"></div>

          <div className="tracking-step">
            <div>📦</div>
            <span>Ready</span>
          </div>

          <div className="line"></div>

          <div className="tracking-step">
            <div>🎉</div>
            <span>Enjoy!</span>
          </div>
        </div>
      </section>

      {/* WHY QUICK FEAST */}
      <section className="why-section">
        <div className="section-heading center-heading">
          <span>WHY QUICK FEAST?</span>

          <h2>
            Food made simple.
          </h2>
        </div>

        <div className="benefits">
          <div className="benefit-card">
            <div>⚡</div>
            <h3>Skip the Queue</h3>
            <p>
              Order before you reach the canteen.
            </p>
          </div>

          <div className="benefit-card">
            <div>🍱</div>
            <h3>Fresh Food</h3>
            <p>
              Enjoy freshly prepared campus meals.
            </p>
          </div>

          <div className="benefit-card">
            <div>📍</div>
            <h3>Track Orders</h3>
            <p>
              Know when your food is ready.
            </p>
          </div>

          <div className="benefit-card">
            <div>💳</div>
            <h3>Easy Payments</h3>
            <p>
              Simple and secure checkout.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          🍴 Quick<span>Feast</span>
        </div>

        <p>
          Your campus. Your food. Your way.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#orders">Orders</a>
          <a href="#track">Track Order</a>
        </div>

        <p className="copyright">
          © 2026 Quick Feast. Made for students.
        </p>
      </footer>

    </div>
  );
}

export default Home;