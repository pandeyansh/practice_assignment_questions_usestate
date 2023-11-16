import React, { useState } from 'react';
function InputValidation () {
    const[inputValue, setInputValue] = useState('');
    const[error, setError] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === ''){
            setError('Input field cannot be empty');
        } else {
            setError('');
        }
        };
        return(
            <div>
                <h2>Input Validation</h2>
                <form onSubmit={handleSubmit}>
                    <input
                     type="text"
                     value={inputValue}
                     onChange={handleInputChange}
                     />
                     <button type="submit">Submit</button>
                </form>
                {error && <p style={{color:'red'}}>{error}</p>}
            </div>
        );
    }
export default InputValidation;