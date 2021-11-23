import React, { Suspense } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import useHeroesStore from '../zuztand/stores/heroesStore';
import Loading from './Loading';
import { selectHeroesIds } from '../zuztand/selectors/heroesSelectors';
import { CardsContainer, HeroContainer, MainContainer } from '../styles/Hero';

const ImageCard = React.lazy(() => import('../components/Hero/ImageCard'));
const InfoCard  = React.lazy(() => import('../components/Hero/InfoCard'));

const Hero = () => {
    const { heroesSearch } = useParams();
    const heroesIds = useHeroesStore(selectHeroesIds);

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
