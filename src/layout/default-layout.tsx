import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function DefaultLayout(page: any) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
}
