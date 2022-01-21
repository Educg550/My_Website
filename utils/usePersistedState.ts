import { useState, useEffect, Dispatch, SetStateAction } from "react";

// Define o formato do tema (Default Theme)
type response<T> = [T, Dispatch<SetStateAction<T>>];

const usePersistedState = <T>(key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    let storageValue;
    if (typeof window !== "undefined") {
      storageValue = localStorage.getItem(key);
    }

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
