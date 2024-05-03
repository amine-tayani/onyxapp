import { Separator } from '@/components/ui/separator';
import { AccountForm } from './account-form';
import { DeleteAccountForm } from './delete-account';

export default function AccountPage() {
  return (
    <div className='mt-20 space-y-6'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Account</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your Onyx Account Settings
        </p>
      </div>
      <Separator />
      <AccountForm />
      <Separator />
      <DeleteAccountForm />
    </div>
  );
}
