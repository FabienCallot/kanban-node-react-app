import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Header = ({ className }) => {
  console.log(className);
  return (
    <div
      className={`header flex justify-between fixed left-0 right-0 overflow-x-scroll bg-[#262626] p-4
        ${className} `}
    >
      <h1 className="text-4xl">Kanban</h1>
      <div className="profil">
        <CgProfile size={'2.5rem'} />
      </div>
    </div>
  );
};

export default Header;
