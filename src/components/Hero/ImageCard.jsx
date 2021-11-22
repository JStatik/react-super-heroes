import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Image } from 'antd';
import { selectHeroImage } from '../../redux/selectors/heroesSelectors';

const ImageCard = () => {
    const { heroId } = useParams();
    const heroImage = useSelector(state => selectHeroImage(state, heroId));

    return (
        <Image
            width="100%"
            alt="SuperHero"
            src={heroImage}
            fallback="/super-heroes.png"
            className="animate__animated animate__fadeIn animate__faster"
            placeholder={
                <Image
                    width="100%"
                    alt="SuperHero"
                    preview={false}
                    src="/super-heroes.png"
                    className="animate__animated animate__fadeIn animate__faster"
                />
            }
        />
    );
};

export default ImageCard;
