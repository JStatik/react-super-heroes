import React from 'react';
import { Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import useAuthStore from '../../../zuztand/stores/authStore';
import { selectLoadingLogout, selectStartLogout } from '../../../zuztand/selectors/authSelectors';

export const LogoutButton = () => {
    const loadingLogout = useAuthStore(selectLoadingLogout);
    const startLogout   = useAuthStore(selectStartLogout);

    return (
        <Button
            onClick={startLogout}
            loading={loadingLogout}
            icon={!loadingLogout && <LockOutlined />}
        >
            Logout
        </Button>
    );
};
