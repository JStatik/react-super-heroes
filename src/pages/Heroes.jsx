import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { List } from 'antd';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import { SET_HEROES } from '../redux/slices/heroesSlice';
import { selectHeroesIds } from '../redux/selectors/heroesSelectors';
import { HeaderList } from '../components/Heroes/HeaderList';
import { HeroesContainer, MainContainer } from '../styles/Heroes';

const HeroItem      = React.lazy(() => import('../components/Heroes/HeroItem'));
const LikeButton    = React.lazy(() => import('../components/Heroes/LikeButton'));
const ViewButton    = React.lazy(() => import('../components/Heroes/ViewButton'));

const Heroes = () => {
    const { heroesSearch } = useParams();

    const dispatch = useDispatch();
    const heroesIds = useSelector(selectHeroesIds);

    const conditionFetch = (heroesIds.length <= 0);
    const { data, error, loading } = useFetch(conditionFetch, `/search/${ heroesSearch }`);

    useEffect(() => {
        if(data) {
            const heroes = data.map(hero => {
                return {
                    ...hero,
                    likes: 0,
                    image: hero.image.url
                };
            });

            dispatch(SET_HEROES(heroes));
        }
    }, [dispatch, data]);

    if(error) return <Redirect to="/" />;

    if(loading) return <Loading isComponent />;

    return (
        <MainContainer className="animate__animated animate__fadeIn">
            <HeaderList />

            <HeroesContainer>
                <Suspense
                    fallback={
                        <Loading
                            isComponent
                            widthContainer
                        />
                    }
                >
                    <List
                        size="large"
                        itemLayout="vertical"
                        dataSource={heroesIds}
                        className="animate__animated animate__fadeIn animate__faster"
                        renderItem={heroId => (
                            <List.Item
                                key={heroId}
                                actions={[
                                    <ViewButton
                                        key={0}
                                        heroId={heroId}
                                    />,
                                    <LikeButton
                                        key={1}
                                        heroId={heroId}
                                    />
                                ]}
                            >
                                <HeroItem heroId={heroId} />
                            </List.Item>
                        )}
                    />
                </Suspense>
            </HeroesContainer>
        </MainContainer>
    );
};

export default Heroes;
