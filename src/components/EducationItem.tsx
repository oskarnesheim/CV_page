import { IEducationItem } from "../../public/interfaces";

/* eslint-disable @typescript-eslint/no-unused-vars */
type EducationItem = {
  item: IEducationItem;
};

function EducationItem({ item }: EducationItem) {
  return (
    <div className="flex flex-row justify-between min-h-[100px] mb-10 border-solid border-l-4 border-b-4 pl-2 pb-2">
      <div className="w-full md:w-[60%]">
        <div className="flex flex-row justify-between mb-2">
          <p>{item.degree} </p>
          <p className="font-bold">{item.institution}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="underline text-sm text-gray-500">{item.year}</p>
          <p>Grade {item.grade}</p>
        </div>
      </div>
      <div className="hidden md:inline">
        <img className="max-h-[100px]" src={item.logo} alt="" />
      </div>
    </div>
  );
}

export default EducationItem;
