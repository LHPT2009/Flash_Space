//Ghi ân bạn tùng về việc sử dụng useContext
import React, { createContext, useState } from "react";
export const InformationAddRoomContext = createContext();
const InformationAddRoom = (props) => {
  const [informations, setInformation] = useState({});
  const clearInformations = () => {
    setInformation({});
  };

  return (
    <InformationAddRoomContext.Provider
      value={{
        informations,
        clearInformations,
      }}
    >
      {props.children}
    </InformationAddRoomContext.Provider>
  );
};

export default InformationAddRoom;
