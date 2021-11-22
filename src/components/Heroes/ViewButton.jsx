import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import { Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const ViewButton = React.memo(({ heroId }) => {
    const history = useHistory();
    const { heroesSearch } = useParams();

    const handleHero = () => history.push(`/hero/${ heroesSearch }/${ heroId }`);

    return (
        <Button onClick={handleHero}>
            <MoreOutlined />
        </Button>
    );
});

ViewButton.displayName = 'ViewButton';

ViewButton.propTypes = {
    heroId: PropTypes.string.isRequired
};

export default ViewButton;
