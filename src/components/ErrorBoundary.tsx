// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  errorMessage: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    errorMessage: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.errorMessage) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          <p>{this.state.errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
