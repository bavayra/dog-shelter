import SpinnerIcon from '@/assets/icons/spinner-icon.svg?react';

interface LoadingSpinnerProps {
  message?: string;
}
const LoadingSpinner = ({ message = 'Loading...' }: LoadingSpinnerProps) => {
  return (
    <div className="bg-primary-50 flex min-h-screen items-center justify-center">
      <div className="text-center">
        <SpinnerIcon className="h-12 w-12 animate-spin" />
        <p className="text-primary-700 mt-4 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
