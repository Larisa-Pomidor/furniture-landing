import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import banner_1 from "../assets/img/banner-1.jpg";
import banner_2 from "../assets/img/banner-2.jpg";
import banner_3 from "../assets/img/banner-3.jpg";

import category_1 from "../assets/img/category-1.jpg";
import category_2 from "../assets/img/category-2.jpg";
import category_3 from "../assets/img/category-3.jpg";

const Home = () => {
    const [number, setNumber] = useState(1);
    const [gallery, setGallery] = useState(3);

    const nextGallery = () => {
        console.log(number)
        number === 3 ? setNumber(1) : setNumber(number + 1)
    }

    const prevGallery = () => {
        number === 1 ? setNumber(3) : setNumber(number - 1)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const backgroundUrl = (index) => {
        if (index === 1)
            return banner_1
        else if (index === 2)
            return banner_2
        else if (index === 3)
            return banner_3
    }

    useEffect(() => {
        setGallery(3);
        let timerId = setInterval(() => { setNumber(getRandomInt(3) + 1) }, 200);
        setTimeout(() => { clearInterval(timerId); }, 3000);

    }, []);

    return (
        <div className="main">
            <div className="home">
                <Container>
                    <div className="home__inner mt-3">
                        <div className="home__gallery position-relative">
                            {
                                [...Array(3)].slice(0).map((item, i) =>
                                    <Stack direction="horizontal"
                                        className={"home__item justify-content-center align-items-start pt-5 "
                                            + (number === (i + 1) ? "home__item_active" : '')}
                                        style={{ backgroundImage: `url(${backgroundUrl(i + 1)})` }} key={i}>
                                        <div className="home__text mt-5">
                                            <div className="home__uptitle text-center">
                                                Best sellers
                                            </div>
                                            <div className="home__title text-center">
                                                <span>Sofa</span> Collection
                                            </div>
                                        </div>
                                    </Stack>
                                )
                            }
                            <Stack direction="horizontal" gap={3} className="home__gallery-controll position-absolute">
                                <div className="home__controll-item home__prev" onClick={prevGallery}>◀</div>
                                <div className="home__gallery-number"><span>{"0" + number}</span> / {"0" + gallery}</div>
                                <div className="home__controll-item home__next" onClick={nextGallery}>▶</div>
                            </Stack>
                        </div>
                    </div>
                </Container >
            </div>
            <div className="category">
                <div className='category__inner'>
                    <Container>
                        <Stack direction="horizontal" gap={3} className="category__block justify-content-around">
                            <div className='category__item' style={{ backgroundImage: `url(${category_1})` }}>
                                <div className='category__name'>
                                    Lighting <span> - 12 products</span>
                                </div>
                            </div>
                            <div className='category__item' style={{ backgroundImage: `url(${category_2})` }}>
                                <div className='category__name'>
                                    Furniture <span> - 12 products</span>
                                </div>
                            </div>
                            <div className='category__item' style={{ backgroundImage: `url(${category_3})` }}>
                                <div className='category__name'>
                                    Decoration <span> - 12 products</span>
                                </div>
                            </div>
                        </Stack>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Home;