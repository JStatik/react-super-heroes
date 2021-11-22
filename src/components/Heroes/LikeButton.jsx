import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import { ADD_LIKE_HERO } from '../../redux/slices/heroesSlice';
import { selectHeroLikes } from '../../redux/selectors/heroesSelectors';
import { primaryColor } from '../../styles/GlobalStyles';

const LikeButton = React.memo(({ heroId }) => {
    const dispatch = useDispatch();
    const heroLikes = useSelector(state => selectHeroLikes(state, heroId));

    const handleLike = () => dispatch(ADD_LIKE_HERO(heroId));
    
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
