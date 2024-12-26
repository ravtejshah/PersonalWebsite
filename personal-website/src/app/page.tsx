import Head from "next/head";
import Image from "next/image";
import Template from "./template"; // Assuming Template.tsx is in the same directory

export default function Home() {
  return (
    <Template>
      <div className="min-h-screen bg-white text-gray-900">
        <Head>
          <title>Ravtej Shah Singh - Portfolio</title>
          <meta name="description" content="Personal portfolio of Ravtej Shah Singh" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <header className="bg-gray-100 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center p-6">
            <h1 className="text-4xl font-extrabold text-gray-900">Ravtej Shah Singh</h1>
            <nav className="space-x-6 flex items-center">
              <a
                href="https://github.com/ravtejshah"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Image
                  src="/github-icon.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/Ravtej"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-8 space-y-16">
          {/* Intro Section */}
          <Template animateFromRight>
            <section id="intro" className="text-center bg-gray-100 p-8 rounded-lg shadow-lg">
              <Image
                src="/profile.gif"
                alt="Ravtej Shah Singh"
                className="mx-auto rounded-full mb-6 shadow-lg hover:scale-105 transition-transform"
                width={250}
                height={250}
              />
              <h2 className="text-5xl font-bold text-gray-800">Hi, I&#39;m Ravtej!</h2>
              <p className="mt-4 text-xl text-gray-700 leading-relaxed">
                A passionate developer with expertise in software engineering and a
                love for building innovative solutions.
              </p>
            </section>
          </Template>

          {/* About Section */}
          <Template animateFromLeft>
            <section id="about" className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-extrabold text-gray-800">About Me</h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                I am a <span className="font-semibold text-blue-600">Computer Science and Economics</span>
                student at the University of Toronto with a strong academic
                background and professional experience in software development. I
                enjoy solving complex problems and learning new technologies.
              </p>
            </section>
          </Template>

          {/* Experience Section */}
          <Template animateFromRight>
            <section id="experience" className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-extrabold text-gray-800">Experience</h3>
              <ul className="mt-6 space-y-6">
                <li className="transition hover:bg-gray-200 p-4 rounded">
                  <h4 className="text-2xl font-semibold text-blue-600">
                    Software Engineering Intern at FeOOH
                  </h4>
                  <p className="text-md text-gray-500">April 2022 – Sept 2022</p>
                  <p className="mt-2 text-lg text-gray-700">
                    Implemented features for web and mobile apps using React and
                    React Native, and explored advanced topics like LIDAR depth
                    detection and Git internals.
                  </p>
                </li>
              </ul>
            </section>
          </Template>

          {/* Projects Section */}
          <Template animateFromBottom>
            <section id="projects" className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-extrabold text-gray-800">Projects</h3>
              <ul className="mt-6 space-y-6">
                <li className="transition hover:bg-gray-200 p-4 rounded">
                  <h4 className="text-2xl font-semibold text-blue-600">CommUTM</h4>
                  <p className="text-lg text-gray-700">
                    A rideshare app for university students, built using React
                    Native and Django, featuring user profiles, ride scheduling,
                    and pricing algorithms.
                  </p>
                </li>
                <li className="transition hover:bg-gray-200 p-4 rounded">
                  <h4 className="text-2xl font-semibold text-blue-600">Ticket to Ride</h4>
                  <p className="text-lg text-gray-700">
                    A digital board game implemented with Java, showcasing
                    full-stack development skills in a collaborative environment.
                  </p>
                </li>
              </ul>
            </section>
          </Template>
        </main>

        <footer className="text-center p-6 bg-gray-200 text-gray-900">
          <p className="text-lg">&copy; 2024 Ravtej Shah Singh. All rights reserved.</p>
        </footer>
      </div>
    </Template>
  );
}
