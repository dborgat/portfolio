import React from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = 'section', className, children, ...props }, ref) => (
    <Comp
      ref={ref}
      className={clsx('container mx-auto px-4', className)}
      {...props}
    >
      {children}
    </Comp>
  )
);

Bounded.displayName = 'Bounded';

export default Bounded;
