import { Skill } from "../data/skills";

export type SkillCardProps = {
  skill: Skill;
};
export function SkillCard({ skill }: SkillCardProps) {
  function onClick() {
    console.log("Hovered on " + skill.name);
  }

  return (
    <div
      onClick={onClick}
      className="p-4 transition-[background] hover:bg-zinc-200 dark:hover:bg-zinc-900
     cursor-pointer rounded-lg"
    >
      <img src={skill.imgSrc} alt={skill.name + " logo"} className="w-14 h-14" />
    </div>
  );
}
