import React, { createContext, useState } from "react";
export const InformationAccountContext = createContext();

const InformationAccountProvider = (props) => {
  const [informations, setInformations] = useState([]);

  const addInformationAccount = async (information) => {
    const existedInformationAccount = informations.find((item) => {
      return item.id === information.id && item.name === information.name;
    });
    if (existedInformationAccount) {
      informations.forEach((item) => {
        if (item.id === information.id && item.name === information.name) {
          item.amount += 1;
        }
      });
      setInformations([...informations]);
    } else {
      setInformations([...informations, information]);
    }
  };

  const delInformationAccount = (name) => {
    setProducts(products.filter((n) => n.name !== name));
  };

  const clearInformation = () => {
    setInformations([]);
  };

  return (
    <InformationAccountContext.Provider
      value={{
        informations,
        addInformationAccount,
        delInformationAccount,
        clearInformation,
      }}
    >
      {props.children}
    </InformationAccountContext.Provider>
  );
};

export default InformationAccountProvider;
