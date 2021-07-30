import React from "react";
import { connect,Head } from "frontity";

const Post = ({ state,libraries }) => {
    const Html2React = libraries.html2react.Component

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    console.log(author);
    return (
        <>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <h2>{post.title.rendered}</h2>
                    </div>
                    <div className="col-md-4">
                        {/* {author.name} */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center text-gray">
                    By : {author.name}
                </div>
            </div>
            <div className="row py-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                    <Html2React html={post.content.rendered} />
                </div>
                <div className="col-md-2"></div>
            </div>
        </>
    )
}

export default connect(Post);