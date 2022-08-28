import images from "../helpers/images";

function Work() {
  return (
    <section className="work">
      <h2 className="work__h2">We’re different</h2>
      <div className="work__cards">
        <div className="work__card">
          <img
            src={images["snappy-process"]}
            alt="snappy-process"
            className="work__img"
          />
          <h3 className="work__h3">Snappy Process</h3>
          <p className="work__p">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="work__card">
          <img
            src={images["affordable-prices"]}
            alt="affordable-prices"
            className="work__img"
          />
          <h3 className="work__h3">Affordable Prices</h3>
          <p className="work__p">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="work__card">
          <img
            src={images["people-first"]}
            alt="people-first"
            className="work__img"
          />
          <h3 className="work__h3">People First</h3>
          <p className="work__p">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
      <div className="work__div">
        <h4>
        Find out more about how we work
        </h4>

        <a href="#" className="work__a">How we work</a>
      </div>
    </section>
  );
}

export default Work;
