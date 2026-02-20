export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918470079475"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
        <div className="bg-[#25D366] hover:scale-110 
      w-14 h-14 rounded-full 
      flex items-center justify-center 
      shadow-xl transition-all duration-300">

        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.2 4.9 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.8 0-7.2 5.9-13.1 13.1-13.1S29 8.8 29 16s-5.9 13-13 13z"/>
        </svg>

      </div>
    </a>
  );
}