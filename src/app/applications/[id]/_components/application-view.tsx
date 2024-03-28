import { EmptyPlaceholder } from '@/components/ui/empty-placeholder';
import { Application } from '@/lib/db/types';
import { getRelativeTime } from '@/utils/time';

interface ApplicationViewProps {
  application: Application | null;
}

export function ApplicationView({ application }: ApplicationViewProps) {
  return (
    <div className='col-span-4 flex h-full flex-col'>
      {application ? (
        <div className='mx-8'>
          <div className='flex justify-between'>
            <div>
              <div className=''>
                <p className='mb-2 text-sm leading-6 text-muted-foreground/80 '>
                  {application.location}
                </p>
                <div className='flex items-center'>
                  <h1 className='inline-block text-2xl font-extrabold tracking-tight text-neutral-100 sm:text-3xl'>
                    {application.title}
                  </h1>
                </div>
              </div>
              <p className='mt-2 text-lg text-muted-foreground/80'>
                {application.company}
              </p>
            </div>
            <div className='mt-2 self-end text-sm font-normal leading-[1.6] text-primary/80'>
              {getRelativeTime(application.datePosted)}
            </div>
          </div>

          <div className='py-8'>
            <h1 className='mb-4 inline-block text-xl font-bold tracking-tight text-neutral-100'>
              Job description
            </h1>
            <p className='max-w-2xl whitespace-break-spaces text-sm leading-[1.6] text-primary/80'>
              {application.description}
            </p>
          </div>
        </div>
      ) : (
        <EmptyPlaceholder className='my-4 '>
          <EmptyPlaceholder.Description>
            No applications are found
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      )}
    </div>
  );
}
