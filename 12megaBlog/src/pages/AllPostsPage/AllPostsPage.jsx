import React from 'react'
import {Container, PostCard} from "../../components"
import { useSelector, useDispatch } from 'react-redux'
import {setLoading, setPosts} from "../../slices"
import {blogService} from "../../services"


function AllPostsPage()
{

    // getting dispatch
    const dispatch = useDispatch()
    // getting access of posts from store
    const posts = useSelector((state) => state.postReducer.posts)

    // fetching posts from service on component mount
    React.useEffect(() =>
    {
        // set loading to true
        dispatch(setLoading({loading: true, loadingMsg: "Fetching posts..."}))
        // fetching posts
        blogService.getPosts()
        .then((myPosts)=>{
            if(myPosts)
            {
                // set loading to false
                // set posts to store
                dispatch(setPosts(myPosts.documents))
            }
        })
        .finally(()=>{
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}))
        })
    }, [])

    return (


        <div className="w-full py-8">

            <Container>

                <div className="masonry sm:masonry-sm md:masonry-md">

                    {/* mapping posts and displaying */}
                    {posts.map((post) => 
                        (
                            <div key={post.$id} className='p-2 break-inside'>

                                <PostCard {...post} />

                            </div>
                        )
                    )}

                </div>

            </Container>

        </div>


    )


}


export default AllPostsPage