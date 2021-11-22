import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

export const ClearButton = React.memo(({ handleClear }) => {
    return (
        <Form.Item>
            <Button
                block
                size="large"
                type="danger"
                icon={<ClearOutlined />}
                onClick={handleClear}
            >
                Clear
            </Button>
        </Form.Item>
    );
});

ClearButton.displayName = 'ClearButton';

ClearButton.propTypes = {
    handleClear: PropTypes.func.isRequired
};
