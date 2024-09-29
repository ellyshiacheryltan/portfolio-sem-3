import { WorksList } from "../constants/WorksPage";
import { useParams } from "react-router-dom";
import GlassContainer from "./GlassContainer";

const WorkDetail = () => {
  const workTitle = useParams();
  const workContent = WorksList.filter((item) => item.url === workTitle.url);

  return (
    <>
      {workContent.map((item) => (
        <GlassContainer>
          <div className="w-[21rem] p-4">
            <h2 className="h2 uppercase text-[2rem] pb-5">{item.title}</h2>
            <img src={item.coverImage} className="w-[300px] h-auto mb-5" />
            <h4 className="h4 uppercase text-[1rem] opacity-75 leading-none">
              Project
            </h4>
            <h3 className="h3 uppercase text-[1.75rem] border-b-[1.75px] border-x-0 border-t-0 border-color-2 border-opacity-50 mb-5">
              {item.project}
            </h3>
            <h4 className="h4 uppercase text-[1rem] opacity-75 leading-none">
              Client
            </h4>
            <h3 className="h3 uppercase text-[1.75rem]">{item.client}</h3>
          </div>
        </GlassContainer>
      ))}
    </>
  );
};

export default WorkDetail;
