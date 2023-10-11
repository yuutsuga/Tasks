import styled from 'styled-components';

export const Body = styled.body`
    background-image: url("https://i.pinimg.com/236x/0e/e6/6f/0ee66fe9108f17c50a091a337d669760.jpg");
    display: flex;
    font-family: system-ui;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 76rem;
    color: #fff;
`

export const Wrapper = styled.div`
    position: absolute;
    background-color: #C7C7C7;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 20px;
    height: 30rem;
    width: 50rem;
    border: 2px solid rgba(255, 255, 255, .2);
    border-color: #855FF1;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
`
export const Button = styled.button`
    width: 20rem;
    height: 5rem;
    margin: 5px;
    font-size: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: rgb(143, 61, 215);
        transition: 0.5s;
    }
`
