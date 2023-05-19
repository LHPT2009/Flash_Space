import React, { createContext, useState } from "react";
export const ListTimeSlotContext = createContext();

const ListTimeSlotProvider = (props) => {
  const [timeslots, setTimeSlots] = useState([]);

  const editListTimeSlot = async (timeslot) => {
    const existedTimeslot = timeslots.find((item) => {
      return item.idworkinghours === timeslot.idworkinghours;
    });
    if (existedTimeslot) {
      setTimeSlots(
        timeslots.filter((n) => n.idworkinghours !== timeslot.idworkinghours)
      );
    } else {
      setTimeSlots([...timeslots, timeslot]);
      console.log([...timeslots, timeslot]);
    }
  };

  const deleteListTimeSlot = async () => {
    setTimeSlots([]);
  };

  const deleteitem = (idworkinghours) => {
    setTimeSlots(timeslots.filter((n) => n.idworkinghours !== idworkinghours));
  };
  return (
    <ListTimeSlotContext.Provider
      value={{
        timeslots,
        editListTimeSlot,
        deleteListTimeSlot,
        deleteitem,
      }}
    >
      {props.children}
    </ListTimeSlotContext.Provider>
  );
};

export default ListTimeSlotProvider;
