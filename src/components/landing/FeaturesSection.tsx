import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Expert Lead Classes",
    desc: "Learn directly from industry professionals specializing in AI Powered Digital Marketing Training.",
    icon: "/expertlead.png",
    border: "border-blue-400",
    bg: "bg-blue-50",
  },
  {
    title: "Recognized Certifications",
    desc: "Earn globally recognized certifications along with a Practical AI Marketing Certification from Dizi Global Solution.",
    icon: "/recognizedcertifications.png",
    border: "border-red-400",
    bg: "bg-red-50",
  },
  {
    title: "Flexible Learning Options",
    desc: "Choose online or offline classes with batch timings that fit your schedule.",
    icon: "/flexiblelearning.png",
    border: "border-green-400",
    bg: "bg-green-50",
  },
  {
    title: "100% Job Placement",
    desc: "Get career guidance, interview preparation, and placement support with top companies hiring AI marketers.",
    icon: "/100%jobplacement.png",
    border: "border-orange-400",
    bg: "bg-orange-50",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f3f4f6] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-black mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Choose Our AI Digital Marketing Course?
        </h2>

        <p
          className={`text-gray-500 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hands-on AI-powered digital marketing training with career support.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
              className={`
                group
                ${item.bg} ${item.border} border-2
                rounded-t-2xl rounded-b-md
                px-8 pt-12 pb-10
                text-center
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:shadow-2xl
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 bg-primary text-white py-4 rounded-lg font-medium text-lg transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Become job-ready with practical AI Digital Marketing training, live
          projects, and placement support
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
