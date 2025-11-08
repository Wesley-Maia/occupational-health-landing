import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden',
        hover && 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
