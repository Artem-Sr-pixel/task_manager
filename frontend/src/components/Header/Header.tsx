import { Link } from 'react-router-dom'
import st from './Header.module.css'

function Header() {
    return(
        <header>
            <div className='container'>
                <div className={st.navWrap}>
                    <Link to={'/'}><h1 className={st.logo}>Task_manager</h1></Link>
                    <Link to={'/Authorization'} className={st.singInBtn}>Войти</Link>
                </div>
                
            </div>
        </header>
    )
}

export default Header