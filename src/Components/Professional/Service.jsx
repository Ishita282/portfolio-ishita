// src/components/professional/Services.jsx

const Services = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/40">
            <h3 className="text-2xl font-semibold">
              Frontend Development
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Modern React applications with responsive and immersive UI systems.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/40">
            <h3 className="text-2xl font-semibold">
              UI/UX Design
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Premium interfaces focused on clean visuals and user experience.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/40">
            <h3 className="text-2xl font-semibold">
              Full Stack Apps
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Backend APIs, authentication systems, and scalable web architecture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;