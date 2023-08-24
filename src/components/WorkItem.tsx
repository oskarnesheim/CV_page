import { useState } from "react";
import { IWorkExperienceItem } from "../../public/interfaces";

/* eslint-disable @typescript-eslint/no-unused-vars */
type WorkItemT = {
  item: IWorkExperienceItem;
};

function WorkItem({ item }: WorkItemT) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    console.log("toggleDetails");
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-row justify-between min-h-[100px] mb-10 border-solid border-l-4 border-b-4 pl-2 pb-2 ">
      <div className="w-[60%]">
        <div className="flex flex-row justify-between">
          <p>{item.position} </p>
          <p> ~ {item.company}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p>{item.duration}</p>
        </div>
        <div className="mt-6 ">
          <button
            onClick={() => toggleDetails()}
            className="hover:underline font-bold"
          >
            {!showDetails ? "Show details" : "Hide details"}
          </button>
          {showDetails && (
            <div className="mt-2 border-solid border-r-4 border-t-4 pr-2 pt-2">
              <p>{item.comment}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row">
        {item.company !== "Lovenskiold Handel AS / Maxbo Asker" ? (
          <img className="max-h-[100px]" src={item.logo} alt="" />
        ) : (
          <img className="max-w-[270px] max-h-[90px]" src={item.logo} alt="" />
        )}
      </div>
    </div>
  );
}

export default WorkItem;
