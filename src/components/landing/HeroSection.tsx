import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import googleads from "@/assets/googleads.png";
import googleanalytics from "@/assets/googleanalytics.png";
import googlepage from "@/assets/googlepage.png";
import ahrefs from "@/assets/ahrefs.png";
import keyword from "@/assets/keyword.png";
import linkedin from "@/assets/linkedin.png";
import predis from "@/assets/predis.png";
import zoho from "@/assets/zoho.png";
import buzzsumo from "@/assets/buzzsumo.png";
import copymatic from "@/assets/copymatic.png";
import googletag from "@/assets/googletag.png";
import googletrends from "@/assets/googletrends.png";
import meta from "@/assets/meta.png";
import mxvdo from "@/assets/mxvdo.png";
import semrush from "@/assets/semrush.png";
import semscoop from "@/assets/semscoop.png";
import synthesia from "@/assets/synthesia.png";
import googleadsense from "@/assets/googleadsense.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const highlights = [
  "Learn from Industry Experts with 10+ Years of Experience",
  "Hands-on Training with 20+ Real-Time Projects",
  "100% Placement Assistance with Top Companies",
];

const HeroSection = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    time: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) e.name = "Name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10)
      e.phone = "Valid phone number required";

    if (!form.status) e.status = "Please select your status";
    if (!form.time) e.time = "Please select preferred time";

    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      try {
        const response = await fetch(
          "https://ai-digital-backend.onrender.com//api/leads/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              phone: form.phone,
              workingStatus: form.status,
              preferredTime: form.time,
            }),
          }
        );

        if (response.ok) {
          navigate("/success"); // redirect page
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        alert("Server error");
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[3px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <div className="flex-1 text-black">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Become Industry-Ready with{" "}
            <span className="text-primary">
              AI Powered Digital Marketing
            </span>{" "}
            Course
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Master the latest AI-driven marketing strategies, tools, and
            techniques with hands-on training from industry experts.
          </p>

          <ul className="space-y-4 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-base md:text-lg">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

{/* POWERFUL TOOLS */}
<div className="max-w-2xl">
  <p className="text-orange-500 font-semibold tracking-wider mb-4">
    POWERFUL TOOLS & TECHNOLOGIES
  </p>

 <div className="bg-gray-100 rounded-xl py-4 px-6 overflow-hidden">
  <div className="slider-track flex gap-12 items-center">
    
    <img src={googleads} className="h-10 object-contain" />
    <img src={googleadsense} className="h-10 object-contain" />
    <img src={googleanalytics} className="h-10 object-contain" />
    <img src={googlepage} className="h-10 object-contain" />
    <img src={googletag} className="h-10 object-contain" />
    <img src={googletrends} className="h-10 object-contain" />
    <img src={meta} className="h-10 object-contain" />
    <img src={linkedin} className="h-10 object-contain" />
    <img src={ahrefs} className="h-10 object-contain" />
    <img src={semrush} className="h-10 object-contain" />
    <img src={semscoop} className="h-10 object-contain" />
    <img src={keyword} className="h-10 object-contain" />
    <img src={predis} className="h-10 object-contain" />
    <img src={copymatic} className="h-10 object-contain" />
    <img src={buzzsumo} className="h-10 object-contain" />
    <img src={synthesia} className="h-10 object-contain" />
    <img src={mxvdo} className="h-10 object-contain" />
    <img src={zoho} className="h-10 object-contain" />

<img src={googleads} className="h-10 object-contain" />
    <img src={googleadsense} className="h-10 object-contain" />
    <img src={googleanalytics} className="h-10 object-contain" />
    <img src={googlepage} className="h-10 object-contain" />
    <img src={googletag} className="h-10 object-contain" />
    <img src={googletrends} className="h-10 object-contain" />
    <img src={meta} className="h-10 object-contain" />
    <img src={linkedin} className="h-10 object-contain" />
    <img src={ahrefs} className="h-10 object-contain" />
    <img src={semrush} className="h-10 object-contain" />
    <img src={semscoop} className="h-10 object-contain" />
    <img src={keyword} className="h-10 object-contain" />
    <img src={predis} className="h-10 object-contain" />
    <img src={copymatic} className="h-10 object-contain" />
    <img src={buzzsumo} className="h-10 object-contain" />
    <img src={synthesia} className="h-10 object-contain" />
    <img src={mxvdo} className="h-10 object-contain" />
    <img src={zoho} className="h-10 object-contain" />

  </div>
</div>

</div>

          
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

            <div className="bg-orange-500 text-white text-center py-4 font-semibold">
              Register Now & Get
            </div>

            <div className="text-center py-4">
              <p className="text-lg font-bold">Free Career Counseling</p>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-gray-500 text-sm text-center mb-6">
                Limited Time Offer – Expires in 24 Hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Enter Name *"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full h-11 px-4 border border-gray-300 rounded-md"
                />

                <input
                  type="email"
                  placeholder="Enter Email Address *"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full h-11 px-4 border border-gray-300 rounded-md"
                />

                <div>
                  <PhoneInput
                    country={"in"}
                    value={form.phone}
                    onChange={(phone) =>
                      setForm({ ...form, phone })
                    }
                    inputClass="!w-full !h-11 !border !border-gray-300 !rounded-md"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.target.value })
                  }
                  className="w-full h-11 px-4 border border-gray-300 rounded-md"
                >
                  <option value="">Select Working Status *</option>
                      <option value="student">10+2 Student</option>
            <option value="college">College Student</option>
            <option value="business">Business Owner</option>
            <option value="housewife">Housewife</option>
            <option value="graduate">Graduate - Not Working</option>
            <option value="working">Working Professional</option>
                </select>

                <select
                  value={form.time}
                  onChange={(e) =>
                    setForm({ ...form, time: e.target.value })
                  }
                  className="w-full h-11 px-4 border border-gray-300 rounded-md"
                >
                  <option value="">Select Preferred Time *</option>
                  <option>10 AM to 12 PM</option>
            <option>12 PM to 02 PM</option>
            <option>02 PM to 04 PM</option>
            <option>04 PM to 06 PM</option>
            <option>06 PM to 08 PM</option>
            <option>08 PM to 09 PM</option>
          </select>
                

                <button
                  type="submit"
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md"
                >
                  Submit & Get Free Counseling
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
