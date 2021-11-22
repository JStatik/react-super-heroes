import React from 'react';
import { useParams } from 'react-router';
import { TitleHeroes } from '../../styles/Heroes';

export const HeaderList = React.memo(() => {
    const { heroesSearch } = useParams();

    return (
        <TitleHeroes>
            Búsqueda para: { heroesSearch }
        </TitleHeroes>
    );
});

HeaderList.displayName = 'HeaderList';
