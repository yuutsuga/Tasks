import styled from "styled-components";

export const Body = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
	gap: 20px;
    font-family: system-ui;
    background-image: url('https://i.pinimg.com/564x/d3/d2/8f/d3d28f1b49766ebd8a03adf48f7519fd.jpg');
    background-position: center;
    background-repeat: none;
    background-size: cover;
`
export const Line = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
`
export const Cells = styled.div`
	display: flex;
	flex-direction: column;
`
export const Button = styled.button`
    cursor: pointer;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
    margin: 3px;
    border-radius: 5px;
    &:hover {
        background-color: rgb(143, 61, 215);
        transition: 0.5s;
    }
`
export const Cell = styled.input`
	border: 2px solid rgba(255, 255, 255, .2);
    border-color: #856FF1;
    border-radius: 5px;
    margin: 2px;
    height: 50px;
`
export const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`
