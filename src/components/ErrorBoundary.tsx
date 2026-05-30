import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <p className="text-primary-700 py-10 text-center font-semibold">
            Something went wrong. Please refresh the page.
          </p>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
