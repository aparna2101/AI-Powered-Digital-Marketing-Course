const CourseStructure = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0e2a3f] via-[#0c2436] to-[#0a1d2b] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Top Heading Row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why{" "}
              <span className="text-orange-400">
                Dizi Global Solution
              </span>{" "}
              Stands Out?
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don’t just teach marketing — we build
               <span className="text-white font-semibold"> AI-ready digital careers</span>. 
              With placement support, hands-on learning, and the latest tools, we prepare you to succeed in today’s competitive digital world.
            </p>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 mb-12"></div>

        {/* 4 Columns Section */}
        <div className="space-y-12">

          {/* Item 1 */}
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-10">
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold">
                Learn from the Best
              </h3>
            </div>

            <div className="md:col-span-2 text-gray-300">
              Industry experts deliver Advanced Digital Marketing with AI knowledge,
              real strategies, and practical business case studies.
            </div>

          </div>

          {/* Item 2 */}
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-10">
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold">
                Hands-On Live Projects
              </h3>
            </div>

            <div className="md:col-span-2 text-gray-300">
              Work on real campaigns using Generative AI and performance marketing tools 
              to gain job-ready practical experience.
            </div>

          </div>

          {/* Item 3 */}
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-10">
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold">
                Future-Ready Skills
              </h3>
            </div>

            <div className="md:col-span-2 text-gray-300">
              Master Digital Marketing Automation with AI and performance-driven 
              systems designed for modern marketing professionals.
            </div>

          </div>

          {/* Item 4 */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-2xl font-semibold">
                100% Job Placement Assistance
              </h3>
            </div>

            <div className="md:col-span-2 text-gray-300">
              Get trained for high-demand roles through AI Performance Marketing training 
              with structured career guidance and placement support.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseStructure;
