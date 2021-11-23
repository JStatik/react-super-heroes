import React from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';
import useHeroesStore from '../../zuztand/stores/heroesStore';
import { selectHeroById } from '../../zuztand/selectors/heroesSelectors';

const InfoCard = () => {
    const { heroId } = useParams();

    const hero = useHeroesStore(state => selectHeroById(state, heroId));
    const { biography, work, connections } = hero;

    const dataCard = [
        { title: 'Full Name', description: biography['full-name'] },
        { title: 'Alter Egos', description: biography['alter-egos'] },
        { title: 'Place Of Birth', description: biography['place-of-birth'] },
        { title: 'Occupation', description: work.occupation },
        { title: 'Group Affiliation', description: connections['group-affiliation'] },
        { title: 'Family', description: connections.relatives }
    ];

    return (
        <Card
            bordered={false}
            title={hero.name}
            className="animate__animated animate__fadeIn animate__faster"
        >
            {
                dataCard.map(({ description, title }) => (
                    <Card.Meta
                        key={title}
                        title={title}
                        description={description}
                    />
                ))
            }
        </Card>
    );
};

export default InfoCard;
