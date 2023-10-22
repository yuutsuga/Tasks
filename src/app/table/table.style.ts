import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    color: #fff;
    font-family: system-ui;
    background-image: url('https://i.pinimg.com/564x/d3/d2/8f/d3d28f1b49766ebd8a03adf48f7519fd.jpg');
    background-position: center;
    background-repeat: none;
    background-size: cover;
`
export const Cell = styled.input`
    width: 200px;
    height: 70px;
    border: 2px solid rgba(255, 255, 255, .2);
    border-color: #855FF1;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
`
export const Cells = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Button = styled.button`
    position: relative;
    bottom: 20rem;
    width: 20rem;
    height: 5rem;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: rgb(143, 61, 215);
        transition: 0.5s;
    }
`
