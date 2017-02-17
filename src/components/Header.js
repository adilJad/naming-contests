import React from 'react';

const Header = ({message}) => {
    return (
        <h1 className="text-center">
            {message}
        </h1>
    )
}

Header.propTypes = {
    message: React.PropTypes.string
}

export default Header;