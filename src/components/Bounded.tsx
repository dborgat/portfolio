import React from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = 'section', className, children, id, ...props }, ref) => (
    <Comp
      ref={ref}
      className={clsx('container mx-auto px-4', className)}
      id={id}
      {...props}
    >
      {children}
    </Comp>
  )
);

Bounded.displayName = 'Bounded';

export default Bounded;
