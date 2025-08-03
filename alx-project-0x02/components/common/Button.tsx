import { ButtonProps } from '@/interfaces';

export default function Button({ label, size, shape, onClick }: ButtonProps) {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const shapeClass = shape;

  const baseStyles = `bg-blue-600 text-white hover:bg-blue-700 transition duration-200`;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeClasses[size]} ${shapeClass}`}
    >
      {label}
    </button>
  );
}
