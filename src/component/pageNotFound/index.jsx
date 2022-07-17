import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import signInBackground from "../../assets/images/signInBackground.svg";
import gsap, { Linear } from "gsap";
import { StyledButton } from "../SignIn/styledSignIn";
import { useNavigate } from "react-router-dom";
export const PageNotFound = () => {
  const navigate = useNavigate();
  const cog1 = useRef();
  const cog2 = useRef();

  const wrongPara = useRef();
  let t1 = gsap.timeline();
  let t2 = gsap.timeline();
  let t3 = gsap.timeline();
  useEffect(() => {
    t1.to(cog1.current, {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });
    t2.to(cog2.current, {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });
    t3.fromTo(
      wrongPara.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true,
        },
      }
    );
  });
  return (
    <>
      <StyledMainContainer
        style={{ backgroundImage: `url(${signInBackground})` }}
        className="container"
      >
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1" ref={cog1}>
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="cog-wheel2">
          <div className="cog2" ref={cog2}>
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <h1 className="second-four">4</h1>
        <h2 className="wrong-para" ref={wrongPara}>
          Uh Oh! Page not found!
          <StyledButton onClick={() => navigate("/")}>Go to home</StyledButton>
        </h2>
      </StyledMainContainer>
    </>
  );
};
const StyledMainContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"rel="stylesheet");

  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700");

  background: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  position: relative;
  //   left: 6vmin;
  //   text-align: center;
  z-index: 1000;

  .cog-wheel1,
  .cog-wheel2 {
    transform: scale(0.7);
  }

  .cog1,
  .cog2 {
    width: 40vmin;
    height: 40vmin;
    border-radius: 50%;
    border: 6vmin solid #0f63d9;
    position: relative;
  }

  .cog2 {
    border: 6vmin solid #1f99d7;
  }

  .top,
  .down,
  .left,
  .right,
  .left-top,
  .left-down,
  .right-top,
  .right-down {
    width: 10vmin;
    height: 10vmin;
    background-color: #0f63d9;
    position: absolute;
  }

  .cog2 .top,
  .cog2 .down,
  .cog2 .left,
  .cog2 .right,
  .cog2 .left-top,
  .cog2 .left-down,
  .cog2 .right-top,
  .cog2 .right-down {
    background-color: #1f99d7;
  }

  .top {
    top: -14vmin;
    left: 9vmin;
  }

  .down {
    bottom: -14vmin;
    left: 9vmin;
  }

  .left {
    left: -14vmin;
    top: 9vmin;
  }

  .right {
    right: -14vmin;
    top: 9vmin;
  }

  .left-top {
    transform: rotateZ(-45deg);
    left: -8vmin;
    top: -8vmin;
  }

  .left-down {
    transform: rotateZ(45deg);
    left: -8vmin;
    top: 25vmin;
  }

  .right-top {
    transform: rotateZ(45deg);
    right: -8vmin;
    top: -8vmin;
  }

  .right-down {
    transform: rotateZ(-45deg);
    right: -8vmin;
    top: 25vmin;
  }

  .cog2 {
    position: relative;
    left: -10.2vmin;
    bottom: 10vmin;
  }

  h1 {
    color: ${({ theme }) => theme.color.lightBlack};
  }

  .first-four {
    position: relative;
    left: 6vmin;
    font-size: 40vmin;
  }

  .second-four {
    position: relative;
    right: 18vmin;
    z-index: -1;
    font-size: 40vmin;
  }

  .wrong-para {
    font-family: "Montserrat", sans-serif;
    position: absolute;
    bottom: 10vmin;
    padding: 3vmin 12vmin 3vmin 3vmin;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.color.lightBlack};
  }
`;
