import React from "react";
import PropTypes from "prop-types";
import IconText from "components/IconText";

function MenuItem({ item }) {
  return (
    <li>
      <IconText data={item} capslock={true} />
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuItem;
