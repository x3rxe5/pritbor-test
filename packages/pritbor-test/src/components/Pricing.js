import React from "react";
import { connect } from "frontity";
import Card from "./Card";


const Pricing = () => {
    return (
        <>
      <div className="maincontainer m-5">
        <section>
          <div className="container py-5">

            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">
                    Basic
                  </h1>
                  <h2 className="h1 font-weight-bold">
                    $199
                    <span className="text-small font-weight-normal ml-2">
                      / month
                    </span>
                  </h2>
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Lorem
                      ipsum dolor sit amet
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> At vero
                      eos et accusamus
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2" />
                      <del>Nam libero tempore</del>
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2" />
                      <del>Sed ut perspiciatis</del>
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2" />
                      <del>Sed ut perspiciatis</del>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">
                    Pro
                  </h1>
                  <h2 className="h1 font-weight-bold">
                    $399
                    <span className="text-small font-weight-normal ml-2">
                      / month
                    </span>
                  </h2>
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Lorem
                      ipsum dolor sit amet
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> At vero
                      eos et accusamus
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Nam libero
                      tempore
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2" />
                      <del>Sed ut perspiciatis</del>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">
                    Enterprise
                  </h1>
                  <h2 className="h1 font-weight-bold">
                    $899
                    <span className="text-small font-weight-normal ml-2">
                      / month
                    </span>
                  </h2>
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Lorem
                      ipsum dolor sit amet
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> At vero
                      eos et accusamus
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Nam libero
                      tempore
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" /> Sed ut
                      perspiciatis
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Card />
      </div>
      </>
    );
}


export default connect(Pricing);
