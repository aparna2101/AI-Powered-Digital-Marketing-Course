import { useEffect, useState } from "react";


const Success = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200); // small delay for animation effect
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden">

      <div
        className={`text-center transition-all duration-700 ease-out ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-10"
        }`}
      >
        <img
          src="/logocompanydizi.png" 
          alt="Success"
         className="w-40 md:w-52 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold mt-8">
          Congratulations on embarking on your journey!
        </h1>

        <p className="text-gray-600 mt-4">
          Simply click the link below to access your brochure.
        </p>

    <a
  href="/brochure.pdf"
  download
  className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-md font-semibold hover:scale-105 transition-all duration-300"
>
  DOWNLOAD NOW
</a>


      </div>
    </div>
  );
};

export default Success;
