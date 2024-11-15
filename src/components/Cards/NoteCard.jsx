import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="card bg-base-100 rounded-lg hover:drop-shadow-lg border w-full">
            <div className="flex justify-between items-start p-4">
                <div>
                    <h6 className="text-lg font-semibold">{title}</h6>
                    <span className="text-xs text-slate-400">{date}</span>
                </div>
                <MdOutlinePushPin 
                    className={`text-2xl cursor-pointer ${isPinned ? "text-primary" : "text-disabled"}`} 
                    onClick={onPinNote} 
                />
            </div>

            <div className="p-4">
                <p className="text-sm text-slate-600">
                    {content?.slice(0, 60)}
                </p>
            </div>

            <div className="p-4 pt-2 flex flex-wrap gap-1">
              <span className="text-xs text-slate-500 badge badge-outline badge-primary">{tags}</span>
            </div>

            <div className="card-actions justify-end p-4">
                <MdCreate 
                    className="text-lg text-slate-500 hover:text-green-500 cursor-pointer" 
                    onClick={onEdit} 
                />
                <MdDelete 
                    className="text-lg text-slate-500 hover:text-red-500 cursor-pointer" 
                    onClick={onDelete} 
                />
            </div>
        </div>
    );
}

export default NoteCard;
