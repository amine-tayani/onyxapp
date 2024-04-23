import {
  CircuitBoard,
  GiftIcon,
  StopCircle,
  UserIcon,
  XCircleIcon,
} from 'lucide-react';

export const statuses = [
  {
    value: 'applied',
    label: 'Applied',
    icon: UserIcon,
  },
  {
    value: 'interview',
    label: 'Interview',
    icon: CircuitBoard,
  },
  {
    value: 'rejected',
    label: 'Rejected',
    icon: StopCircle,
  },
  {
    value: 'offer',
    label: 'Offer',
    icon: GiftIcon,
  },
  {
    value: 'closed',
    label: 'Closed',
    icon: XCircleIcon,
  },
];
