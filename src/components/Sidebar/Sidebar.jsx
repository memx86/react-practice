import React from "react";
import Menu from "components/Menu";
import IconText from "components/IconText";
import user from "../../db/user.json";
import menu from "../../db/menu.json";
import s from "./Sidebar.module.css";
import MenuItem from "components/MenuItem";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Menu>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Menu>
      <IconText data={user} />
    </div>
  );
}

export default Sidebar;
