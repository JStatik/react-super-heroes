import React from 'react';
import { useParams } from 'react-router';
import { Image } from 'antd';
import useHeroesStore from '../../zuztand/stores/heroesStore';
import { selectHeroImage } from '../../zuztand/selectors/heroesSelectors';

const ImageCard = () => {
    const { heroId } = useParams();
    const heroImage = useHeroesStore(state => selectHeroImage(state, heroId));

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
