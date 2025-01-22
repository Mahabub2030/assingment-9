
const About = () => {

  const features = [
    {
      title: "Engaging Vocabulary Games",
      description: "Play interactive games designed to make vocabulary learning fun and effective.",
      icon: "🎮",
    },
    {
      title: "Personalized Learning",
      description: "Tailored content based on your skill level and language learning goals.",
      icon: "🎯",
    },
    {
      title: "Track Your Progress",
      description: "Monitor your growth with detailed progress reports and analytics.",
      icon: "📊",
    },
    {
      title: "Community Challenges",
      description: "Compete with friends and learners worldwide in exciting challenges.",
      icon: "🌍",
    },
  ];
  return (
    <div className=" mx-auto pt-4">
      <div className="mt-24">
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-800">About Lingo Bingo</h2>
        <p className="text-lg text-gray-600 mt-3">
          Your ultimate companion for mastering vocabulary through fun and interactive experiences.
        </p>

        <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-white shadow-md border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-800 rounded-full mx-auto text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>

    </div>
  );
};

export default About;