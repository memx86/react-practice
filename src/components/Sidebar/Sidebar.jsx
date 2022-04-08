import React from "react";
import Menu from "components/Menu";
import IconText from "components/IconText";
import user from "../../db/user.js";
import menu from "../../db/menu.js";
import s from "./Sidebar.module.css";
import Info from "components/Info";
import MenuItem from "components/MenuItem";
import IconButton from "components/IconButton/IconButton.jsx";

function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <Info />
      <div className={s.wrapper}>
        <IconButton icon="circleLeft" />
        <Menu>
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </Menu>
        <IconText data={user} />
      </div>
    </aside>
  );
}

export default Sidebar;
