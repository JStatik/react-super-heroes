import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = React.lazy(() => import('../components/ErrorBoundary/ErrorComponent'));

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = { hasError: false };
    };
    
    static getDerivedStateFromError () {
        return { hasError: true };
    };
    
    render () {
        if (this.state.hasError)
            return <ErrorComponent />;
    
        return this.props.children;
    };
};

ErrorBoundary.propTypes = {
    children: PropTypes.array.isRequired
};

export default ErrorBoundary;
