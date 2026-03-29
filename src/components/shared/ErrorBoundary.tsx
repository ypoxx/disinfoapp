import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center shadow-raised">
            <AlertTriangle className="mx-auto h-12 w-12 text-warning" />
            <h1 className="mt-4 text-xl font-bold text-foreground">
              Etwas ist schiefgelaufen
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
            </p>
            <button
              onClick={this.handleReset}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              <RefreshCw className="h-4 w-4" />
              Neu laden
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
