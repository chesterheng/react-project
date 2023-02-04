import { Outlet } from 'react-router-dom';
import SiderBar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex bg-neutral-100 h-screen w-screen overflow-hidden">
      <SiderBar />
      <div className="flex-1">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
