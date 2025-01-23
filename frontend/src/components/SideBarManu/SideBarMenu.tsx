import { Link } from "react-router-dom";
import st from "./SideBarMenu.module.css";
import { useState } from "react";

interface SideBarMenuProps {
  userName: string;
}

interface WorkSpace {
  id: number;
  name: string;
  color: string;
}

function SideBarMenu({ userName }: SideBarMenuProps) {
  const [workSpaces, setWorkSpace] = useState<WorkSpace[]>([]);
  const [newWorkSpaceName, setNewWorkSpaceName] = useState("");

  const colors = ["#FFCC99", "#abd3ab", "#99CCFF", "#FF9999", "#CC99FF"];

  const handleAddWorkSpace = () => {
    if (newWorkSpaceName.trim() === "") {
      alert("Введите навзание");
      return -1;
    }

    const newWorkSpace: WorkSpace = {
      id: Date.now(),
      name: newWorkSpaceName,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setWorkSpace([...workSpaces, newWorkSpace]);
    setNewWorkSpaceName("");
  };

  return (
    <div className={st.mainWrap}>
      <div className={st.mainInfo}>{userName}</div>

      <div className={st.tasksNavigation}>
        <h3 className={st.workSpaceTitle}>My Work Space's</h3>
        <div className={st.createWorkSpaceArea}>
          <button type="submit" onClick={handleAddWorkSpace}>
            +
          </button>
          <input
            type="text"
            placeholder="Create work space..."
            value={newWorkSpaceName}
            onChange={(e) => setNewWorkSpaceName(e.target.value)}
          />
        </div>
        <nav className={st.workSpacesNav}>
          {workSpaces.map((workSpace) => (
            <Link
              to={`/workspace/${workSpace.id}`}
              key={workSpace.id}
              className={st.workSpaceItem}
              
            >
              <div className={st.workSpaceIcon} style={{ backgroundColor: workSpace.color }}>
                {workSpace.name.charAt(0).toUpperCase()}
              </div>
              <div className={st.workSpaceName}>{workSpace.name}</div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBarMenu;
