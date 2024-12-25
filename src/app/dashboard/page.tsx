import { Suspense } from 'react';

import { MainView } from '@/components/dashboard/main-view';

import { getApplicationList } from '../applications/[id]/getApplicationsData';

async function DashboardPage() {
  const applications = await getApplicationList();

  return (
    <Suspense>
      <MainView applications={applications} />
    </Suspense>
  );
}

export default DashboardPage;
