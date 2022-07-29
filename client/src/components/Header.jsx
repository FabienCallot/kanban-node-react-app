import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Header = ({ className, clickEvent }) => {
  return (
    <div
      className={`header flex justify-between fixed left-0 right-0 overflow-x-scroll bg-[#262626] p-4
        ${className} `}
    >
      <Link onClick={clickEvent} to={'/'} className="text-4xl">
        Kanban
      </Link>
      <div className="profil">
        <CgProfile size={'2.5rem'} />
      </div>
    </div>
  );
};

export default Header;
