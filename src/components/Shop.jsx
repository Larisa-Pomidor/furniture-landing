import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Input from 'react-bootstrap/Input';
import Stack from 'react-bootstrap/Stack';

const Shop = () => {
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
            <Container>
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <div className="sidebar__block">
                            <div className="sidebar__search">
                                <Input placeholder="Поиск..." />
                            </div>
                        </div>
                        <div className="sidebar__block">
                            <div className="sidebar__name">

                            </div>
                        </div>
                        <div className="sidebar__block sidebar__block_category">
                            <div className="sidebar__name">
                                Категории
                            </div>
                            <div className="sidebar__category-list">
                                <div className="sidebar__category-item">
                                    <div className="sidebar__category-name">

                                    </div>
                                    <div className="sidebar__category-amount">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop">
                    <div className="shop__inner">
                        <div className="shop__controll">
                            <div className="shop__show">

                            </div>
                            <div className="shop__sort">

                            </div>
                        </div>
                        <div className="shop__list">
                            <div className="shop__item">
                                <div className="shop__label"></div>
                                <div class="shop__image">
                                    <img src="" alt="" />
                                </div>
                                <div className="shop__data">
                                    <div className="shop__data-text">
                                        <div className="shop__data-name">

                                        </div>
                                        <div className="shop__data-price">

                                        </div>
                                    </div>
                                    <div className="shop__cart">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <use href={sprite + "#bag"} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop__pages">
                            <div className="shop__pages-item">

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Shop;