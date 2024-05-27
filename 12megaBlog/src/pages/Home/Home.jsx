import React from 'react'
import {Container, PostCard} from "../../components"
import { useSelector, useDispatch } from 'react-redux'
import {setLoading, setPosts} from "../../slices"
import {blogService} from "../../services"


function Home()
{

    // getting dispatch
    const dispatch = useDispatch()
    // getting access of posts from store
    const posts = useSelector((state) => state.postReducer.posts)

    // getting logged in status
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn)

    // fetching posts from service on component mount
    React.useEffect(() =>
    {
        if(isLoggedIn)
        {
            // set loading to true
            dispatch(setLoading({loading: true, loadingMsg: "Fetching posts..."}))
            // fetching posts
            blogService.getPosts()
            .then((myPosts)=>{
                // console.log(myPosts)
                if(myPosts)
                {
                    // set loading to false
                    // set posts to store
                    dispatch(setPosts(myPosts.documents))
                    // console.log("inside if")
                }
                // console.log("outside if")
            })
            .finally(()=>{
                // remove loading state
                dispatch(setLoading({loading: false, loadingMsg: ""}))
            })
        }
    }, [isLoggedIn])

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


export default Home