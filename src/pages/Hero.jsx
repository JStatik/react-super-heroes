import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import Loading from './Loading';
import { selectHeroesIds } from '../redux/selectors/heroesSelectors';
import { CardsContainer, HeroContainer, MainContainer } from '../styles/Hero';

const ImageCard = React.lazy(() => import('../components/Hero/ImageCard'));
const InfoCard  = React.lazy(() => import('../components/Hero/InfoCard'));

const Hero = () => {
    const { heroesSearch } = useParams();
    const heroesIds = useSelector(selectHeroesIds);

    if(heroesIds.length <= 0) return <Redirect to={`/heroes/${ heroesSearch }`} />;

    return (
        <MainContainer>
            <Suspense fallback={<Loading isComponent />}>
                <HeroContainer>
                    <CardsContainer>
                        <ImageCard />

                        <InfoCard />
                    </CardsContainer>
                </HeroContainer>
            </Suspense>
        </MainContainer>
    );
};

export default Hero;
