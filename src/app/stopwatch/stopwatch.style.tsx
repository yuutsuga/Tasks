import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: #fff;
    font-family: system-ui;
    background-image: radial-gradient(#B454F4, #581484);
    background-position: center;
    background-repeat: none;
    background-size: cover;
`
export const Sw = styled.div`
    position: absolute;
    background-color: #252525;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
`

export const Timer = styled.span`
    font-size: 40px;
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 5px;
    width: 90px;
    height: 70px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: rgb(143, 61, 215);
        transition: 0.5s;
    }
`
