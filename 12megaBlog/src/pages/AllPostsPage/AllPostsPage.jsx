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
        dispatch(setLoading(true))
        // fetching posts
        blogService.getPosts()
        .then((myPosts)=>{
            if(myPosts)
            {
                // set loading to false
                dispatch(setLoading(false))
                // set posts to store
                dispatch(setPosts(myPosts.documents))
            }
        })
    }, [])

    return (


        <div className="w-full py-8">

            <Container>

                <div className="flex-flex-wrap">

                    {/* mapping posts and displaying */}
                    {posts.map((post) => 
                        (
                            <div key={post.$id} className='p-2 w-1/4'>

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