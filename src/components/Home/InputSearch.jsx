import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export const InputSearch = ({
    control,
    error,
    errorMessage,
    icon,
    isDirty,
    name,
    placeholder
}) => {
    return (
        <Form.Item
            hasFeedback
            name={name}
            help={errorMessage || null}
            extra="Use guiones medios, en caso de no encontrar resultados con espacios"
            validateStatus={
                (error)                 ?   'error'     :
                (!error && isDirty)     &&  'success'
            }
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        size="large"
                        suffix={icon}
                        placeholder={placeholder}
                    />
                )}
            />
        </Form.Item>
    );
};

InputSearch.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    isDirty: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
