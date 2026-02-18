import React from "react";
import "./GallerySection.css";

const images = [
  "/slider1.png",
  "/slider2.png",
  "/slider3.png",
  "/slider4.png",
  "/slider5.png",
  "/slider6.png",
  "/slider7.png",
  "/slider8.png",
  "/slider9.png",
  "/slider10.png",
];

const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-tag">GALLERY</span>
        <h2>
          <span className="highlight">Certified Students,</span> Real Career Success
        </h2>
        <p>
          Take a look at our students proudly showcasing their certifications
          and accomplishments after completing our digital marketing course.
        </p>
      </div>

      <div className="slider-wrapper">
        <div className="gallery-track">
          {[...images, ...images].map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt="student" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
