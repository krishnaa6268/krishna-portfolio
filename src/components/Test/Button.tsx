interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === 'primary'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-300 text-black'
      }`}
    >
      {label}
    </button>
  );
}
