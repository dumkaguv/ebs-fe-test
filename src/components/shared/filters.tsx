import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Filters: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn('', className)} {...props}>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
