import React from "react";
import Menu from "components/Menu";
import IconText from "components/IconText";
import user from "../../db/user.js";
import menu from "../../db/menu.js";
import s from "./Sidebar.module.css";
import Info from "components/Info";
import MenuItem from "components/MenuItem";

function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <Info />
      <div className={s.wrapper}>
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
