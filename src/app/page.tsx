import Select from './components/Select';
import Trays from './components/Trays';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Trays />
      <Select />
    </main>
  );
}
