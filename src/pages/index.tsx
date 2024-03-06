import DefaultLayout from '@/layout/defaultLayout';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <h1>Usage</h1>
    </div>
  );
}

Home.getLayout = DefaultLayout;
