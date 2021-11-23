import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Image, List } from 'antd';
import useHeroesStore from '../../zuztand/stores/heroesStore';
import { makeSelectHeroItem } from '../../zuztand/selectors/heroesSelectors';
import { InfoHero } from '../../styles/Heroes';

const HeroItem = React.memo(({ heroId }) => {
    const selectHeroItem = makeSelectHeroItem();

    const {
        heroName,
        heroImage,
        heroOccupation,
        heroDescription
    } = useHeroesStore(state => selectHeroItem(state, heroId));

    return (
        <Fragment>
            <List.Item.Meta
                title={heroName}
                description={heroDescription}
                avatar={
                    <Avatar
                        size={64}
                        shape="square"
                        src={heroImage}
                        alt="SuperHeroe"
                        draggable={false}
                        icon={
                            <Image
                                height="100%"
                                alt="SuperHero"
                                preview={false}
                                src="/super-heroes.png"
                                className="animate__animated animate__fadeIn animate__faster"
                            />
                        }
                    />
                }
            />

            <InfoHero>
                {heroOccupation}
            </InfoHero>
        </Fragment>
    );
});

HeroItem.displayName = 'HeroItem';

HeroItem.propTypes = {
    heroId: PropTypes.string.isRequired
};

export default HeroItem;
