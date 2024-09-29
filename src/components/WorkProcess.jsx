import { WorksList } from "../constants/WorksPage";
import { useParams } from "react-router-dom";
import GlassContainer from "./GlassContainer";

const WorkProcess = () => {
  const workTitle = useParams();
  const workContent = WorksList.filter((item) => item.url === workTitle.url);
  return (
    <>
      {workContent.map((item) => (
        <GlassContainer>
          <div className="w-[56rem]">
            <div className="flex items-center p-5 pt-7 pb-3 mx-3 justify-end">
              <h1 className="h1-1 px-3">Process</h1>
              <h1 className="h4 uppercase text-[2rem]">and</h1>
              <h1 className="h1-1 px-3">Results</h1>
            </div>
            <p className="mx-10 pb-5 text-[1rem]">{item.textOne}</p>

            {item.list && (
              <ul className="mx-15 pb-5 text-[.9rem]">
                {item.list.map((listItem) => (
                  <li className="list-disc">{listItem}</li>
                ))}
              </ul>
            )}

            <img
              src={item.imageOne}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageOne_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageOne_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />

            {item.textTwo && (
              <p className="mx-10 pb-5 text-[1rem]">{item.textTwo}</p>
            )}

            <img
              src={item.imageTwo}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageTwo_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageTwo_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            {item.textThree && (
              <p className="mx-10 pb-5 text-[1rem]">{item.textThree}</p>
            )}
            <img
              src={item.imageThree}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageThree_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageThree_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            {item.textFour && (
              <p className="mx-10 pb-5 text-[1rem]">{item.textFour}</p>
            )}
            <img
              src={item.imageFour}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageFour_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageFour_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            {item.textFive && (
              <p className="mx-10 pb-5 text-[1rem]">{item.textFive}</p>
            )}
            <img
              src={item.imageFive}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageFive_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageFive_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            {item.textSix && (
              <p className="mx-10 pb-5 text-[1rem]">{item.textSix}</p>
            )}
            <img
              src={item.imageSix}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageSix_A}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            <img
              src={item.imageSix_B}
              className="max-w-[815px] float-right mx-10 mb-5"
            />
            {item.iframe && (
              <iframe
                src={item.iframe}
                className="w-[800px] h-[450px] mx-10 mb-5"
              ></iframe>
            )}
            {item.document && (
              <object
                data={item.document}
                type="application/pdf"
                className="w-[800px] h-[500px] mx-10"
              ></object>
            )}
            {item.textLearned && (
              <>
                <h2 className="h2 mx-9 pb-3 pt-7 text-[2.5rem]">
                  What I Learned
                </h2>
                <p className="mx-10 pb-5 text-[1rem]">{item.textLearned}</p>
              </>
            )}
          </div>
        </GlassContainer>
      ))}
    </>
  );
};

export default WorkProcess;
