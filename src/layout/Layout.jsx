import Header from "../component/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
