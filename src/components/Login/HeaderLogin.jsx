import React, { Fragment } from 'react';
import { FormLogo, FormTitle } from '../../styles/Login';

export const HeaderLogin = React.memo(() => {
    return (
        <Fragment>
            <FormLogo
                alt="SuperHeroes"
                src="/super-heroes.png"
            />

            <FormTitle>
                Ingresa tus datos
            </FormTitle>
        </Fragment>
    );
});

HeaderLogin.displayName = 'HeaderLogin';
