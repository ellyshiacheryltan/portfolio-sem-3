import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { WorksList } from "../constants/WorksPage";
import workDetailArrow from "../assets/workDetailArrow.svg";

const WorksListComponent = () => {
  const outcomeURL = useParams();
  const works = WorksList.filter((item) => item.outcome === outcomeURL.outcome);

  return (
    <ul className="w-full grid justify-items-center">
      {works.map((item) => (
        <li className="flex group w-[85%] my-4 border-[2px] border-x-0 border-t-0 border-b-color-2 border-opacity-50">
          <Link
            to={`WorkDetailPage/${item.url}`}
            key={item.id}
            className="flex group w-full"
          >
            <h2 className="h2 uppercase py-3.5 mx-5 pl-3 opacity-80">{item.title}</h2>
            <img
              src={workDetailArrow}
              className="w-6 opacity-0 grid self-start pt-6 group-hover:opacity-95 transition-opacity ease-in-out duration-200"
            />
          </Link>

          <img src={item.coverImage} className="w-[320px] h-auto rounded-[1rem] absolute right-[13rem] translate-y-[-4rem] opacity-0 group-hover:opacity-90 transition-opacity ease-in-out duration-200"/>
        </li>
      ))}
    </ul>
  );
};

export default WorksListComponent;
