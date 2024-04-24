import { type ApplicationStatus } from '@/lib/db/types';
import { Badge } from './badge';
import { cn } from '@/lib/cn';

interface Props {
  status: ApplicationStatus;
  className?: string;
}

const COLORS_BY_STATUS = {
  APPLIED: 'bg-muted text-neutral-200',
  INTERVIEW: 'bg-muted text-neutral-200',
  REJECTED: 'bg-muted text-neutral-200',
  OFFER: 'bg-muted text-neutral-200',
  CLOSED: 'bg-muted text-neutral-200',
};

export function StatusBadge({ className, status }: Props) {
  return (
    <Badge
      className={cn(
        `duration-300 ${COLORS_BY_STATUS[status]} text-white dark:text-black`,
        className
      )}
    >
      {status}
    </Badge>
  );
}
