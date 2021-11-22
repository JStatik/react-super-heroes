import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import { makeSelectUser } from '../../redux/selectors/authSelectors';
import { LogoutButton } from './Header/LogoutButton';
import { TitleHeader } from '../../styles/Dashboard';

const Header = React.memo(() => {
    const history = useHistory();

    const selectUser = makeSelectUser();
    const { name: nameUser } = useSelector(selectUser);

    const handleHome = () => history.push('/');

    return (
        <PageHeader
            subTitle={`Bienvenido, ${ nameUser }`}
            extra={<LogoutButton />}
            title={
                <TitleHeader
                    alt="SuperHeroes"
                    src="/super-heroes.png"
                    onClick={handleHome}
                />
            }
        />
    );
});

Header.displayName = 'Header';

export default Header;
