import React from "react";
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@mui/icons-material';

export default function Topbar() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">flashspace</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src="https://us.123rf.com/450wm/donets/donets1508/donets150800333/donets150800333.jpg?ver=6" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    );
  }