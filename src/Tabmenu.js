import { useRef, useState } from "react";

const Tabmenu = () => {
    const listData = [
        { id: 1, title: "menu01", content: "content01" },
        { id: 2, title: "menu02", content: "content02" },
        { id: 3, title: "menu03", content: "content03" },
    ];
    //const [tab, setTab] = useState([]);
    const TG = useRef([])
    const TabMENU = () => {
        TG.current.forEach(element => {
            element.classList.add('on')
        });
    }
    const tabItems = [...listData];
    const Tablist = tabItems.map((tabItem, idx) =>
        <li key={tabItem.id} ref={TG} onClick={TabMENU}>{tabItem.title}</li>
    );
    const Tabcontent = tabItems.map((tabItem, idx) =>
        <li key={tabItem.id} ref={TG}>{tabItem.content}</li>
    );
    return (
        <>
            <ul>
                {Tablist}
            </ul>
            <ul>
                {Tabcontent}
            </ul>
        </>

    )
}
export default Tabmenu;