import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = ({ value, onChange, placeholder }) => { 
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div>
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type={isShowPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    className="grow"
                    placeholder={placeholder || "Masukin Password Disini Yaa"}
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="focus:outline-none"
                >
                    {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </label>
        </div>
    );
};

export default Password;
