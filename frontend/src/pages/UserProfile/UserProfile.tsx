import { Outlet } from 'react-router-dom'
import MainTasksArea from '../../components/MainTasksArea/MainTasksArea'
import SideBarMenu from '../../components/SideBarManu/SideBarMenu'
import st from './UserProfile.module.css'

function UserProfile() {
    return(
        <div className={st.mainWrap}>
            <div className={st.sideBarMenuWrap}>
                <SideBarMenu userName='MyUserName'/>
            </div>
            <div className={st.taskMenu}>
                <MainTasksArea/>
                {/* <Outlet/> */}
            </div>
        </div>
    )
}

export default UserProfile