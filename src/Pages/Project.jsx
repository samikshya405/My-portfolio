import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./project.css";
import client from "../assets/ecom-client.png";
import admin from "../assets/ecom-admin.png";
import movie from "../assets/movie.png";
import restaurant from "../assets/restaurant.png";
const Project = ({ brightNess }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Container
      className=" project"
      style={{ color: brightNess ? "black" : "white" }}
      id="project"
    >
      <h1 className="text-center custom-color py-5 my-5">My Latest Projects</h1>

      <div className="projectContainer">
        <div className="projectSection1 px-4">
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={client} alt="project_image" />
          </div>
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">FASHION STORE(Client)</h5>
            <p className="text-center" style={{ margin: 0 }}>
              Fashion Store is a full-fledged eCommerce application designed to
              cater to the diverse fashion needs of customers, offering a wide
              range of clothing, shoes, bags, and other fashion accessories for
              kids, males, and females.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>Firebase</div>
              <div>Material UI</div>
              <div>Redux</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/samikshya405/ecommerce-webapp-client.git"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://ecommerce-webapp-client.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projectSection2 px-4">
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">FASHION STORE(Admin Panel)</h5>
            <p className="text-center" style={{ margin: 0 }}>
              The Fashion Store Admin Panel is a comprehensive web application
              designed to streamline the management and administration of an
              eCommerce platform catering to a diverse range of fashion
              products. Key features includes product management, order
              management, user management , content management etc.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>Firebase</div>
              <div>Material UI</div>
              <div>Redux</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/samikshya405/ecomm-webapp-admin.git"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://onestoptreasureadmin.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={admin} alt="" />
          </div>
        </div>

        <div className="projectSection1 px-4">
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={movie} alt="" />
          </div>
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">TRAILER QUEST</h5>
            <p className="text-center" style={{ margin: 0 }}>
              Trailer Quest is a dynamic web application designed to provide
              users with a comprehensive platform for discovering and watching
              movie trailers. Leveraging the power of The Movie Database (TMDb)
              API, Trailer Quest offers users access to a vast library of movie
              trailers, ranging from the latest releases to trending, upcoming,
              top-rated, and popular movies.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>API</div>
              <div>Swiper js</div>
              <div>Redux</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/samikshya405/movie-trailer-project.git"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://trailerquest.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projectSection2 px-4">
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">OAK</h5>
            <p className="text-center" style={{ margin: 0 }}>
              The Oak Restaurant Web Application is a sophisticated online
              platform designed to enhance the dining experience for patrons of
              Oak Restaurant. With its elegant design, intuitive interface, and
              robust features, the Oak Restaurant Web App offers users a
              seamless way to explore the restaurant's menu, make reservations,
              order food for dine-in or takeout, and more.
            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>HTML</div>
              <div>CSS</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/samikshya405/oak-restaurant-website.git"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://oak-restaurant-website.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={restaurant} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
