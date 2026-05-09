// src/components/professional/Contact.jsx

const Contact = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-black text-white rounded-[40px] p-12 text-center relative overflow-hidden">
          
          <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full" />

          <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-5xl font-bold">
              Let's Build Something Great
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              Open for freelance projects, collaborations,
              and frontend development opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
              
              <a
                href="mailto:ishitasharma2428@gmail.com"
                className="px-6 py-3 rounded-2xl bg-white text-black"
              >
                Email Me
              </a>

              <a
                href="https://github.com/Ishita282"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-white"
              >
                GitHub
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;