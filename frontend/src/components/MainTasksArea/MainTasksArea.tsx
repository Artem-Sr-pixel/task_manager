import st from './MainTasksArea.module.css'
import TaskCategory from '../TaskCategory/TaskCategory'

function MainTasksArea() {
    return(
        <div className={st.mainWrap}>
            <TaskCategory title='Today'/>
            <TaskCategory title='Tomorrow'/>
            <TaskCategory title='On week'/>
            <TaskCategory title='Later'/>
            <TaskCategory title='Done'/>
        </div>
    )
}

export default MainTasksArea