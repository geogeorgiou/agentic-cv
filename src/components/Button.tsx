import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type = 'button', className = '', children, ...props }: ButtonProps) {
  return (
    <button type={type} className={`cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}
