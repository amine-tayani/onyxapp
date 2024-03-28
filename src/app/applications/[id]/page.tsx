import { ApplicationView } from './_components/application-view';
import { getApplicationById } from './getApplicationsData';

export default async function ApplicationPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const application = await getApplicationById(id);
  return <ApplicationView application={application} />;
}
