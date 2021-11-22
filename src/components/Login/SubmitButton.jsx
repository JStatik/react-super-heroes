import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Form } from 'antd';
import { UnlockOutlined } from '@ant-design/icons';
import { selectLoadingLogin } from '../../redux/selectors/authSelectors';

export const SubmitButton = React.memo(() => {
    const loadingLogin = useSelector(selectLoadingLogin);
    
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
