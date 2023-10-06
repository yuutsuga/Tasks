import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: #fff;
    font-family: system-ui;
`

export const Calc = styled.div`
    position: absolute;
    background-color: #252525;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
`

export const Button = styled.button`
    margin-top: 10px;
    width: 50px;
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
export const Result = styled.div`
    border-radius: 5px;
    background-color: #fff;
    height: 30px;
    color: black;
    font-size: 25px;
    text-align: end;
    margin: 2px;
`
export const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`
export const Title = styled.h1`
    margin-bottom: 10px;
`
