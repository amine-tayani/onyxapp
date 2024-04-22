import { Grid, TableIcon } from 'lucide-react';
import { CreateAppButton } from './applications/create-application-button';
import { Button } from '../ui/button';

export function ViewHeader() {
  return (
    <div className='mt-2 flex items-center justify-between px-4'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>
          Jobs you applied to
        </h2>
      </div>
      <div className='flex items-center gap-x-4'>
        <Button size='icon'>
          <Grid />
        </Button>
        <Button className='bg-muted text-muted-foreground/80' size='icon'>
          <TableIcon />
        </Button>
        <CreateAppButton />
      </div>
    </div>
  );
}
