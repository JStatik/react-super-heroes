import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useHookForm from '../hooks/useHookForm';
import { CLEAR_HEROES } from '../redux/slices/heroesSlice';
import { selectHeroesIds } from '../redux/selectors/heroesSelectors';
import { ClearButton } from '../components/Home/ClearButton';
import { HeaderSearch } from '../components/Home/HeaderSearch';
import { InputSearch } from '../components/Home/InputSearch';
import { SearchButton } from '../components/Home/SearchButton';
import { MainContainer, FormContainer, SearchContainer } from '../styles/Home';

const defaultValues = { heroesSearch: '' };

const schema = yup.object().shape({
    heroesSearch: yup.string()
        .required('Super héroe inválido')
        .min(2, 'Super héroe inválido')
        .matches(/^[a-zA-Z0-9]+([\s-]+[a-zA-Z0-9]+)*$/, {
            message: 'Super héroe inválido',
            excludeEmptyString: true
        })
});

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const heroesIds = useSelector(selectHeroesIds);
    const [loading, setLoading] = useState(false);

    const {
        control,
        dirtyFields,
        errors,
        handleSubmit,
        reset,
        setFocus
    } = useHookForm(defaultValues, 'heroesSearch', schema);

    useEffect(() => {
        if(heroesIds.length > 0)
            dispatch(CLEAR_HEROES());
    }, [dispatch, heroesIds]);

    const handleClear = useCallback(() => {
        setFocus('heroesSearch');
        reset();
    }, [reset, setFocus]);

    const onSubmit = ({ heroesSearch }) => {
        reset();
        setLoading(true);

        history.push(`/heroes/${ heroesSearch }`);
    };

    return (
        <MainContainer className="animate__animated animate__fadeIn">
            <FormContainer>
                <HeaderSearch />

                <Form
                    autoComplete="off"
                    onFinish={handleSubmit(onSubmit)}
                >
                    <SearchContainer>
                        <InputSearch
                            name="heroesSearch"
                            placeholder="Heroes search"
                            control={control}
                            icon={<SearchOutlined />}
                            error={!!errors.heroesSearch}
                            isDirty={dirtyFields.heroesSearch || false}
                            errorMessage={errors.heroesSearch?.message || ''}
                        />

                        <SearchButton loading={loading} />

                        <ClearButton handleClear={handleClear} />
                    </SearchContainer>
                </Form>
            </FormContainer>
        </MainContainer>
    );
};

export default Home;
