import Button from './Button';
import Task from './Task';
import { BsPlusLg } from 'react-icons/bs';

const List = ({ listName }) => {
  return (
    <div className="bg-[#262626] w-[250px] min-w-[250px] m-4 p-4 rounded-lg">
      <div className="list-header flex justify-between items-center	">
        <h3 className="p-2 font-akaya mb-2 text-xl">{listName}</h3>
        <Button
          className="list-header-button mb-1"
          text={<BsPlusLg className="mx-auto" />}
          clickEvent={() => {
            return;
          }}
        />
      </div>
      <div className="list-tasks">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default List;
