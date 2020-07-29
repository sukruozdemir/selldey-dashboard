import React from "react";
import PropTypes from "prop-types";
import { PaginationItem, PaginationLink } from "reactstrap";

const BreakView = (props) => {
  const { breakLabel, breakClassName, breakLinkClassName, onClick } = props;
  const className = breakClassName || "break";

  return (
    <PaginationItem className={className}>
      <PaginationLink
        className={breakLinkClassName}
        onClick={onClick}
        role='button'
        tabIndex='0'
        onKeyPress={onClick}
      >
        {breakLabel}
      </PaginationLink>
    </PaginationItem>
  );
};

BreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  breakClassName: PropTypes.string,
  breakLinkClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default BreakView;
