import React, { Component } from "react";
import styled, { css } from "styled-components";
import policePng from '../../assets/Grama.jpg';

function gramaCertificate(props) {

  var nic = "199936225525"
  var address = "204 Panchikawatte Road, 10"

  return (
    <Container>
      <PoliceCertificationStackStackRow>
        <PoliceCertificationStackStack>
          <PoliceCertificationStack>
            <PoliceCertification>Grama Certification</PoliceCertification>
            <Rect3></Rect3>
          </PoliceCertificationStack>
          <LoremIpsum>
            This is to certify person holding National Identity card
            bearing number{"\n"}
            {" " + nic} who has been residing at {"\n"}
            {" " + address} in my police station area to{"\n"}has not been
            involved in any criminal activities, nor has he/she come to the
            {"\n"}adverse notice of during the period of residence in my area.
          </LoremIpsum>
          <Rect></Rect>
          <Auther>
            Authorised by officer in charge{"\n"}
            Village Officer{"\n"}
            Negombo
          </Auther>
          <Auther1>To Whom It May Concern,</Auther1>
          <Image
            src={policePng}
          ></Image>
          <Date>DATE :</Date>
        </PoliceCertificationStackStack>
      </PoliceCertificationStackStackRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(213,254,227,0);
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const PoliceCertification = styled.span`
  font-family: Roboto;
  top: 46px;
  left: 80px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 49px;
  width: 960px;
  font-size: 35px;
  text-align: center;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 1119px;
  height: 646px;
  position: absolute;
  border-width: 4px;
  border-color: #000000;
  border-style: solid;
`;

const PoliceCertificationStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1119px;
  height: 646px;
  position: absolute;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 231px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 19px;
  left: 569px;
`;

const Rect = styled.div`
  top: 95px;
  width: 960px;
  height: 5px;
  position: absolute;
  background-color: rgba(0,0,0,0.54);
  left: 80px;
`;

const Auther = styled.span`
  font-family: Roboto;
  top: 468px;
  left: 569px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 74px;
  width: 418px;
  font-size: 18px;
  text-align: left;
`;

const Auther1 = styled.span`
  font-family: Roboto;
  top: 168px;
  left: 569px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 37px;
  width: 277px;
  font-size: 18px;
  text-align: left;
`;

const Image = styled.img`
  top: 117px;
  left: 116px;
  width: 382px;
  height: 452px;
  position: absolute;
  object-fit: contain;
`;

const Date = styled.span`
  font-family: Roboto;
  top: 138px;
  left: 569px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 18px;
`;

const PoliceCertificationStackStack = styled.div`
  width: 1119px;
  height: 646px;
  position: relative;
`;

const Rect2 = styled.div`
  width: 1142px;
  height: 626px;
  border-width: 4px;
  border-color: #000000;
  margin-left: 253px;
  margin-top: 22px;
  border-style: solid;
`;

const PoliceCertificationStackStackRow = styled.div`
  height: 648px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -1291px;
  margin-left: 143px;
  margin-top: 49px;
`;

export default gramaCertificate;
