import { useState } from "react";
import "./formInput.css"

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { label,  placeholder,  errorMessage, onChange, id, ...inputProps } = props;

    // eslint-disable-next-line no-unused-vars
    const handleFocus = (e) => {
        setFocused(true);
    }

    return ( 
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}
            placeholder={placeholder}
            onBlur={handleFocus} 
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            // eslint-disable-next-line react/no-unknown-property
            focused={focused.toString()} />
            <span className="error-msg">{errorMessage}</span>
        </div>
     );
}
 
export default FormInput;