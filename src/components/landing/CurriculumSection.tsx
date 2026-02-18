import {
  Globe,
  Search,
  Share2,
  Target,
  ShoppingCart,
  Bot,
  FileText,
  BarChart3,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  { icon: Globe, title: "Website Designing", desc: " Get familiar with WordPress and landing page creation for effective campaigns." },
  { icon: Search, title: "Search Engine Optimization Course", desc: "Advanced AI Based SEO & Content Marketing Course to rank higher on search engines." },
  { icon: Share2, title: "Social Media Marketing Course", desc: "Specialized AI Social Media Marketing Course for Facebook, Instagram, and LinkedIn." },
  { icon: Target, title: "Google Ads", desc: "Hands-on AI Google Ads & Meta Ads Course for high-converting paid campaigns." },
  { icon: ShoppingCart, title: "E-commerce Marketing", desc: "Learn strategies to grow online stores and drive product sales through digital channels." },
  { icon: Bot, title: "AI in Digital Marketing", desc: "Work with ChatGPT for Digital Marketing Course, automation tools, and AI workflows." },
  { icon: FileText, title: "Content Marketing", desc: "Learn AI Content Creation & Prompt Engineering for blogs, ads, and creatives."},
  { icon: BarChart3, title: "Web Analytics", desc: "Analyze user behavior with Google Analytics and track performance effectively." },
];

const CurriculumSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="curriculum"
    className="relative pt-16 pb-24 overflow-hidden"

      style={{
        background: `
  radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)
`,

      }}
    >
      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:120px_100%]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8" ref={ref}>
        
      {/* Heading */}
<div
  className={`text-center mb-16 transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <span className="text-sm tracking-widest text-gray-400 uppercase">
    Courses
  </span>

  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
    Our AI Digital Marketing Course Covers
  </h2>

  <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
    Master modern marketing with our Digital Marketing Course with AI Tools, including:
  </p>
</div>


        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className={`flex items-start gap-4 p-6 rounded-2xl 
            bg-gradient-to-br from-[#2a2a2a]/90 to-[#1a1a1a]/90
border border-white/10
backdrop-blur-md

              hover:border-white/30
              hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
              hover:scale-[1.02]
              transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms",
              }}
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <m.icon className="h-6 w-6 text-gray-200" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {m.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "1100ms" : "0ms" }}
        >
     <a
  href="/brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg text-base transition hover:scale-105 inline-block"
>
  Download Brochure
</a>

        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
