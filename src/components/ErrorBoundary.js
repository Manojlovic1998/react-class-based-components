import {Component} from 'react';


// Error Boundary Component
class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false};
    }

    // Triggered when ever child component
    // throws/generates an error
    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (<p>Something went wrong!</p>);
        }
        return this.props.children
    }
}


export default ErrorBoundary;