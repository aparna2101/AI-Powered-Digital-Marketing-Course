import "./BottomCallBar.css";
import { Phone } from "lucide-react";


const BottomCallBar = () => {
  return (
    <div className="bottom-call-bar">
      <div className="bottom-container">
        
        {/* LEFT SIDE - LOGO */}
        <div className="bottom-logo">
          <img src="/logocompanydizi.png" alt="Company Logo" />
        </div>

{/* RIGHT SIDE - PHONE */}
<div className="text-right">
  <p className="text-black text-sm mb-1 font-medium">
    Call us now
  </p>

  <a
    href="tel:+918470079475"
    className="flex items-center justify-end gap-2 text-orange-500 font-semibold text-lg transition-colors duration-300 hover:text-black"
  >
    <Phone className="w-5 h-5 text-green-700" />
    +91 8470079475
  </a>
</div>


      </div>
    </div>
  );
};

export default BottomCallBar;
