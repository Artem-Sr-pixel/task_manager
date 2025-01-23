import st from './MainTasksArea.module.css'
import TaskCategory from '../TaskCategory/TaskCategory'
import { Outlet } from 'react-router-dom'

function MainTasksArea() {
    return(
        <div className={st.mainWrap}>
            <h1 className={st.workSpaceName}>TaskGroupName</h1>
            <TaskCategory title='Today'/>
            <TaskCategory title='Tomorrow'/>
            <TaskCategory title='On week'/>
            <TaskCategory title='Later'/>
            <TaskCategory title='Done'/>
        </div>
    )
}

export default MainTasksArea