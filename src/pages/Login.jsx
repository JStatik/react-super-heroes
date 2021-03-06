import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Form } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import START_LOGIN from '../redux/actions/auth/startLogin';
import useHookForm from '../hooks/useHookForm';
import { HeaderLogin } from '../components/Login/HeaderLogin';
import { InputField } from '../components/Login/InputField';
import { SubmitButton } from '../components/Login/SubmitButton';
import { FormContainer, MainContainer } from '../styles/Login';

const defaultValues = {
    email: '',
    name: ''
};

const schema = yup.object().shape({
    email: yup.string()
        .required('Email inválido')
        .email('Email inválido'),
    name: yup.string()
        .required('Nombre inválido')
        .min(2, 'Nombre inválido')
        .matches(/^[a-zA-ZñÑ]+(\s+[a-zA-ZñÑ]+)*$/, {
            message: 'Nombre inválido',
            excludeEmptyString: true
        })
});

const Login = () => {
    const dispatch = useDispatch();

    const promise = useRef(null);
    const isMounted = useRef(true);

    const {
        control,
        dirtyFields,
        errors,
        isSubmitting,
        handleSubmit,
        reset
    } = useHookForm(defaultValues, 'name', schema);

    useEffect(() => {
        return () => {
            promise.current?.abort();
            isMounted.current = false;
        };
    }, []);

    const onSubmit = (formValues) => {
        reset();

        promise.current = dispatch(
            START_LOGIN({
                formValues,
                isMounted: isMounted.current
            })
        );
    };

    return (
        <MainContainer>
            <FormContainer className="animate__animated animate__fadeIn">
                <HeaderLogin />

                <Form
                    layout="vertical"
                    autoComplete="off"
                    onFinish={handleSubmit(onSubmit)}
                >
                    <InputField
                        name="name"
                        label="Name"
                        control={control}
                        icon={<UserOutlined />}
                        error={!!errors.name}
                        isValidating={isSubmitting}
                        isDirty={dirtyFields.name || false}
                        errorMessage={errors.name?.message || ''}
                    />

                    <InputField
                        name="email"
                        label="Email"
                        control={control}
                        icon={<MailOutlined />}
                        error={!!errors.email}
                        isValidating={isSubmitting}
                        isDirty={dirtyFields.email || false}
                        errorMessage={errors.email?.message || ''}
                    />

                    <SubmitButton />
                </Form>
            </FormContainer>
        </MainContainer>
    );
};

export default Login;
