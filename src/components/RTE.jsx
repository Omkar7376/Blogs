import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTX({name, control, label, defaultValue = ''}) {
    return (
        <div className="w-full">
            {label && <label classNamei="inline-block mb-1 pl-1"></label>}
            <Controller
            name = {name || "content"}
            
            >
            </Controller>
        </div>
    )
}