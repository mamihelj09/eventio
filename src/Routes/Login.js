import React from 'react';
import styled from 'styled-components';
import LoginBox from '../Containers/Login/LoginBox';

const Login = () => (
  <div className="row">
    <div className="col--s-hide col--4-of-12 col">
      <ImageBox>
        <h1>E.</h1>
        <div>
          <h2>&quot;Great, kid. Don&apos;t<br />get cocky.&quot;</h2>
          <span>_</span>
          <h3>Han Solo</h3>
        </div>
      </ImageBox>
    </div>
    <LoginBox />
  </div>
);

const ImageBox = styled.div`
  width:100%;
  height:100%;
  background: url("/style/main-min.png");
  background-size:cover;
  background-position:center;
  position:relative;
  color:#fff;
  & > h1{
    font-size:26px;
    position:absolute;
    top:20px;
    left:30px;
  }
  & > div{
    position:absolute;
    bottom:30px;
    width:100%;
    text-align:center;
    & > h2{
      font-size:28px;
      font-family:"Playfair";
    }
    & > span{
      display:block;
      font-size:18px;
      color:#22d486;
    }
    & > h3{
      font-weight:400;
      font-size: 14px;
    }
  }
`;

export default Login;
