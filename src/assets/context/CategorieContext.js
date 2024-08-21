import { createContext, useState } from "react";

export const CategorieContext = createContext({
  editId: null,
  setEditId: () => {},
});

const CategorieContextContiner = ({ children }) => {
  const [editId, setEditId] = useState(null);
  return (
    <CategorieContext.Provider
      value={{
        editId,
        setEditId,
      }}
    >
      {children}
    </CategorieContext.Provider>
  );
};
export default CategorieContextContiner;
