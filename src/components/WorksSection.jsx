import GlassContainer from "../components/GlassContainer";
import { Link } from "react-router-dom";

const WorksSection = () => {
  return (
    <ul className="md:grid md:grid-rows-3 md:grid-cols-2 md:gap-10">
      <h1 className="flex justify-around max-h-[136px]">
        <div className="">
          <h1 className="h1-1 text-[3rem] max-h-[4rem] pt-3">Check</h1>
          <h1 className="h1-1 text-[3.5rem] pt-1 tracking-[3px] uppercase">
            Out
          </h1>
        </div>
        <h1 className="h1-2 text-[8rem] py-10">My Works!</h1>
      </h1>
      <li className="flex justify-center md:col-start-2 md:max-w-[531px]">
        <GlassContainer>
          <Link
            to="/WorksPage/LearningOutcomeOne"
            className="p-[2rem] md:h-[136px]"
          >
            <h3 className="h3">
              LO1 - Conceptualize, design, and develop interactive media
              products
            </h3>
          </Link>
        </GlassContainer>
      </li>
      <li className="flex justify-center">
        <GlassContainer>
          <Link
            to="/WorksPage/LearningOutcomeTwo"
            className="p-[2rem] md:h-[136px] md:w-[531px]"
          >
            <h3 className="h3">LO2 - Transferable production</h3>
          </Link>
        </GlassContainer>
      </li>
      <li className="">
        <GlassContainer>
          <Link
            to="/WorksPage/LearningOutcomeThree"
            className="p-[2rem] md:h-[136px] md:w-[531px]"
          >
            <h3 className="h3">LO3 - Creative iterations</h3>
          </Link>
        </GlassContainer>
      </li>
      <li className="">
        <GlassContainer>
          <Link
            to="/WorksPage/LearningOutcomeFour"
            className="p-[2rem] md:h-[136px] md:w-[531px]"
          >
            <h3 className="h3">LO4 - Professional standards</h3>
          </Link>
        </GlassContainer>
      </li>
      <li className="">
        <GlassContainer>
          <Link
            to="/WorksPage/LearningOutcomeFive"
            className="p-[2rem] md:h-[136px] md:w-[531px]"
          >
            <h3 className="h3">LO5 - Personal leadership</h3>
          </Link>
        </GlassContainer>
      </li>
    </ul>
  );
};

export default WorksSection;
