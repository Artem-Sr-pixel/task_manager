import st from "./Task.module.css";
import dndIcon from "../../../public/dndIcon.svg";
import delIcon from "../../../public/deleteIcon.svg";
import { useState } from "react";

interface TaskProps {
  text: string;
  date: string;
}

function Task({ text, date }: TaskProps) {
  const [inputText, setInputText] = useState(text);
  const [priority, setPriority] = useState("Not specified"); // Текущий выбранный приоритет
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Состояние для открытия/закрытия меню

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority); // Устанавливаем новый приоритет
    setIsDropdownOpen(false); // Закрываем меню после выбора
  };

  const getPriorityCircleClass = () => {
    switch (priority) {
      case "High":
        return st.circleRed;
      case "Medium":
        return st.circleYellow;
      case "Low":
        return st.circleGreen;
      default:
        return st.circleGrey;
    }
  };

  return (
    <div className={st.task}>
      <img src={dndIcon} alt="Drag" className={st.dragIcon} />
      <input type="checkbox" className={st.checkbox} />
      <input
        type="text"
        onChange={handleInputChange}
        value={inputText}
        placeholder="Напишите задачу..."
        className={st.input}
      />

      <div className={st.priority}>
        {/* Кнопка для отображения текущего приоритета */}
        <button
          className={st.priorityButton}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={`${st.circle} ${getPriorityCircleClass()}`}></span>
          {priority}
        </button>
        {/* Выпадающее меню */}
        {isDropdownOpen && (
          <ul className={st.dropdownMenu}>
            <li onClick={() => handlePriorityChange("Not specified")}>
              <span className={`${st.circle} ${st.circleGrey}`}></span>Not
              specified
            </li>
            <li onClick={() => handlePriorityChange("High")}>
              <span className={`${st.circle} ${st.circleRed}`}></span>High
            </li>
            <li onClick={() => handlePriorityChange("Medium")}>
              <span className={`${st.circle} ${st.circleYellow}`}></span>Medium
            </li>
            <li onClick={() => handlePriorityChange("Low")}>
              <span className={`${st.circle} ${st.circleGreen}`}></span>Low
            </li>
          </ul>
        )}
      </div>

      <span className={st.taskDate}>{date}</span>
      <img src={delIcon} alt="Delete" className={st.deleteIcon} />
    </div>
  );
}

export default Task;
