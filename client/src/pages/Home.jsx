import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <header className="text-center py-10 bg-blue-600 text-white shadow-md">
        <h1 className="text-4xl font-bold">Larry Mwimali</h1>
        <p className="text-xl">Full-Stack Developer</p>
      </header>
      <section className="py-10 px-5 md:px-20 bg-red-100">
        <h2 className="text-3xl font-semibold border-b-2 border-red-300 pb-2">
          About Me
        </h2>
        <p className="mt-5 text-lg">
          I am a full-stack developer with experience in web development such
          that I can develop any website using various programming languages
          such as HTML, CSS, JavaScript, Python. I can also use tools such as
          React, React Native, Tailwind CSS.
        </p>
      </section>
      <section className="py-10 px-5 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-300 pb-2">
          Skills
        </h2>
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-blue-200 p-4 rounded shadow">HTML/CSS</li>
          <li className="bg-blue-200 p-4 rounded shadow">JavaScript</li>
          <li className="bg-blue-200 p-4 rounded shadow">React</li>
          <li className="bg-blue-200 p-4 rounded shadow">Python</li>
          <li className="bg-blue-200 p-4 rounded shadow">React Native</li>
          <li className="bg-blue-200 p-4 rounded shadow">Figma</li>
          <li className="bg-blue-200 p-4 rounded shadow">Firebase</li>
        </ul>
      </section>
      <section className="py-10 px-5 md:px-20 bg-red-100">
        <h2 className="text-3xl font-semibold border-b-2 border-red-300 pb-2">
          Projects
        </h2>
        <div className="mt-5 space-y-5">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-2xl font-semibold">Blood Donors</h3>
            <p className="mt-2">
              Blood donors is an application that helps reduce the tedious
              process during blood donation since it involves a lot of paperwork
              and other physical activities. The storage of the donor’s
              information is manual causing time wastage. So the application
              provides a cleaner way to store and get the information at ease.
            </p>
            <a
              href="#"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-2xl font-semibold">Trip Navigator</h3>
            <p className="mt-2">
              Trip navigator helps solve the problem that is caused mainly
              during holidays whereby one gets a hard time just to get a
              suitable leisure activity for his or her holiday (one which is not
              outdated) and get the exact dates for the trip through a given
              period.
            </p>
            <a
              href="#"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-2xl font-semibold">Movers</h3>
            <p className="mt-2">
              It's a relocation app that helps ease the fatigue of moving from
              one place to another.
            </p>
            <a
              href="https://larry6033.github.io/movers/"
              target="https://larry6033.github.io/movers/"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-2xl font-semibold">Pizzarra Deliveries</h3>
            <p className="mt-2">
              Pizzarra deliveries is an e-commerce application that helps you
              shop for a preferred variety of pizza from our menu. We offer
              delivery for every order you make, and it gets to you in minutes
              in perfect temperatures.
            </p>
            <a
              href="https://larry6033.github.io/pizzaara_deliveries/"
              target="https://larry6033.github.io/pizzaara_deliveries/"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
      <section className="py-10 px-5 md:px-20 bg-red-100">
        <h2 className="text-3xl font-semibold border-b-2 border-red-300 pb-2">
          Contact
        </h2>
        <p className="mt-5">
          Email:{" "}
          <a
            href="mailto:larrymwimali@gmail.com"
            className="text-blue-500 hover:underline"
          >
            larrymwimali@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/larry-mwimali-741835318/"
            target="https://www.linkedin.com/in/larry-mwimali-741835318/"
            className="text-blue-500 hover:underline"
          >
            yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/larry6033"
            target="https://github.com/larry6033"
            className="text-blue-500 hover:underline"
          >
            yourprofile
          </a>
        </p>
      </section>
    </div>
  );
}

export default Home;
