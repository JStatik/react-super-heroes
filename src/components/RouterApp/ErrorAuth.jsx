import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { REMOVE_ERROR_AUTH } from '../../redux/slices/authSlice';
import { selectErrorAuth } from '../../redux/selectors/authSelectors';

const ErrorAuth = () => {
    const dispatch = useDispatch();
    const errorAuth = useSelector(selectErrorAuth);

    const handleClose = useCallback(() => {
        dispatch(REMOVE_ERROR_AUTH());
    }, [dispatch]);

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
