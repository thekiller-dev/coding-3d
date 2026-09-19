// skill: frontend-react — ErrorBoundary per checklist §5
// Isole les sections 3D : si WebGL/scène plante (mobile ancien, contexte
// indisponible), le reste de la page reste affiché au lieu de tout démonter.
import { Component, type ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
  label: string;
};

type ErrorBoundaryState = {
  failed: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(`[3d-boundary:${this.props.label}]`, error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}
