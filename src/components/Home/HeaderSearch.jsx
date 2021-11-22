import React from 'react';
import { TitleForm } from '../../styles/Home';

export const HeaderSearch = React.memo(() => {
    return (
        <TitleForm>
            Buscador de super héroes
        </TitleForm>
    );
});

HeaderSearch.displayName = 'HeaderSearch';
