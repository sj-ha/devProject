import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SingUpSuccess(){
  return(
    <div>
        {/* Navigation */}
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
          <div className="container">
            {/* Image Logo */}
            <a className="navbar-brand logo-image" href="index.html"><img src="assets/images/logo.svg" alt="alternative" /></a> 
            {/* Text Logo - Use this if you don't have a graphic logo */}
            {/* <a class="navbar-brand logo-text" href="index.html">Zinc</a> */}
            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ms-auto navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#header">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="article.html">Article Details</a></li>
                    <li><div className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
                    <li><div className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                  </ul>
                </li>
              </ul>
              <span className="nav-item">
                <a className="btn-solid-sm" href="#contact">Get quote</a>
              </span>
            </div> {/* end of navbar-collapse */}
          </div> {/* end of container */}
        </nav> {/* end of navbar */}
        {/* end of navigation */}
        {/* Contact */}
        <div id="contact" className="form-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">위트래블 가입을 축하드립니다!</h2>
                <p className="p-heading">
                  회원가입이 성공적으로 완료되었습니다.<br />
                  위트래블에서 여행을 더욱 특별하게 해줄 동행을 구해보세요!
                </p>
                <br />
                <br />
                <div className="form-group">
                  <Link to="/login"><button type="submit" className="form-control-submit-button" style={{width: '200px'}}>로그인 하러 가기</button></Link>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of form-1 */}
        {/* end of contact */}
        {/* Footer */}
        <div className="footer bg-gray">
          <img className="decoration-city" src="assets/images/decoration-city.svg" alt="alternative" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>Pellentesque aliquet mi eu tortor dictum, non imperdiet ante viverra. Phasellus eget enim orci ut pellentes troc</h4>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
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