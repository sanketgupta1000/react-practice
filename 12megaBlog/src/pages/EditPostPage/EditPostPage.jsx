import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { blogService } from '../../services'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../slices'
import { PostForm, Container } from '../../components'


function EditPostPage()
{

    const dispatch = useDispatch()

    // getting post id from dynamic url
    const {postId} = useParams()
    // fetching post data upon component mount
    const [postData, setPostData] = useState(null)
    useEffect(()=>{
        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Fetching post..."}))
        
        blogService.getPost(postId)
        .then((post)=>{
            if(post)
            {
                // set loading to false
                dispatch(setLoading(false))
                // set in state
                setPostData(post)
            }
        })
        .finally(()=>{
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}))
        })
    }, [postId])

    return (

        postData ? (

            <div className="py-8">

                <Container>
                    <PostForm
                        post={postData}
                    />
                </Container>

            </div>

        )
        :
        null

    )


}


export default EditPostPage