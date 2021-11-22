import { useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useHookForm = (defaultValues, focusField, schema) => {
    const { control, handleSubmit, reset, setFocus } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });

    const { dirtyFields, errors, isSubmitting } = useFormState({ control });

    useEffect(() => {
        setFocus(focusField);
    }, [setFocus, focusField]);

    return {
        control,
        dirtyFields,
        errors,
        isSubmitting,
        handleSubmit,
        reset,
        setFocus
    };
};

export default useHookForm;
