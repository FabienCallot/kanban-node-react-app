import apiAxios from './index';

const getAllLists = async (setListsData) => {
  const allLists = await apiAxios.get('lists');

  setListsData(allLists.data);
};

export default getAllLists;
