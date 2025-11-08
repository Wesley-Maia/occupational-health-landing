import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient';
}

export default function Section({ children, background = 'white', className, ...props }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-medical-50',
  };

  return (
    <section className={cn('py-20 px-4', backgrounds[background], className)} {...props}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
