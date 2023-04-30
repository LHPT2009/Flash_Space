import React, { createContext, useState } from "react";
export const InformationAccountContext = createContext();

const InformationAccountProvider = (props) => {
  const [informations, setInformations] = useState({});
  const clearInformation = () => {
    setInformations({});
  };

  return (
    <InformationAccountContext.Provider
      value={{
        informations,
        clearInformation,
      }}
    >
      {props.children}
    </InformationAccountContext.Provider>
  );
};

export default InformationAccountProvider;
