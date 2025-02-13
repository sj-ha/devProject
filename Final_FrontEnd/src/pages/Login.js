/* eslint-disable */

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'; 

const Login = (props) => {
  
  const [user, setUser] = useState({});
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const history = useHistory();

  useEffect(() => {
    const loginForm = {"nickname" : id, "password" : pw}
    setUser(loginForm);
  }, [id, pw]);

  const 로그인 = () => {
    axios.post("http://localhost:8080/login", user)
    .then((res) => {
    if(res.data){
      props.dispatch({type : '로그인'});
    }
    })
    .then(() => {
      if(id == '' || pw == ''){
        alert('아이디 또는 패스워드를 입력해주세요')
      } else {
        if(props.로그인상태 == true) {
          alert('로그인에 성공하셨습니다')
          history.goBack();
        } else {
          alert('로그인에 실패하셨습니다')
        }
      }
      
    });
  }

    return (
        <div>
        {/* 로 그 인 */}
        {/* Navigation */}
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
          <div className="container">
            {/* Image Logo */}
            <Link to="/"><a className="navbar-brand logo-image"><img src="assets/images/logo.svg" alt="WeTravel" /></a></Link>
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
                <h2 className="h2-heading">간편가입 / 로그인</h2>
                <p className="p-heading">위트래블을 통해 벗을 만나보세요! {props.유저.nickname}</p>
                <br />
                <br />
              </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {/* Contact Form */}
                <form>
                  <div className="form-group">
                    <a href="#####"><img src="http://lab.anybuild.co.kr/API/naver/img/naver_g_c_login.PNG" width="300px" height="45px" /></a>
                  </div>
                  <div className="form-group">
                    <a href="#####"><img src="assets/images/kakao_login_medium_wide.png" width="300px" height="45px" /></a>
                  </div>
                  <p className="p-heading" style={{fontSize: '13px'}}>OR</p><br />
                  <div className="form-group">
                    <input type="text" className="form-control-input" placeholder="아이디" style={{width: '300px', borderColor: 'lightgray'}} 
                    onChange = {(e) => {setId(e.target.value)}}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control-input" placeholder="비밀번호" style={{width: '300px', borderColor: 'lightgray'}}
                    onChange = {(e) => {setPw(e.target.value)}}/>
                  </div><br />
                  <div className="form-group">
                    <button type="button" className="form-control-submit-button" style={{width: '100px'}} onClick = {로그인}>로그인</button>
                  </div>
                  
                  <div className="form-group">
                  <Link to="/signUp"><a className="nav-link" style={{fontSize: '12px'}}>위트래블이 처음이신가요?&nbsp;&nbsp;
                    <strong>회원가입 하러가기</strong></a></Link>
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
                  <p className="p-small statement">Copyright © 한국소프트웨어인재개발원</p>
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

function props화함수 (state) {
  return {
    유저 : state.userReducer,
    로그인상태 : state.loginReducer
  }
}
export default connect(props화함수)(Login);