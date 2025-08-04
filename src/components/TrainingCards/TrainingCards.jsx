import React, { useRef, useState, useEffect } from "react";
import "./TrainingCards.css";

const cards = [
  {
    title: "Pro Level Training",
    desc: "Training sessions on indices",
    img: "/images/Image 1.jpg"
  },
  {
    title: "Trade on Numbers",
    desc: "Training sessions on indices",
    img: "/images/Image 2.jpg"
  },
  {
    title: "Beginner Training",
    desc: "Training sessions on indices",
    img: "/images/Image 3.jpg"
  },
  {
    title: "Beginner Training",
    desc: "Training sessions on indices",
    img: "/images/Image 4.jpg"
  },
  {
    title: "Beginner Training",
    desc: "Training sessions on indices",
    img: "/images/Image 5.jpg"
  },
  {
    img: "/images/Image end.jpg"
  },
];

const TrainingCards = () => {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollAmount = 319;

  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    setShowLeft(container.scrollLeft > 0);
    setShowRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;

    const amount = dir === "left" ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    updateButtons();
    if (!container) return;

    container.addEventListener("scroll", updateButtons);
    return () => container.removeEventListener("scroll", updateButtons);
  }, []);

  return (
    <section className="training-section">
      <p className="training-header">
        Get started from starter to pro level with training.
      </p>

      <div className="scroll-wrapper">
        {showLeft && (
          <button className="nav-btn left" onClick={() => scroll("left")}>
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <div className="cards-container" ref={containerRef}>
          {cards.map((item, i) => {
            const isLastCard = i === cards.length - 1;

            return (
              <div className="card" key={i}>
                <img src={item.img} alt={item.title || "Training Image"} className="card-image" />
                {!isLastCard && <div className="card-overlay" />}

                <div className="card-content">
                  {item.title && <h2>{item.title}</h2>}
                  {item.desc && <p>{item.desc}</p>}
                  {!isLastCard ? (
                    <div className="card-bottom">
                      <button>Start Session</button>
                      <div className="duration-box">
                        <p>Duration</p>
                        <h3>02 hr</h3>
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: "48px" }}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {showRight && (
          <button className="nav-btn right" onClick={() => scroll("right")}>
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default TrainingCards;