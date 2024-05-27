import React from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import { blogService } from '../../services'
import { InputField, Button, Logo, TextEditor, SelectInput } from '../index'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { setLoading } from '../../slices'
import { useDispatch } from 'react-redux'


// will use same component for updating as well as creating a post
// if post given, it is for updating, else for creating
function PostForm({post})
{

    const dispatch = useDispatch()

    const navigate = useNavigate()
    // getting user data
    const userData = useSelector((state)=>state.userReducer.userData)

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'active'
        }
    })

    // submit handler for post form
    const handlePostSubmit = async(data) => 
    {

        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Submitting Post..."}))
        
        if(post)
        {
            // need to update post
            // first upload the new file if it exists
            const newImage = data.image[0] ? await blogService.uploadFile(data.image[0]) : null

            // delete old image
            if(newImage)
            {
                await blogService.deleteFile(post.featuredImage)
            }

            // now updating
            const updatedPost = await blogService.updatePost(post.$id, {
                ...data,
                featuredImage: newImage? newImage.$id : post.featuredImage
            })

            if(updatedPost)
            {
                navigate(`/posts/${updatedPost.$id}`)
            }

        }
        else
        {
            // new post case
            // upload file first
            const newImage = data.image[0] ? await blogService.uploadFile(data.image[0]) : null
            // then create post
            if (newImage)
            {
                const newPost = await blogService.createPost({
                    ...data,
                    featuredImage: newImage.$id,
                    userId: userData.$id
                })

                if(newPost)
                {
                    // navigate to post page
                    navigate(`/posts/${data.slug}`)
                }
            }
        }

        // remove loading state
        dispatch(setLoading({loading: false, loadingMsg: ""}))

    }


    // slug transform

    // optimizing
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                // replace special chars with -
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                // replace white spaces with -
                .replace(/\s/g, "-")
                .slice(0, 36)

        return "";
    }, []);

    // useEffect to generate slug
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);


    return (


        <form onSubmit={handleSubmit(handlePostSubmit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <InputField
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {/* show slug field only when creating */}
                {!post && (
                    <InputField
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            // if user enters custom slug, transform it first
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                )}
                <TextEditor
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="w-1/3 px-2">
                <InputField
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={blogService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <SelectInput
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>


    )


}


export default PostForm