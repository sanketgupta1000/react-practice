import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {blogService} from "./../../services";
import { Button, Container } from "../../components";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../slices";

export default function Post() {

    const dispatch = useDispatch();
    // state for post data
    const [post, setPost] = useState(null);

    // getting post id from dynamic url
    const { postId } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.userReducer.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    // fetching
    useEffect(() =>
    {
        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Fetching post..."}));

        if (postId)
        {
            blogService.getPost(postId)
            .then((post) =>
                {
                    if (post) setPost(post);
                    else navigate("/");
                    dispatch(setLoading({loading: false, loadingMsg: ""}));
                }
            );
        }
        else
        {
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}));
            navigate("/");
        }
    }, [postId, navigate]);

    // callback for deleting
    const deletePost = () =>
    {
        // set loading state
        dispatch(setLoading({loading: true, loadingMsg: "Deleting post..."}));

        blogService.deletePost(post.$id).then((status) => {
            if (status)
            {
                // delete image too
                blogService.deleteFile(post.featuredImage);
                navigate("/");
            }
        })
        .finally(()=>{
            // remove loading state
            dispatch(setLoading({loading: false, loadingMsg: ""}));
        })

    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={blogService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/posts/${post.$id}/edit`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}