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
      alert("Đã xóa..");
    } else {
      setTimeSlots([...timeslots, timeslot]);
      alert("Đã thêm..");
    }
  };

  const deleteListTimeSlot = async () => {
    setTimeSlots([]);
  };
  return (
    <ListTimeSlotContext.Provider
      value={{
        timeslots,
        editListTimeSlot,
        deleteListTimeSlot,
      }}
    >
      {props.children}
    </ListTimeSlotContext.Provider>
  );
};

export default ListTimeSlotProvider;
