export const saveItem = (key, value) => {
  return window.sessionStorage.setItem(key, value);
};

export const getItem = (key) => {
  return window.sessionStorage.getItem(key);
};

export const deleteItem = () => {
  window.sessionStorage.clear()
  window.location.pathname = "/"
}
