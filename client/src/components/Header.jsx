import React from 'react';
import { CgProfile } from 'react-icons/cg';

const header = () => {
  return (
    <div className="header flex justify-between bg-[#262626] p-4">
      <h1 className="text-4xl">Kanban</h1>
      <div className="profil">
        <CgProfile size={'2.5rem'} />
      </div>
    </div>
  );
};

export default header;
