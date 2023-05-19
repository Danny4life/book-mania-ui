import { useState } from "react";
import "./formInput.css"

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label,  placeholder,  errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return ( 
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}
            placeholder={placeholder}
            onBlur={handleFocus} 
            onFocus={() => inputProps.name === "confirmpassword" && setFocused(true)}
            focused={focused.toString()} />
            <span className="error-msg">{errorMessage}</span>
        </div>
     );
}
 
export default FormInput;