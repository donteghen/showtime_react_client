import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {  Modal } from "antd";
import { useEffect } from "react";
const MainDiv= styled.div`
background: #0052D4;
background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); 
padding:60px 50px; height:100vh; width:100%;
`;
function Confirm () {
    const history = useHistory()
    useEffect(() => {
        error()
    })
    const okhandler = () => {
        setTimeout(() => {
            history.push('/dashboard')
        }, 2000);
    }
    function error() {
        Modal.error({
          title:"You are about to sign out!",
          centered:true,
        onOk:() => okhandler(),
        width:1000,
          content: 'Confirm to continue',
        });
      }
    return (
      <MainDiv>
        
      </MainDiv>
    )
  }
  export default Confirm;