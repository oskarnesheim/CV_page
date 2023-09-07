import { useState } from "react";
import { IWorkExperienceItem } from "../../public/interfaces";

/* eslint-disable @typescript-eslint/no-unused-vars */
type WorkItemT = {
  item: IWorkExperienceItem;
};

function WorkItem({ item }: WorkItemT) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-row justify-between min-h-[100px] mb-10 p-2 border-solid border-l-4 border-b-4 pl-2 pb-2">
      <div className="w-full lg:w-[60%]">
        <div className="flex flex-row justify-between">
          <p>{item.position} </p>
          <p className="font-bold"> {item.company}</p>
        </div>
        <p className="underline text-sm text-gray-500">{item.duration}</p>
        <div className="mt-6 ">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="hover:underline font-bold"
          >
            {!showDetails ? "Show details ＋" : "Hide details －"}
          </button>
          {showDetails && (
            <div className="mt-2 ">
              <p>{item.comment}</p>
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:inline">
        {item.company !== "Maxbo Asker" ? (
          <img className="max-h-[100px]" src={item.logo} alt="" />
        ) : (
          <img className="max-w-[200px] max-h-[90px] " src={item.logo} alt="" />
        )}
      </div>
    </div>
  );
}

export default WorkItem;
