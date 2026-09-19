// skill: frontend-react — Button per checklist §5
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_100%] bg-left hover:bg-right text-white shadow-lg shadow-violet-500/30 btn-glow',
  ghost: 'border border-line text-slate-200 hover:border-cyan-400/60 hover:text-white',
};

export default function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <a
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-base font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
