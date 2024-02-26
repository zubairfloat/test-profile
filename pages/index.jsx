import TypingAnimation from "@/src/components/TypingAnimation";

const MainHome = () => {
  return (
    <section id="home" className="home-banner-01">
      <div className="container">
        <div className="row full-screen align-items-center p-100px-tb">
          <div className="col-md-6">
            <div className="ht-text">
              <h6>Hello there...</h6>
              <h1>Muhammad Zubair</h1>
              <h2>
                I Am Passionate <TypingAnimation />
              </h2>
              <p>
                The namics of how users interact with interactive elements
                within a user interface flow chart based on container
                proportion.
              </p>
              <div className="btn-bar go-to">
                <a className="m-btn m-btn-theme" href="#work">
                  my work
                </a>
                <a className="m-btn m-btn-t-theme" href="#contactus">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="static/img/home-about.png" alt="image" />
          </div>
        </div>
      </div>
      {/* <div className="go-to go-to-next">
      <a href="#about">
        <span />
      </a>
    </div> */}
    </section>
  );
};

export default MainHome;
