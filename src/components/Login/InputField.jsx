import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export const InputField = ({
    control,
    error,
    errorMessage,
    icon,
    isDirty,
    isValidating,
    label,
    name
}) => {
    return (
        <Form.Item
            hasFeedback
            name={name}
            label={label}
            help={errorMessage || null}
            validateStatus={
                (error)                 ?   'error'         :
                (isValidating)          ?   'validating'    :
                (!error && isDirty)     &&  'success'
            }
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        prefix={icon}
                        placeholder={label}
                    />
                )}
            />
        </Form.Item>
    );
};

InputField.propTypes = {
    control: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    isDirty: PropTypes.bool.isRequired,
    isValidating: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
