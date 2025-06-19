import About from "../About";
import AcademicBackground from "../AcademicBackground";
import Contact from "../Contact";
import Landingpage from "../Landingpage";
import Project from "../Project";
import Skill from "../Skill";

const Home = ({ brightNess}) => {
  return (
    <div>
      <Landingpage brightNess={brightNess} />

      <Skill brightNess={brightNess} />
      <Project brightNess={brightNess} />
      <AcademicBackground brightNess={brightNess} />
      <About brightNess={brightNess} />
      <Contact brightNess={brightNess} />
    </div>
  );
};
export default Home;
