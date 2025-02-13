/* eslint-disable */

import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Navibar from './Navibar'
import { connect } from 'react-redux'

const Home = (props) => {

  const [user, setUser] = useState({});

  useEffect(() => {
      axios.get("http://localhost:8080/user/1").then((res) => {
      setUser(res.data);
    });
  }, []);
    return (
        <div>
            <Navibar></Navibar>
        {/* Header */}
        <header id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5">
                <div className="text-container">
                  <div className="section-title">여행</div>
                  <h1 className="h1-large">동행 부제목</h1>
                  {/* <p className="p-large">{user.name} = {user.nickname}</p> */}
                  <a className="btn-solid-lg" href="#services">바로 가기</a>
                </div> {/* end of text-container */}
              </div> {/* end of col */}
              <div className="col-lg-6 col-xl-7">
                <div className="image-container">
                  <img className="img-fluid" src="assets/images/travelmainimage.png" alt="WeTravel" />
                </div> {/* end of image-container */}
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </header> {/* end of header */}
        {/* end of header */}
        {/* Details 1 */}
        <div id="details" className="basic-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-7">
                <div className="image-container">
                  <img className="img-fluid" src="assets/images/details-1.svg" alt="WeTravel" />
                </div> {/* end of image-container */}
              </div> {/* end of col */}
              <div className="col-lg-6 col-xl-5">
                <div className="text-container">
                  <h2><span>Perfect solution</span><br /> for your small business</h2>
                  <p>Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</p>
                  <p>Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</p>
                  <ModalBtn/>
                </div> {/* end of text-container */}
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of basic-1 */}
        {/* end of details 1 */}
        {/* Details Modal */}
        <div id="staticBackdrop" className="modal fade" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="row">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                <div className="col-lg-8">
                  <div className="image-container">
                    <img className="img-fluid" src="assets/images/details-modal.jpg" alt="alternative" />
                  </div> {/* end of image-container */}
                </div> {/* end of col */}
                <div className="col-lg-4">
                  <h3>Goals Setting</h3>
                  <hr />
                  <p>In gravida at nunc sodales pretium. Vivamus semper, odio vitae mattis auctor, elit elit semper magna ac tum nico vela spider</p>
                  <h4>User Feedback</h4>
                  <p>Sapien vitae eros. Praesent ut erat a tellus posuere nisi more thico cursus pharetra finibus posuere nisi. Vivamus feugiat</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Tincidunt sem vel brita bet mala</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Sapien condimentum sacoz sil necr</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Fusce interdum nec ravon fro urna</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Integer pulvinar biolot bat tortor</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Id ultricies fringilla fangor raq trinit</div>
                    </li>
                  </ul>
                  <a id="modalCtaBtn" className="btn-solid-reg" href="#">Details</a>
                  <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Close</button>
                </div> {/* end of col */}
              </div> {/* end of row */}
            </div> {/* end of modal-content */}
          </div> {/* end of modal-dialog */}
        </div> {/* end of modal */}
        {/* end of details modal */}
        {/* Projects */}
        <div id="projects" className="filter bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Projects that we're proud of</h2>
              </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
              <div className="col-lg-12">
                {/* Filter */}
                <div className="button-group filters-button-group">
                  <button className="button is-checked" data-filter="*">ALL</button>
                  <button className="button" data-filter=".design">DESIGN</button>
                  <button className="button" data-filter=".development">DEVELOPMENT</button>
                  <button className="button" data-filter=".marketing">MARKETING</button>
                </div> {/* end of button group */}
                <div className="grid">
                  <div className="element-item development">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-1.jpg" alt="alternative" />
                      <p><strong>Online banking</strong> - pellentesque tincidunt leo eu laoreedt integer quis vanos compren</p>
                    </a>
                  </div>
                  <div className="element-item development">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-2.jpg" alt="alternative" />
                      <p><strong>Loans company</strong> - odio semper, interdum orci molestie, mattis lectus pellentesq aliqu</p>
                    </a>
                  </div>
                  <div className="element-item development">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-3.jpg" alt="alternative" />
                      <p><strong>Refinance firm</strong> - arcu a neque congue finibus doneci malesuada et purus melan bris</p>
                    </a>
                  </div>
                  <div className="element-item design development">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-4.jpg" alt="alternative" />
                      <p><strong>Financial products</strong> - id aliquam ut malesuada eros utr varius blandit aliquam tinci bist</p>
                    </a>
                  </div>
                  <div className="element-item design development">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-5.jpg" alt="alternative" />
                      <p><strong>Credit cards</strong> - magna a feugiat cras a semper tellus in rhoncus vehicula tellus rugo</p>
                    </a>
                  </div>
                  <div className="element-item design marketing">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-6.jpg" alt="alternative" />
                      <p><strong>Software robots</strong> - vel sodales dolor donec a est sapien integer pharetr bilom conva</p>
                    </a>
                  </div>
                  <div className="element-item design marketing">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-7.jpg" alt="alternative" />
                      <p><strong>Company control</strong> - ut quam aliquam elemo de vestibulum fringilla porttitor vanic tres</p>
                    </a>
                  </div>
                  <div className="element-item design marketing">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-8.jpg" alt="alternative" />
                      <p><strong>Audit reports</strong> - sed tempor, metus vel pharetra finibus, est ante hendrerit augue</p>
                    </a>
                  </div>
                  <div className="element-item design marketing">
                    <a href="article.html">
                      <img className="img-fluid" src="assets/images/project-9.jpg" alt="alternative" />
                      <p><strong>Big business</strong> - aliquam semper molestie nisi, at porttitor lacus suscipit in mole richter</p>
                    </a>
                  </div>
                </div> {/* end of grid */}
                {/* end of filter */}
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of filter */}
        {/* end of projects */}
        {/* Footer */}
        <div className="footer bg-gray">
          <div className="copyright bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled li-space-lg p-small">
                    <li><a href="article.html">#</a></li>
                    <li><a href="terms.html">#</a></li>
                    <li><a href="privacy.html">#</a></li>
                  </ul>
                </div> {/* end of col */}
                <div className="col-lg-6">
                  <p className="p-small statement">Copyright © <a href="#"> 한국소프트웨어인재개발원</a></p>
                </div> {/* end of col */}
              </div> {/* enf of row */}
            </div> {/* end of container */}
          </div> {/* end of copyright */} 
        </div> {/* end of footer */}  
        {/* end of footer */}
        {/* Back To Top Button */}
        <button onclick="topFunction()" id="myBtn">
          <img src="assets/images/up-arrow.png" alt="alternative" />
        </button>
        {/* end of back to top button */}
        </div>
    )
}

