import React from "react";
import { getInitials } from "../../utilities/helper";

const ProfileInfo = ({onLogout}) => {
    return (
        <div className="py-2 flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">{getInitials("Fathan Jamil")}</div>
            <div>
            <p className="text-sm font-medium">Fathan</p>
            <button className="text-xs text-slate-600 btn btn-xs btn-ghost" onClick={onLogout}>Logout</button>
            </div>
        </div>
       
    );
};

export default ProfileInfo;