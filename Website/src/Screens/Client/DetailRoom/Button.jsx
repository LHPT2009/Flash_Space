import React, { useContext, useState } from "react";
import { ListTimeSlotContext } from "../../../context/ListTimeSlotContext";
const Button = (props) => {
  const [active, setActive] = useState(false);
  const { editListTimeSlot } = useContext(ListTimeSlotContext);
  const handleClick = () => {
    setActive(!active);
    const date = new Date(props.date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const idroom = props.idroom;
    const idworkinghours = props.idworkinghours;
    const roomname = props.roomname;
    const starttime = props.starttime;
    const endtime = props.endtime;
    const pricetime = props.pricetime;
    const timeslot = {
      idroom,
      idworkinghours,
      roomname,
      starttime,
      endtime,
      pricetime,
      date: `${day}-${month}-${year}`,
    };
    editListTimeSlot(timeslot);
  };
  return (
    <button
      type="button"
      className="btn btn-light btn-radius"
      style={{
        marginRight: "5px",
        marginBottom: "5px",
      }}
      onClick={handleClick}
    >
      {`${props.starttime} - ${props.endtime}`}
    </button>
  );
};

export default Button;
