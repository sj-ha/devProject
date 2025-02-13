/* eslint-disable */

import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const Navibar = (props) => {
    return(
        <>
        {/* Navigation */}
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
          <div className="container">
            {/* Image Logo */}
            <a className="navbar-brand logo-image" href="index.html"><div width="222px" height="50px"><img src="assets/images/위트래블_blk.png" alt="WeTravelLogo" /></div></a> 
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
                  <Link to="/"><a className="nav-link">Home</a></Link>
                </li>
              </ul>
              {
                props.로그인상태
                ? `${props.유저.nickname}님 안녕하세요`
                : null
              }
              <span className="nav-item">
                
                  {
                    !props.로그인상태
                    ? <Link to="/login"><button className="btn-solid-sm">로그인</button></Link>
                    : <button className="btn-solid-sm " onClick={() => {props.dispatch({type : '로그아웃'})}}>로그아웃</button>
                  }
                
                {/* 로그인시 로그아웃 , 회원수정 버튼 생성 (로그인 버튼 hide)*/}
                {/* <a class="btn-solid-sm" href="#contact">로그아웃</a>
                    <a class="btn-solid-sm" href="#contact">회원수정</a> */}
              </span>
            </div> {/* end of navbar-collapse */}
          </div> {/* end of container */}
        </nav> {/* end of navbar */}
        {/* end of navigation */}
        </>
    );
}

function props화함수 (state) {
  return {
    유저 : state.userReducer,
    로그인상태 : state.loginReducer
  }
}
export default connect(props화함수)(Navibar);