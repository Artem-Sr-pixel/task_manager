import { Link } from 'react-router-dom'
import st from './Header.module.css'
import { useState, useEffect } from 'react';

function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    return(
        <header>
            <div className='container'>
                <div className={st.navWrap}>
                    <Link to={'/'}><h1 className={st.logo}>Task_manager</h1></Link>
                    <div className={st.clock}>{formattedTime}</div>
                    <Link to={'/Authorization'} className={st.singInBtn}>Войти</Link>
                </div>
                
            </div>
        </header>
    )
}

export default Header