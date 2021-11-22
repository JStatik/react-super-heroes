import React from 'react';
import PropTypes from 'prop-types';
import { Logo, LogoContainer, MainContainer } from '../styles/Loading';

const Loading = React.memo(({ isComponent, widthContainer }) => {
    return (
        <MainContainer
            isComponent={isComponent || false}
            widthContainer={widthContainer || false}
        >
            <LogoContainer>
                <Logo
                    alt="SuperHeroes"
                    src="/super-heroes.png"
                />
            </LogoContainer>
        </MainContainer>
    );
});

Loading.displayName = 'Loading';

Loading.propTypes = {
    isComponent: PropTypes.bool,
    widthContainer: PropTypes.bool
};

export default Loading;
