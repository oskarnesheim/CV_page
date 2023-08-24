import { IEducationItem } from "../../public/interfaces";

/* eslint-disable @typescript-eslint/no-unused-vars */
type EducationItem = {
  item: IEducationItem;
};

function EducationItem({ item }: EducationItem) {
  return (
    <div className="flex flex-row justify-between min-h-[100px] mb-10 border-solid border-l-4 pl-2">
      <div className="w-[60%]">
        <div className="flex flex-row justify-between">
          <p>{item.degree} </p>
          <p> ~ {item.institution}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p>{item.year}</p>
          <p>Grade {item.grade}</p>
        </div>
      </div>
      <div className="flex flex-row">
        <img className="max-h-[100px]" src={item.logo} alt="" />
      </div>
    </div>
  );
}

export default EducationItem;
