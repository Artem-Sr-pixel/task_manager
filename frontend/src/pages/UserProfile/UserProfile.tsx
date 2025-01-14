import SideBarMenu from '../../components/SideBarManu/SideBarMenu'
import st from './UserProfile.module.css'

function UserProfile() {
    return(
        <div className={st.mainWrap}>
            <div className={st.sideBarMenuWrap}>
                <SideBarMenu/>
            </div>
            <div className={st.taskMenu}>

            </div>
        </div>
    )
}

export default UserProfile