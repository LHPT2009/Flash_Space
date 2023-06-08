import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
export const ListTimeSlotContext = createContext();

const ListTimeSlotProvider = (props) => {
  const [timeslots, setTimeSlots] = useState([]);

  const editListTimeSlot = async (timeslot) => {
    const existedTimeslot = timeslots.find((item) => {
      return item.idworkinghours === timeslot.idworkinghours;
    });
    if (existedTimeslot) {
      Swal.fire({
        icon: "warning",
        title: "Đã xóa!!!",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (swal) => {
          swal.addEventListener("mouseenter", Swal.stopTimer);
          swal.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }).then(() => {
        setTimeSlots(
          timeslots.filter((n) => n.idworkinghours !== timeslot.idworkinghours)
        );
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Đã thêm!!!",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (swal) => {
          swal.addEventListener("mouseenter", Swal.stopTimer);
          swal.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }).then(() => {
        setTimeSlots([...timeslots, timeslot]);
      });
    }
  };

  const deleteListTimeSlot = async () => {
    setTimeSlots([]);
  };

  const deleteitem = (idworkinghours) => {
    Swal.fire({
      icon: "warning",
      title: "Đã xóa giờ theo yêu cầu!!!",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      didOpen: (swal) => {
        swal.addEventListener("mouseenter", Swal.stopTimer);
        swal.addEventListener("mouseleave", Swal.resumeTimer);
      },
    }).then(() => {
      setTimeSlots(
        timeslots.filter((n) => n.idworkinghours !== idworkinghours)
      );
    });
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