const ModalWindow = () => {
  return(
    <>
      <div id="staticBackdrop" className="modal fade" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="row">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                <div className="col-lg-8">
                  <div className="image-container">
                    <img className="img-fluid" src="assets/images/details-modal.jpg" alt="alternative" />
                  </div> {/* end of image-container */}
                </div> {/* end of col */}
                <div className="col-lg-4">
                  <h3>Goals Setting</h3>
                  <hr />
                  <p>In gravida at nunc sodales pretium. Vivamus semper, odio vitae mattis auctor, elit elit semper magna ac tum nico vela spider</p>
                  <h4>User Feedback</h4>
                  <p>Sapien vitae eros. Praesent ut erat a tellus posuere nisi more thico cursus pharetra finibus posuere nisi. Vivamus feugiat</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Tincidunt sem vel brita bet mala</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Sapien condimentum sacoz sil necr</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Fusce interdum nec ravon fro urna</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Integer pulvinar biolot bat tortor</div>
                    </li>
                    <li className="d-flex">
                      <i className="fas fa-chevron-right" />
                      <div className="flex-grow-1">Id ultricies fringilla fangor raq trinit</div>
                    </li>
                  </ul>
                  <a id="modalCtaBtn" className="btn-solid-reg" href="#">Details</a>
                  <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Close</button>
                </div> {/* end of col */}
              </div> {/* end of row */}
            </div> {/* end of modal-content */}
          </div> {/* end of modal-dialog */}
        </div> {/* end of modal */}
    </>
  );
}

const ModalBtn = () => {
  return(
    <>
      <a className="btn-solid-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modal</a>
    </>
  );
}

function props화함수 (state) {
  return {
    유저 : state.userReducer,
    로그인상태 : state.loginReducer
  }
}
export default connect(props화함수)(Home);