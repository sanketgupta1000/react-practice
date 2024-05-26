// will create a text editor as a component
// will use tinymce library
// now problem is that, want to use it with react hook form
// the component that tinymce provides must have use forwardRef internally, but we don't know if it does or not, mostly it doesn't
// in such cases, we can use Controller from react-hook-form

import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import config from '../../config/config'


function TextEditor({
    name,
    control,
    label,
    defaultValue=""
})
{


    return (

        <div className="w-full">
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    
            <Controller
                name={name || 'content'}
                control={control}
                render = {
                    ({field: {onChange}}) =>
                    (
    
                        <Editor
                            apiKey={config.tinymceApiKey}
                            initialValue={defaultValue}
                            init={{
                                initialValue: defaultValue,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar:
                                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                                }}
                                onEditorChange={onChange}
    
                        />
                    )
                }
            />
        </div>



    )


}


export default TextEditor