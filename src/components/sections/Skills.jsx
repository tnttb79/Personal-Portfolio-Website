import "./sections.scss";
import { skills } from "../../config/portfolio";

const Skills = () => {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <div className="skill-group" key={group.group}>
          <div className="group-name">{group.group}</div>
          <ul>
            {group.items.map((item, i) => {
              const last = i === group.items.length - 1;
              return (
                <li key={item}>
                  <span className="tree">{last ? "└──" : "├──"}</span>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
