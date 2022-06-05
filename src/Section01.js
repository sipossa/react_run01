import React, { useRef, useEffect, useState } from "react";

function Section01() {
    const detail = [
        {
            id: 1,
            imageUrl: './img/lesedilarona01.jpg',
            txt: '스톤 그리고 색상들을 멋진 조합'
        },
        {
            id: 2,
            imageUrl: './img/lesedilarona02.jpg',
            txt: '스톤 그리고 색상들을 멋진 조합'
        },
        {
            id: 3,
            imageUrl: './img/lesedilarona03.jpg',
            txt: '스톤 그리고 색상들을 멋진 조합'
        }
    ];


    let containerRef = useRef(null);
    const [tabItem, setTab] = useState(null);

    const myEvent = (idx) => {
        console.log([...tabItem], idx);
        const tabItems = [...tabItem];
        tabItems.map(el => el.classList.remove('on'));
        tabItems[idx].classList.add('on')
    };

    useEffect(() => {
        setTab(containerRef.current.children);
    }, []);


    // const numIdx = (i) => {
    //     //const [navOpened, setNavOpened] = useState(false);
    //     //const navClassNames = navOpened ? "nav-links nav-active" : "nav-links";
    //     //console.log(i,nameInput.current,detailBox,containerRef.current.children[0].type);
    //     const ALLFIGURE = document.querySelectorAll('#content01 figure');
    //     [...ALLFIGURE].map(el=>el.classList.remove('on'));
    //     [...ALLFIGURE][i].classList.add('on');

    //    console.log([...ALLFIGURE],[...detail],[...detailBox][0])

    // }

    const detailBox = detail.map((el, idx) =>
    (
        <figure key={el.id}>
            <div className="case">
                <img src={el.imageUrl} alt={el.txt} />
            </div>
            <strong>{el.txt}</strong>
            <a href="#!" onClick={() => myEvent(idx)}>구매하기</a>
        </figure>
    )

    );
    return (
        <section id="content01">
            <h2>JEWELLERY COLLECTION</h2>
            <p>모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷</p>
            <div className="container" ref={containerRef}>
                {detailBox}
            </div>
        </section>
    );
}

export default Section01;