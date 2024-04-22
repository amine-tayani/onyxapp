import { ApplicationsContent } from '@/components/dashboard/application-content';
import { getApplicationList } from '../applications/[id]/getApplicationsData';

async function DashboardPage() {
  const applications = await getApplicationList();

  return <ApplicationsContent applications={applications} />;
}

export default DashboardPage;
