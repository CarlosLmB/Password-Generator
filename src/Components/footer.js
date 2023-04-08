import React from "react";
import styled from 'styled-components';

function Footer() {
    return (
      <FooterWrapper>
        <BottomBar>
          <div className="container">
            <div className="row">
              <div className="col">
                <BottomBarText>&copy; Carlos Cordero. All rights reserved.</BottomBarText>
              </div>
            </div>
          </div>
        </BottomBar>
      </FooterWrapper>
    );
  }
  
  export default Footer;
  
  const FooterWrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const BottomBar = styled.div`
  background-color: #1d1d4e;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;

const BottomBarText = styled.p`
  margin: 0;
`;

