import { useState } from "react";
import { IWorkExperienceItem } from "../../public/interfaces";

type OtherExperiencesItemT = {
  item: IWorkExperienceItem;
};

function OtherExperiencesItem({ item }: OtherExperiencesItemT) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    console.log("toggleDetails");
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-row justify-between min-h-[100px] mb-10  p-2 border-2 border-black">
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
            <div className="mt-2 ">
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

export default OtherExperiencesItem;
