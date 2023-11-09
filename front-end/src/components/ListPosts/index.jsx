import React, {useEffect, useState} from 'react';
import Post from "../Post";

function ListPosts() {
    const [listOfPosts, setListPost] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                let headers = new Headers();
                let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
                headers.append('Authorization', 'Bearer ' + jwtToken);
                const response = await fetch('http://localhost:3000/api/posts/', {
                    method: 'GET',
                    headers: headers,
                })
                const listPosts = await response.json()
                // console.log(listPosts);
                setListPost(listPosts)
            } catch (err) {
                console.log(err)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="gmr__column gmr__align_items">
            <h1>Dernières actualités</h1>
            <div className="gmr__reverse_column">
                {listOfPosts.map((post, index) => (
                    <Post
                        key={post._id}
                        postId={post._id}
                        imageUrl={post.imageUrl}
                        usersLiked={post.usersLiked}
                        numberOfPostLikes={post.likes}
                        description={post.description}
                        authorId={post.userId}/>
                ))}
            </div>
        </div>
    )
}

export default ListPosts
