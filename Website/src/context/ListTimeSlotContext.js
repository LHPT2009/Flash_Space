import React, { createContext, useState } from "react";
export const ListTimeSlotContext = createContext();

const ListTimeSlotProvider = (props) => {
  const [timeslots, setTimeSlots] = useState([]);

  const addTimeSlot = async (timeslot) => {
    const existedTimeslot = timeslots.find((item) => {
      return item.id === timeslot.id;
    });
    if (existedTimeslot) {
      timeslots.forEach((item) => {
        if (item.id === timeslot.id) {
          item.amount += 1;
        }
      });
      setTimeSlots([...timeslots]);
    } else {
      setTimeSlots([...timeslots, timeslot]);
    }
  };

  const delTimeSlot = (id) => {
    setTimeSlots(timeslots.filter((n) => n.id !== id));
  };

  return (
    <ListTimeSlotContext.Provider
      value={{
        timeslots,
        addTimeSlot,
        delTimeSlot,
      }}
    >
      {props.children}
    </ListTimeSlotContext.Provider>
  );
};

export default ListTimeSlotProvider;
