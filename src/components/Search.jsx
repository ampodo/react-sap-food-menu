import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='search'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <a className="waves-effect waves-light btn" 
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 10,

                    }}
                    onClick={handleSubmit}
                >
                    Search
                </a>
            </div>
        </div>
    );
}

export { Search };