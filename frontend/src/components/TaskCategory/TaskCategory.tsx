import Task from '../Task/Task';
import st from './TaskCategory.module.css'


interface TaskCategoryProps{
    title: string,
}


function TaskCategory({title}: TaskCategoryProps) {
  return (
    <div className={`${st.taskTitle} ${st.taskToday}`}>
      <h2>{title}</h2>
      <Task text="" date="20-12-2022" />
    </div>
  );
}

export default TaskCategory;
