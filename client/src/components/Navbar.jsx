import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Navbar = ({ className, clickEvent }) => {
  return (
    <div
      className={`header flex justify-between fixed left-0 right-0 overflow-x-scroll bg-[#262626] p-4
        ${className} `}
    >
      <Link onClick={clickEvent} to={'/'} className="text-4xl">
        Kanban
      </Link>
      <div className="profil">
        <Modal
          classNameButton=" lg:hover:scale-125 lg:transition lg:duration-500"
          modalId={5}
          title={'Profil'}
        />
      </div>
    </div>
  );
};

export default Navbar;
