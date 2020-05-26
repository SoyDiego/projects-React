import React from 'react'
import PropTypes from "prop-types";

const Header = ({titulo}) => {
    return (
        <nav>
            <div className="nav-wrapper lightblue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    )
}

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
};

export default Header
