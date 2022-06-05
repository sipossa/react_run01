import { useRef, useState } from "react";
import Hangman from "./Hangman";
import Section01 from "./Section01";
import Tabmenu from "./Tabmenu";
export default function Head({ ...props }) {
    const lnk = useRef(null);

    const TOGGLE = (e) => {
        lnk.current.classList.toggle('on');
    }

    const [cls, setcls] = useState('on');

    const TOGGLECLASS = () => {
        setcls(cls === 'on' ? null : 'on')
    }

    return (
        <>
            <header className="header" ref={lnk} onClick={TOGGLE}>
                나는 {props.name} {props.이름}해드이지롱~
            </header>
            <nav className={cls} onClick={TOGGLECLASS}>
                clsaa 바꾸기
            </nav>
            {/* <Hangman word="react" /> */}
            <Section01 />

        </>
    )
}