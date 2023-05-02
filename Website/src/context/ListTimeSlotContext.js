import React, { createContext, useState } from "react";
export const ListTimeSlotContext = createContext();

const ListTimeSlotProvider = (props) => {
  const [timeslots, setTimeSlots] = useState([]);

  const editTimeSlot = async (timeslot) => {
    const existedTimeslot = timeslots.find((item) => {
      return item.id === timeslot.id;
    });
    if (existedTimeslot) {
      setTimeSlots(timeslots.filter((n) => n.id !== timeslot.id));
    } else {
      setTimeSlots([...timeslots, timeslot]);
    }
  };

  return (
    <ListTimeSlotContext.Provider
      value={{
        timeslots,
        editTimeSlot,
      }}
    >
      {props.children}
    </ListTimeSlotContext.Provider>
  );
};

export default ListTimeSlotProvider;
