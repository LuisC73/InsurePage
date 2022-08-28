import images from "../helpers/images";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__h1">Humanizing your insurance.</h1>
        <p className="home__p">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a href="#" className="home__a">View plans</a>
      </div>
      <figure className="home__figure">
        <img src={images["bg-desktop"]} alt="background" className="home__img"/>
      </figure>
    </section>
  );
}

export default Home;
