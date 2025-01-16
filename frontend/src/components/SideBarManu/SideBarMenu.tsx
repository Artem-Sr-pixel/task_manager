import {  Route, Routes } from 'react-router-dom'
import st from './SideBarMenu.module.css'

interface SideBarMenuProps {
    userName:string
}

function SideBarMenu({userName}:SideBarMenuProps) {
    return(
        <div className={st.mainWrap}>
            <div className={st.mainInfo}>
                {userName}
            </div>

            <div className={st.tasksNavigation}>
                <Routes>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route path='*' />
                </Routes>
            </div>
        </div>
    )
}

export default SideBarMenu