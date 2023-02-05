import React from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from './Navigation';
import { Link, useLocation } from 'react-router-dom';
const SiderBar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3 ">
        <span className="text-lg">OnLite</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0">
        {DASHBOARD_SIDEBAR_LINKS.map(({ key, label, path }) => {
          const { pathname } = useLocation();
          return (
            <div key={key}>
              <Link
                to={path}
                className={`${
                  pathname === path ? 'text-white' : 'text-neutral-400'
                } flex items-center gap-2 py-2 hover:bg-neutral-900 hover:no-underline active:bg-neutral-600 rounded-sm text-base`}
              >
                {label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SiderBar;
