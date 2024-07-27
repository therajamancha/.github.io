import Header from "@/component/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-page">
        <section className="portfolio-hero-sec section-space" id="home">
          <div className="container">
            <div className="row">
              <div className="col--6--dsktp col--6--tblt col--12--mbl">
                <p>Hi there,</p>
                <h1>
                  I am <strong>Front End Developer</strong>
                </h1>
                <p>welcome to my Portfolio Website</p>
                <a href="#about" className="btn-primary">
                  About me
                </a>
                <div className="my-links">
                  <div>
                    <p>Email</p>
                    <a href="mailto:therajamancha@gmail.com">
                      therajamancha@gmail.com
                    </a>
                  </div>
                  <div>
                    <p>Phone</p>
                    <a href="tel:9265073002">9265073002</a>
                  </div>
                  <div>
                    <p>Location</p>
                    <p>Surat, Gujrat, India</p>
                  </div>
                </div>
              </div>
              <div className="col--6--dsktp col--6--tblt col--12--mbl">
                <Image
                  width="500"
                  height="500"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src="/img/raj-amancha-front-end-developer.png"
                  alt="raj-amancha-front-end-developer"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about-me-sec section-space" id="about">
          <div className="container">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
            <div className="about-wrapper">
              <div className="row">
                <div className="about-left">
                  <div className="about-img-wrap">
                    <Image
                      width="200"
                      height="200"
                      src="/img/raj-amancha-web-developer.png"
                      alt="Raj Amancha"
                    />
                  </div>
                </div>
                <div className="about-right">
                  <div className="about-content-wrap">
                    <div className="row">
                      <div className="about-half-col">
                        <p>
                          I am Raj Amancha, Web developer from Surat, Gujrat,
                          India.I have rich experience in website design and
                          building and customization, also I am good at
                          WordPress
                        </p>
                        {/* <a
                        href="./resume/RAJ AMANCHA-front-end-developer.pdf"
                        download=""
                        className="btn-primary"
                        >Download CV</a>  */}
                      </div>
                      <div className="about-half-col">
                        <div className="aboute-skill-wrap">
                          <div className="htmlProg ProgWidth">
                            <div className="p">
                              <p>html</p>
                              <p>95%</p>
                            </div>
                            <div className="pp">
                              <div className="skillDiv">
                                <span className="skillBar htmlBar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="cssProg ProgWidth">
                            <div className="p">
                              <p>Css3</p>
                              <p>70%</p>
                            </div>
                            <div className="pp">
                              <div className="skillDiv">
                                <span className="skillBar cssBar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="jsProg ProgWidth">
                            <div className="p">
                              <p>JavaScript</p>
                              <p>75%</p>
                            </div>
                            <div className="pp">
                              <div className="skillDiv">
                                <span className="skillBar jsBar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="reactProg ProgWidth">
                            <div className="p">
                              <p>React</p>
                              <p>60%</p>
                            </div>
                            <div className="pp">
                              <div className="skillDiv">
                                <span className="skillBar reactBar"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-sec section-space" id="service">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
            </div>
            <div className="row">
              <div className="col--4--dsktp col--6--tblt col--12--mbl">
                <div className="serv-box">
                  <h4>Web design</h4>
                  <p>
                    Nice and elegent,fully Coustomized Website at a Single Place
                  </p>
                </div>
              </div>
              <div className="col--4--dsktp col--6--tblt col--12--mbl">
                <div className="serv-box">
                  <h4>Web Development</h4>
                  <p>
                    Already developed website are being maintained with the best
                    problem solving approach
                  </p>
                </div>
              </div>
              <div className="col--4--dsktp col--6--tblt col--12--mbl">
                <div className="serv-box">
                  <h4>Graphic Design</h4>
                  <p>
                    I can Create InfoGraphic, Brochure, Poster, Catalog, Social
                    Media Post, UI/UX design etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-me-sec section-space" id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contect Me</h2>
            </div>
            <div className="row">
              <div className="col--4--dsktp col--4--tblt col--12--mbl">
                <div className="contect-title">
                  <h4>lets Talk About Evrything</h4>
                  <p>
                    {`Send me `}
                    <a href="mailto:therajamancha@gmail.com">email 👋</a>
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/therajamancha/"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/img/linkedin.png"
                          alt="linkdin"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/therajamancha"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/img/github.png"
                          alt="Gihub"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/therajamancha/"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/img/instagram.png"
                          alt="instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/therajamancha/"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/img/facebook.png"
                          alt="facebook"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col--8--dsktp col--8--tblt col--12--mbl">
                {/* <form className="form-submit" autoComplete="off">
                  <div className="row">
                    <div className="col--6--dsktp col--6--tblt col--12--mbl">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Your Name"
                        id="fname"
                        className="form-control"
                      />
                    </div>
                    <div className="col--6--dsktp col--6--tblt col--12--mbl">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        id="email"
                        className="form-control"
                      />
                    </div>
                    <div className="col--12--dsktp col--12--tblt col--12--mbl">
                      <input
                        type="text"
                        name="sub"
                        placeholder="Subject"
                        id="sub"
                        className="form-control"
                      />
                    </div>
                    <div className="col--12--dsktp col--12--tblt col--12--mbl">
                      <textarea
                        name="msg"
                        placeholder="Enter Message"
                        id="msg"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer footer-style-one">
        <div className="container">
          <p>Copyright © 2022 Raj Amancha. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
