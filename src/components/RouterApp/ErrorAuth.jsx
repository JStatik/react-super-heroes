import { useCallback, useEffect } from 'react';
import { Modal } from 'antd';
import useAuthStore from '../../zuztand/stores/authStore';
import { selectErrorAuth, selectRemoveErrorAuth } from '../../zuztand/selectors/authSelectors';

const ErrorAuth = () => {
    const errorAuth         = useAuthStore(selectErrorAuth);
    const removeErrorAuth   = useAuthStore(selectRemoveErrorAuth);

    const handleClose = useCallback(() => {
        removeErrorAuth();
    }, [removeErrorAuth]);

    useEffect(() => {
        if(errorAuth) {
            Modal.error({
                okText: 'Close',
                keyboard: false,
                autoFocusButton: null,
                className: 'error-message',
                content: errorAuth,
                afterClose: handleClose,
                bodyStyle: {
                    fontWeight: 'bold',
                    textAlign: 'justify'
                }
            });
        }
    }, [handleClose, errorAuth]);

    return null;
};

export default ErrorAuth;
