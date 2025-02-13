/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function SignUp() {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [basicAddress, setBasicAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    useEffect(() => {
      const userForm = {"name" : name, "nickname" : nickname, "password" : password, "basicAddress" : basicAddress, "detailAddress" : detailAddress}
      setUser(userForm);
    }, [name, nickname, password, basicAddress, detailAddress]);

    const 회원가입 = () => {
      axios.post("http://localhost:8080/user", user).then(() => console.log('회원가입 성공')) 
    }
    return (
        <div>
            {/* Navigation */}
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
          <div className="container">
            {/* Image Logo */}
            <Link to="/"><a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="WeTravel" /></a></Link>
            {/* Text Logo - Use this if you don't have a graphic logo */}
            {/* <a class="navbar-brand logo-text" href="index.html">Zinc</a> */}
            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ms-auto navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#header">소개</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">공지사항</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">동행관련</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="article.html">#</a></li>
                    <li><div className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="terms.html">#</a></li>
                    <li><div className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="privacy.html">#</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">커뮤니티</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">#</a>
                </li>
              </ul>
              <span className="nav-item">
                <a className="btn-solid-sm" href="#contact">#</a>
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
                <h2 className="h2-heading">회원가입</h2>
                <br />
              </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {/* Contact Form */}
                <form>
                  {/* <div className="form-group">
                    <input type="text" className="form-control-input" placeholder="이름" style={{width: '300px', borderColor: 'lightgray'}}
                    onChange = {(e) => 이름변경(e.target.value)} />
                  </div> */}
                  <FormGroup type = "text" placeholder="이름" onChange = {(e) => setName(e.target.value)}/>
                  <FormGroup type = "text" placeholder="아이디" onChange = {(e) => setNickname(e.target.value)}/>
                  <FormGroup type = "password" placeholder="비밀번호" onChange = {(e) => setPassword(e.target.value)}/>
                  <FormGroup type = "password" placeholder="비밀번호 재확인"/>
                  <FormGroup type = "text" placeholder="주소" onChange = {(e) => setBasicAddress(e.target.value)}/>
                  <FormGroup type = "text" placeholder="상세주소" onChange = {(e) => setDetailAddress(e.target.value)}/>
                  <FormGroup type = "text" placeholder="우편번호"/>
                  <div className="form-group">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultValue="여성" />여성
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultValue="남성" />남성
                  </div>
                  <div className="form-group">
                    <Link to="/signUpSuccess"><button type="submit" className="form-control-submit-button" style={{width: '100px'}} onClick = {회원가입}>가입 완료</button></Link>
                  </div>
                </form>
                {/* end of contact form */}
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of form-1 */}
        {/* end of contact */}
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
          <img src="images/up-arrow.png" alt="alternative" />
        </button>
        {/* end of back to top button */}
        </div>
    )
}

const FormGroup = (props) => {
  return(
    <div className="form-group">
        <input type={props.type} 
                className="form-control-input" 
                placeholder={props.placeholder}
                onChange = {props.onChange} 
                style={{width: '300px', borderColor: 'lightgray'}}
                    />
    </div>
  );

}