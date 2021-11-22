import React from 'react';
import { Button, Form } from 'antd';
import { UnlockOutlined } from '@ant-design/icons';
import useAuthStore from '../../zuztand/stores/authStore';
import { selectLoadingLogin } from '../../zuztand/selectors/authSelectors';

export const SubmitButton = React.memo(() => {
    const loadingLogin = useAuthStore(selectLoadingLogin);
    
    return (
        <Form.Item>
            <Button
                block
                type="primary"
                htmlType="submit"
                loading={loadingLogin}
                icon={!loadingLogin && <UnlockOutlined />}
            >
                {!loadingLogin ? 'Login' : 'Loading'}
            </Button>
        </Form.Item>
    );
});

SubmitButton.displayName = 'SubmitButton';
