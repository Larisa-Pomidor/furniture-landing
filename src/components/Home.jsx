import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import banner_1 from "../assets/img/banner-1.jpg";
import banner_2 from "../assets/img/banner-2.jpg";
import banner_3 from "../assets/img/banner-3.jpg";

const Home = () => {
    const [number, setNumber] = useState(1);
    const [gallery, setGallery] = useState(3);

    const nextGallery = () => {
        number == 3 ? setNumber(1) : setNumber(number + 1)
    }

    const prevGallery = () => {
        number == 1 ? setNumber(3) : setNumber(number - 1)
    }

    const backgroundUrl = (index) => {
        if (index == 1)
            return banner_1
        else if (index == 2)
            return banner_2
        else if (index == 3)
            return banner_3
    }

    useEffect(() => {
        setGallery(3);
    });

    return (
        <div className="home">
            <Container>
                <div className="home__inner mt-3">
                    <div className="home__gallery position-relative">
                        {
                            [...Array(3)].slice(0).map((item, i) =>
                                <Stack direction="horizontal"
                                    className={"home__item justify-content-center align-items-start pt-5 "
                                        + (number == (i + 1) ? "home__item_active" : '')}
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
        </div >
    );
}

export default Home;