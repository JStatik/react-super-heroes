import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Result } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { MainContainer } from '../../styles/ErrorBoundary';

const ErrorComponent = () => {
    const history = useHistory();

    const handleHome = () => {
        history.replace('/');
        history.go(0);
    };

    return (
        <MainContainer className="animate__animated animate__fadeIn">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={
                    <Button
                        type="primary"
                        icon={<HomeFilled />}
                        onClick={handleHome}
                    >
                        Back Home
                    </Button>
                }
            />
        </MainContainer>
    );
};

export default ErrorComponent;
