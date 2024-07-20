import Select from './components/Select';
import Trays from './components/Trays';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Trays />
      <Select />
    </main>
  );
}
