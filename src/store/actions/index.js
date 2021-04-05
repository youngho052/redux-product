export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteItem = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};
