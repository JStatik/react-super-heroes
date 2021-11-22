import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import useAuthStore from '../../zuztand/stores/authStore';
import { makeSelectUser } from '../../zuztand/selectors/authSelectors';
import { LogoutButton } from './Header/LogoutButton';
import { TitleHeader } from '../../styles/Dashboard';

const Header = React.memo(() => {
    const history = useHistory();

    const selectUser = makeSelectUser();
    const { name: nameUser } = useAuthStore(selectUser);

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
