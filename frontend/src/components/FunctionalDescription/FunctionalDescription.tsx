import st from './FunctionalDescription.module.css'
import arrowDown from '../../images/arrow_down.svg'
import { useState } from 'react';

interface FunctionlDescriptionProps {
    title:string,
    desc:string
}


function FunctionlDescription({ title, desc }: FunctionlDescriptionProps) {

    const [isVisible, setIsVisible] = useState(false);

    const handleUnwrap = () => {
        setIsVisible(!isVisible);
    };
    
    return(
        <div className={st.contentWrap} onClick={handleUnwrap}>
            <div className={st.blockTitleWrap}>
                <h3 className={st.blockTitle}>{title}</h3>
                <img src={arrowDown} alt="" className={`${st.arrow} ${isVisible ? st.rotated : ''}`}/>
            </div>
            
            <p className={`${st.blockDesc} ${isVisible ? st.visible : ''}`}>{desc}</p>
        </div>
    )
}

export default FunctionlDescription