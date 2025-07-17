import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // static getDerivedStateFromError(error) is called after an error has been thrown by a descendant component.
  // It returns a value to update the state.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) is called after an error has been thrown by a descendant component.
  // It is used for side effects like logging errors.
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-3">Oops! Something went wrong.</h2>
          <p className="text-lg mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
          {/* Optional: Display error details in development */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-3 bg-red-50 rounded-md text-sm text-red-600 border border-red-300">
              <summary className="font-semibold cursor-pointer">Error Details</summary>
              <pre className="whitespace-pre-wrap break-words mt-2">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children; // Render children normally if no error
  }
}

export default ErrorBoundary;
