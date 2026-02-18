import React from "react";
import "./PlacementsSection.css";

const placements = [
  {
    name: "Ajay Kumar",
    role: "Digital Marketing Executive",
    package: "4.9 LPA",
    image: "/ajaykumar.png",
    logo: "/sellercircle.png",
    
  },
  {
    name: "Diksha Singh",
    role: "Social Media Executive",
    package: "3.5 LPA",
    image: "/diksha.png",
    logo: "/heritage.png",
  },
  {
    name: "Abhinav Gupta",
    role: "Graphics Designer",
    package: "2.5 LPA",
    image: "/abhinav.png",
    logo: "/valueleaf.png",
  },
  {
    name: "Ajay Kumar",
    role: "Senior SEO Consultant",
    package: "5.2 LPA",
    image: "/ajaykumar2.png",
    logo: "/axa.png",
  },
  {
    name: "Adarsh Mishra",
    role: "Sales Executive",
    package: "7.5 LPA",
    image: "/adarsh.png",
    logo: "/karvy.jpg",
  },
  {
    name: "Rakesh Kumar",
    role: "Digital Marketing Executive",
    package: "4.9 LPA",
    image: "/rakesh.png",
    logo: "/hariram.png",
  },
  {
    name: "Pratishtha Srivastava",
    role: "Google Ads Specialist",
    package: "3.5 LPA",
    image: "/pratishtha.png",
    logo: "/heritage.png",
  },
  {
    name: "Sahil Gupta",
    role: "Video Editor",
    package: "3 LPA",
    image: "/sahil.png",
    logo: "/rednapkin.png",
  },
];


const PlacementsSection: React.FC = () => {
  return (
    <section className="placements-section">

      <p className="placements-tag">100% PLACEMENTS</p>

      <h2 className="placements-title">
        Recent Placements in Top Companies
      </h2>

      <p className="placements-desc">
        Our students have successfully secured positions in leading companies
        across the digital industry. Their achievements reflect the quality
        training and career support at Dizi Global Solution.
      </p>

      <div className="placements-grid">
        {placements.map((item, index) => (
          <div key={index} className="placement-card">

            <img src={item.image} alt={item.name} className="student-img" />

            <h3>{item.name}</h3>
            <p className="designation">{item.role}</p>

            <img src={item.logo} alt="Company Logo" className="company-logo" />

            <div className="package-bar">
              Package: {item.package}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PlacementsSection;
