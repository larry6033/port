function Contacts(){
    return(
        <>
              <section className="py-10 px-5 md:px-20 bg-red-100">
        <h2 className="text-3xl font-semibold border-b-2 border-red-300 pb-2">
          Projects
        </h2>
        <div className="mt-5 space-y-5">
          <div className="bg-white p-5 rounded shadow">
          <img src="src/assets/images/Screenshot from 2024-07-25 14-52-32.png" alt="Slider" />

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
          <img src="src/assets/images/Screenshot from 2024-07-25 15-04-53.png" alt="Slider" />

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
          {/* <div className="bg-white p-5 rounded shadow">
          <img src="src/assets/images/onboarding1.png" alt="Slider" />

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
          </div> */}
          <div className="bg-white p-5 rounded shadow">
          <img src="src/assets/images/Screenshot from 2024-07-25 14-55-39.png" alt="Slider" />

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

        </>
    )
}
export default Contacts