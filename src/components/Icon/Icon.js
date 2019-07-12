import React from 'react';
import PropTypes from 'prop-types';

const MIcon = ({nameIcon, ...props}) => {
    const className = `icon ion-md-${nameIcon}`;
    return (
        <span className={"IconContainer"}>
            <i
                className={className}
                style={{fontSize: props.fS}}
                id={props.id}
            >

            </i>
        </span>
    )
};
const IIcon = ({nameIcon, ...props}) => {
    const className = `icon ion-ios-${nameIcon}`;
    return (
        <span className={"IconContainer"}>
            <i
                className={className}
                style={{fontSize: props.fS}}
                id={props.id}
            >

            </i>
        </span>
    )
};

MIcon.propTypes = {
    nameIcon: PropTypes.string,
    fS: PropTypes.number
};
MIcon.defaultProps = {
    nameIcon: "",
    fS: null
};
IIcon.propTypes = {
    nameIcon: PropTypes.string,
    fS: PropTypes.number
};
IIcon.defaultProps = {
    nameIcon: "",
    fS: null
};

const Icon = {
    MIcon,
    IIcon
};

export default Icon;