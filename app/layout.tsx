import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Metadata export
export const metadata = {
  title: 'Your Site Title',
  description: 'Description of your site',
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
