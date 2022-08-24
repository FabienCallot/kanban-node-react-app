import { createListsFirstCo } from '../Requests/createListsFirstCo';

const firstCoList = async (userId, setFirstCo) => {
  await createListsFirstCo('Backlog', userId);
  setTimeout(() => {
    setFirstCo(false);
  }, 5000);
  return;
};

export default firstCoList;
