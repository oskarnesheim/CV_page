import { useState } from "react";
import { IProjectItem } from "../../public/interfaces";

/* eslint-disable @typescript-eslint/no-unused-vars */
type ProjectItemT = {
  item: IProjectItem;
};

// export interface IProjectItem {
//   name: string;
//   description: string;
//   link: string;
//   images: string[];
//   tags: string[];
// }

function ProjectItem({ item }: ProjectItemT) {
  const [showDetails, setShowDetails] = useState(false);

  function getTags() {
    return item.tags.map((tag) => (
      <span
        key={tag}
        className="inline-block px-2 py-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
      >
        {tag}
      </span>
    ));
  }

  function getImages(onlyFirst: boolean = false) {
    if (!onlyFirst) {
      return item.images.map((image) => (
        <img
          key={image}
          src={image}
          alt={image}
          className="mb-6 rounded-xl drop-shadow-2xl"
        />
      ));
    }
    return (
      <img
        key={item.images[0]}
        src={item.images[0]}
        alt={item.images[0]}
        className="rounded-xl shadow-2xl"
      />
    );
  }

  return (
    <div className="mb-10  p-2 border-solid border-l-4 border-b-4 pl-2 pb-2">
      <h1 className="font-bold text-2xl">{item.name}</h1>
      <div className="flex flex-row">{getTags()}</div>

      <div className="flex flex-row justify-between mt-10">
        {getImages(true)}
      </div>
      <div className="mt-6 ">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="hover:underline font-bold"
        >
          {!showDetails ? "Show details ＋" : "Hide details ﹣"}
        </button>
        {showDetails && (
          <div className="mt-2 ">
            <div className="mb-10">{item.description}</div>
            <div>{getImages()}</div>

            <button
              className="hover:underline font-bold"
              onClick={() => setShowDetails(!showDetails)}
            >
              Close ﹣
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
