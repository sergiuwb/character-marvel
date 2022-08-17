import React from 'react';

const Header = (props) => {
    const {title} = props
    return (
        <div>
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default Header;
