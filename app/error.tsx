'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-text-muted mb-8">
          We encountered an error while loading this page. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
