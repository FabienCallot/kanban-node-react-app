import apiAxios from './index';

const getAllLists = async (setListsData, userId) => {
  const allLists = await apiAxios.get('lists');

  function FilteredLists(lists) {
    let dataFiltered = [];

    lists.forEach(async (list) => {
      if (userId === list.user_id) {
        dataFiltered.push(list);
        setListsData(dataFiltered);
        return;
      }
    });
  }

  FilteredLists(allLists.data);
};

export { getAllLists };
