import { useRef, useState } from "react";

const Hangman = ({ word }) => {
    const WORDLIST = [...word].map(
        words => <span key={words.toString()}>{words}</span>
    );
    const [addClass, setAddClass] = useState('');
    const tg = useRef(null);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,

        afterChange: () => {
            tg.current.classList.remove('on');
            if (tg.current.classList.contain('slick-current')) {
                tg.current.classList.add('on')
            }
        }
    };

    return (
        <section className="slider"  {...settings}>
            <div className={addClass} ref={tg}>{WORDLIST}</div>
            <div className={addClass} ref={tg}>{WORDLIST}</div>
        </section>

    )
}

export default Hangman;