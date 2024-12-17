
type StorageProp = {
  key: string;
  value?: any;
};

const isWindowNotUndefined = typeof window !== "undefined";

export const setLocalStorageItem = ({ key, value }: StorageProp) => {
  if (isWindowNotUndefined) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

// To get an item from local storage
export const getLocalStorageItem = ({ key }: StorageProp) => {
  if (isWindowNotUndefined) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

// To remove an item from local storage
export const removeLocalStorageItem = ({ key }: StorageProp) => {
  if (isWindowNotUndefined) {
    window.localStorage.removeItem(key);
  }
};

export const removeMultipleItem = async (keys: string[]) => {
  try {
    // Check if 'keys' is an array and not empty
    if (Array.isArray(keys) && keys.length) {
      keys.forEach((key) => {
        localStorage.removeItem(key);
      });
    }
  } catch (e) {
    console.error("Error removing items from localStorage: ", e);
  }
};

// To clear all items from local storage
export const clearAllLocalStorageItems = () => {
  if (isWindowNotUndefined) {
    window.localStorage.clear();
  }
};

export const getToken = () => {
  return getLocalStorageItem({ key: "token" });
};

export const loadUserFromStorage = () => {
  const user = getLocalStorageItem({ key: "userDetails" });
  const token = getLocalStorageItem({ key: "token" });
  return { user, token };
};