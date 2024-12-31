import { Separator } from '@/components/ui/separator';

import { AppearanceForm } from './appearance-form';

export default function PreferencesPage() {
  return (
    <div className='mx-4 mt-4 flex max-w-3xl flex-col space-y-6'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Display</h3>
        <p className='text-sm text-muted-foreground'>
          Choose your desired Onyx interface.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}
