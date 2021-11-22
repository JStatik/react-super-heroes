import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';

export const SearchButton = React.memo(({ loading }) => {
    return (
        <Form.Item>
            <Button
                block
                size="large"
                type="primary"
                htmlType="submit"
                loading={loading}
            >
                {!loading && 'Search'}
            </Button>
        </Form.Item>
    );
});

SearchButton.displayName = 'SearchButton';

SearchButton.propTypes = {
    loading: PropTypes.bool.isRequired
};
