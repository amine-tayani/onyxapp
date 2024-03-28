import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreateAppButton } from './applications/create-application-button';
import { getApplicationList } from '@/app/applications/[id]/getApplicationsData';
import { ApplicationStatus } from '@/lib/db/types';
import { ApplicationCard } from './applications/application-card';

export async function DashboardApplicationTabs() {
  const applicationStatus = Object.values(ApplicationStatus);
  const labels = applicationStatus.map((status) => ({
    label: status,
    value: status,
  }));

  const applications = await getApplicationList();

  return (
    <>
      <div className='flex-1 p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2 lg:space-y-0'>
          <h2 className='text-3xl font-bold tracking-tight'>
            Your applications
          </h2>
          <CreateAppButton />
        </div>

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
                    <Link href={`/applications/${item.id}`} key={item.id}>
                      <ApplicationCard application={item} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
