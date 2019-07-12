import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from "../Icon";

const Chip = ({title, color, icon}) => {

    const classes = classNames(
        "Chip",
        color
    );

    return (
        <div className={classes}>
            <span>{title}</span>
            <Icon.MIcon nameIcon={icon} fS={14}/>
        </div>
    );
};

Chip.propTypes = {
    title: PropTypes.string
};
Chip.defaultProps = {
    title: ""
};

export default Chip;