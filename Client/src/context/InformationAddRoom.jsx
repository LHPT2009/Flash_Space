//Ghi ân bạn tùng về việc sử dụng useContext
import React, { createContext, useState } from "react";
export const InformationAddRoomContext = createContext();
const InformationAddRoom = (props) => {
  const [informations, setInformation] = useState({});
  const [listWork, setListWork] = useState([]);
  const clearInformations = () => {
    setInformation({});
  };
  const clearListwork = () => {
    setListWork([]);
  };
  return (
    <InformationAddRoomContext.Provider
      value={{
        informations,
        listWork,
        clearInformations,
        clearListwork,
      }}
    >
      {props.children}
    </InformationAddRoomContext.Provider>
  );
};

export default InformationAddRoom;
