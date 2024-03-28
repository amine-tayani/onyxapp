'use client';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, slug }: { href: string; slug: string }) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={cn(
          'text-muted-foreground transition-colors hover:text-foreground',
          {
            '!text-foreground': pathname === href,
          }
        )}
      >
        {slug}
      </div>
    </Link>
  );
}
