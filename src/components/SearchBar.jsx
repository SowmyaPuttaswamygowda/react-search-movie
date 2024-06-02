import { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = ({ inputHandler }) => {
    const [value, setValue] = useState('');

    const changeHandler = (e) => {
        const val = e.target.value.toLowerCase();
        setValue(val);
        inputHandler(val);
    };
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="🔍"
                value={value}
                onChange={(e) => changeHandler(e)}
            />
        </div>
    );
};

SearchBar.propTypes = {
    inputHandler: PropTypes.func.isRequired
};

export default SearchBar;