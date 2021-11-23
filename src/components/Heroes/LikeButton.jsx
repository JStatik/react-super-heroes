import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import useHeroesStore from '../../zuztand/stores/heroesStore';
import { selectAddLikeHero, selectHeroLikes } from '../../zuztand/selectors/heroesSelectors';
import { primaryColor } from '../../styles/GlobalStyles';

const LikeButton = React.memo(({ heroId }) => {
    const addLikeHero   = useHeroesStore(selectAddLikeHero);
    const heroLikes     = useHeroesStore(state => selectHeroLikes(state, heroId));

    const handleLike = () => addLikeHero(heroId);
    
    return (
        <Badge
            count={heroLikes}
            style={{ backgroundColor: primaryColor }}
        >
            <Button onClick={handleLike}>
                <LikeTwoTone />
            </Button>
        </Badge>
    );
});

LikeButton.displayName = 'LikeButton';

LikeButton.propTypes = {
    heroId: PropTypes.string.isRequired
};

export default LikeButton;
