import Header from "../component/Header/Header";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
