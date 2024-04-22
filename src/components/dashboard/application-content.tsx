import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApplicationStatus, Application } from '@/lib/db/types';
import { ApplicationCard } from './applications/application-card';
import { ViewHeader } from './view-header';

interface ApplicationsContentProps {
  applications: Application[];
}

export function ApplicationsContent({
  applications,
}: ApplicationsContentProps) {
  const applicationStatus = Object.values(ApplicationStatus);
  const labels = applicationStatus.map((status) => ({
    label: status,
    value: status,
  }));

  return (
    <>
      <div className='flex-1 px-6'>
        <ViewHeader />
        {/* render either grid or table view for applications */}
        <Tabs
          defaultValue={ApplicationStatus.APPLIED}
          className='mt-3 space-y-4'
        >
          <div className='flex justify-between '>
            <TabsList className='w-full sm:w-auto '>
              {labels.map(({ label, value }) => (
                <TabsTrigger
                  className='w-24 sm:w-auto'
                  key={label}
                  value={value}
                >
                  <span className='capitalize'>{label.toLowerCase()}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {labels.map(({ label, value }) => (
            <TabsContent key={label} value={value} className='space-y-4'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {applications
                  .filter((application) => application.status === value)
                  .map((item) => (
                    <ApplicationCard application={item} key={item.id} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
