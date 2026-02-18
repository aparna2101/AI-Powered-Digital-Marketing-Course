const AboutSection = () => {
  return (
    <section className="bg-gray-100 pt-24">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Heading */}
          <div className="mb-10 max-w-3xl">
            <p className="text-xs tracking-[3px] text-gray-500 uppercase mb-3">
              ABOUT DIZI GLOBAL SOLUTION
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
              Best{" "}
              <span className="text-orange-500">
                AI Digital Marketing
              </span>
              <br />
              Institute in Varanasi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* LEFT CONTENT */}
            <div className="space-y-6 text-[16px] leading-relaxed text-gray-900">

              <p>
                Dizi Global Solution is a leading AI Digital Marketing Training Institute known
                for delivering practical, job-oriented education. Recognized as the Best AI
                Digital Marketing Institute in Varanasi, we empower learners with advanced
                skills in AI marketing strategy, automation, and analytics.
              </p>

              <p>
                Our programs focus on hands-on learning, ensuring students gain real
                industry exposure using AI tools for digital marketers and cutting-edge platforms.
              </p>

              <p>
                Our Future Ready Digital Marketing Course with AI combines practical learning,
                real-time projects, and advanced AI applications to help you stand out in the competitive digital world.
              </p>

             <a
  href="tel:+918470079475"
  className="bg-orange-500 text-white px-6 py-3 rounded-md 
             hover:bg-white hover:text-orange-500 
             border border-orange-500 
             transition duration-300 inline-block"
>
  Contact Us
</a>


            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-5 md:-mt-16">

              {/* LEFT BIG IMAGE */}
              <div className="row-span-2">
                <img
                  src="/image1.jpg"
                  alt="Dizi Award"
                  className="rounded-2xl object-cover h-full w-full"
                />
              </div>

              {/* TOP RIGHT IMAGE */}
              <img
                src="/image2.jpg"
                alt="Dizi Certificate"
                className="rounded-2xl object-cover h-60 w-full"
              />

              {/* BOTTOM RIGHT IMAGE */}
              <img
                src="/image3.jpg"
                alt="Dizi Recognition"
                className="rounded-2xl object-cover h-60 w-full"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
