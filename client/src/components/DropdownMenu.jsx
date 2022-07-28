import { React, Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function DropDownMenu({ tagsData, classNameMenu }) {
  const [selected, setSelected] = useState(0);

  return (
    <Menu
      as="div"
      className="font-semibold text-xl px-6 pb-6 relative inline-block text-left"
    >
      <div>
        <Menu.Button
          className={
            !selected
              ? ` inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1.5 bg-gray-100 text-m font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`
              : ` inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-1.5 bg-[${
                  tagsData[selected - 1].color
                }] text-m font-semibold text-gray-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-500 focus:ring-indigo-500`
          }
        >
          {!selected ? (
            <>
              Tags
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              {tagsData[selected - 1].name}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top absolute w-[85%] rounded shadow-lg bg-[#262626] ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div>
            {tagsData.map((tag) => (
              <Menu.Item key={tag.id}>
                <button
                  id={tag.id}
                  href="/"
                  className={`bg-[${tag.color}] bg-[] 
                       w-[95%] px-4 py-2 m-2 text-base text-gray-100 text-center rounded`}
                  onClick={() => {
                    setSelected(tag.id);
                  }}
                >
                  {tag.name}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
