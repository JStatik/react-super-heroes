import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import START_LOGOUT from '../../../redux/actions/auth/startLogout';
import { selectLoadingLogout } from '../../../redux/selectors/authSelectors';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const loadingLogout = useSelector(selectLoadingLogout);

    const promise = useRef(null);
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            promise.current?.abort();
            isMounted.current = false;
        };
    }, []);

    const handleLogout = () => {
        promise.current = dispatch(
            START_LOGOUT({
                isMounted: isMounted.current
            })
        );
    };

    return (
        <Button
            onClick={handleLogout}
            loading={loadingLogout}
            icon={!loadingLogout && <LockOutlined />}
        >
            Logout
        </Button>
    );
};
