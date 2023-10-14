import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    color: #fff;
    font-family: system-ui;
    background-image: radial-gradient(#B454F4, #581484);
    background-position: center;
    background-repeat: none;
    background-size: cover;
`

export const Calc = styled.div`
    position: absolute;
    background-color: #252525;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, .2);
    border-color: #855FF1;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
`

export const Button = styled.button`
    margin-top: 10px;
    width: 55px;
    position: relative;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: rgb(143, 61, 215);
        transition: 0.5s;
    }
`

export const Result = styled.h1`
    border-radius: 5px;
    background-color: #fff;
    height: 40px;
    color: black;
    font-size: 25px;
    text-align: end;
    margin: 5px;
    border: 2px solid rgba(255, 255, 255, .2);
    border-color: #855FF1;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
`
export const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`
export const Title = styled.h1`
    margin-bottom: 10px;
    color: white;
    cursor: default;
    &:hover{
        color: white;
        text-shadow: 0 0 8px white;
    }
`
