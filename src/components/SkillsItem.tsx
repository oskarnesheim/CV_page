/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skill, SkillDict } from "../../public/interfaces";

type SkillsItemType = {
  item: Skill;
};

function SkillsItem({ item }: SkillsItemType) {
  const SkillLevel = item.level;
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < item.level; i++) {
      stars.push(<img className="max-w-[20px]" src="Star.svg" alt="star" />);
    }
    return stars;
  };
  return (
    <div className="flex flex-row mb-10 border-solid border-l-4 border-b-4 pl-2 pb-2 justify-between">
      {item.name} - {SkillDict[SkillLevel]}
      <div className="flex flex-row">{generateStars()}</div>
    </div>
  );
}

export default SkillsItem;
