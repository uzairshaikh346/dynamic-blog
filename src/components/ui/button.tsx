import React, { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'bg-transparent border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const buttonSizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, className = '', onClick }) => {
  const variantClasses = buttonVariants[variant] || buttonVariants.primary;
  const sizeClasses = buttonSizes[size] || buttonSizes.medium;

  const buttonClass = `rounded-md font-semibold transition-colors duration-300 ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
