import React from "react";
import { connect } from "frontity";
// import Link from "frontity";
import Link from "@frontity/components/link";

const Card= ({ state }) => {
    const data = state.source.get(state.router.link);
    const items = data.items;
    console.log("data -> ",data);
    console.log("Items ",items);
    return (
      <section className="container-fluid">
        {/* <div className="container-fluid"> */}
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 p-5 text-center">
              <h1 className="text-primary">Blog Post</h1>
            </div>
            <div className="col-md-4"></div>
          </div>
        {/* </div> */}

        {/* <div className="container-fluid"> */}
          <div className="row">
            {
              items.map((item) => {
                const post = state.source[item.type][item.id];
                console.log("Post -> ",post);
                return(
                  <div className="col-md-4 ml-3" key={item.id}>
                    <div className="card " style={{ width: "18rem" }}>
                      <div className="card-body p-4">
                        <h5 className="card-title" >{post.title.rendered}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">
                          Some quick example text to build on the card title and make up
                          the bulk of the card's content.
                        </p>
                        <Link link={post.link} className="card-link">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
          </section>
    );
}

export default connect(Card);