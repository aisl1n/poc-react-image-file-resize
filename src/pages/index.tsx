import DefaultLayout from '@/layout/default-layout';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <ul className='text-lg'>
        <li>
          <span>- Visão geral da biblioteca</span>
        </li>
        <li>
          <span>- Recursos principais</span>
        </li>
        <li>
          <span>- Benefícios</span>
        </li>
        <li>
          <span>- Demonstração</span>
        </li>
      </ul>
    </div>
  );
}

Home.getLayout = DefaultLayout;
