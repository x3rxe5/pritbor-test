import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Global, css,connect,Head } from "frontity";
import Switch from "@frontity/components/switch";
import NavBar from "./NavBar";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Error from "./Error";
import Post from "./Post";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
      <>
        <Head>
          <title>Pritbor Test</title>
          <meta
            name="description"
            content="pritbor test"
          />
        </Head>
        {/* Global Styles */}
        <Global styles={css(bootstrap)} />

        {/* Navbar */}
        <NavBar />

        {/* Switch */}
        <Switch>
          <Pricing when={data.isArchive}/>
          <Post when={data.isPost} />
          <Error when={data.isError} />
        </Switch>

        {/* Footer */}
        <Footer />
      </>
    );
};

export default connect(Root);