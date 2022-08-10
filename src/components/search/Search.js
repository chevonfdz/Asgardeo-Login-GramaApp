import React from 'react'
import { useState, useEffect } from 'react'
import './SearchStyles.css'
import { useForm } from 'react-hook-form'
import { useAuthContext } from "@asgardeo/auth-react";
import axios from "axios";
import qs from 'qs';
import Modal from "react-modal";
import styled, { css } from "styled-components";
import policePng from '../../assets/Grama.jpg';

import Video from '../../assets/GRMA CHECK.mp4'


function Search() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { state, getIDToken, signIn } = useAuthContext();

    const obtainAccessToken = () => {
        getIDToken().then((IDToken) => {
            console.log("ID token given in the beginning: " + IDToken)
            var data = qs.stringify({
                'grant_type': 'urn:ietf:params:oauth:grant-type:token-exchange',
                'subject_token': IDToken,
                'subject_token_type': 'urn:ietf:params:oauth:token-type:jwt',
                'requested_token_type': 'urn:ietf:params:oauth:token-type:jwt'
            });
            var config = {
                method: 'post',
                url: 'https://sts.choreo.dev/oauth2/token',
                headers: {
                    'Authorization': 'Basic WEhaOW0ybUEyU3A5YXI0Sjc5bk9yS0xoS2ZjYTp5UDdpXzVTZnFfSmhyeUZSeFk1bG9ySUtVdzhh',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': 'apim=1659854301.997.97.729965|dcb1dc1c03c8f17e5aa485d6222013b8'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    let y = response.data.access_token;
                    localStorage.setItem('auth-token', y)
                    console.log(localStorage.getItem('auth-token'))
                    console.log(y)

                })

                .catch(function (error) {
                    console.log(error);
                });

        }
        )
    };


    useEffect(() => {
        if (state.isAuthenticated) {
            obtainAccessToken();

        } else {
            localStorage.clear();
        }

    }, [state.isAuthenticated]);

    const onSubmit = data => {
        if (state.isAuthenticated) {
            const encodedAddress = encodeURIComponent(data.Address);
            localStorage.setItem('nic', data.NIC);
            localStorage.setItem('address', data.Address);
            console.log(data.NIC)
            console.log(data.Address)
            console.log(data.PhoneNo)
            console.log(encodedAddress);

            var config = {
                method: 'get',
                url: 'https://b4baf3d6-1f2c-4895-9f5c-aeecc00e7aef-prod.e1-us-east-azure.choreoapis.dev/knmr/choreogramacheckintegrationapi/1.0.0/validate?nic=' + data.NIC + '&address=' + encodedAddress + '&phone=' + data.PhoneNo,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    localStorage.setItem('response', response.data.valid);
                    localStorage.setItem('responseMessage', response.data.msg);
                    console.log(localStorage.getItem('response'));
                    console.log(localStorage.getItem('responseMessage'));
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            signIn();
        }
    };



    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>What is Grama Check?</h2>
                    <p>Grama Check project aims in developing a computerized system to generate grama certificates.A grama certificate is being generated after validating user National Identity card and addresss.Overall this project is being developed to help the users in the best way possible and also to reduce human efforts.If you need any help contact us by clicking help icon to connect with our slack channel</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <video autoPlay loop muted id='video'>
                                    <source src={Video} type='video/mp4' />
                                </video>

                            </div>
                            <div>
                                <h3>SRI LANKA'S LEADING</h3>
                                <p>BEST WEB APP TO GENERATE YOUR GRAMA CERTIFICATE</p>
                            </div>

                        </div>
                    </div>
                    <h2>Fill the form here to generate your Grama certificate.Check below steps to generate the certificate</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="nic">
                        <div className="input-wrap">
                            <label>Enter NIC</label>
                            <input {...register("NIC", { required: "This is required", maxLength: { value: 12, message: "Max length is 12" } })} placeholder="NIC here" />
                        </div>
                    </div>
                    <p>{errors.NIC?.message}</p>
                    <div className="address">
                        <div className="input-wrap">
                            <label>Enter your permanent address</label>
                            <input {...register("Address", { required: "This is required", maxLength: { value: 100, message: "Max length is 100" } })} placeholder="Address here" />
                        </div>

                    </div>
                    <p>{errors.Address?.message}</p>
                    <div className="phoneno">
                        <div className="input-wrap">
                            <label>Enter Phone Number</label>
                            <input {...register("PhoneNo", { required: "This is required", maxLength: { value: 12, message: "Max length is 12" } })} placeholder="Phone Number here" />
                        </div>
                    </div>
                    <p>{errors.PhoneNo?.message}</p>
                    <button>Apply for a Grama Certificate </button>
                    <div className='or'><h2>OR</h2></div>

                    <button onClick={() => setIsOpen(true)}>Check status</button>
                    <Modal isOpen={modalIsOpen} portalClassName='modal'>
                        {console.log("the true we want: " + localStorage.getItem('response'))}
                        {localStorage.getItem('response') == "true" ? <div><p className='title'>Your certificate is ready</p><Container>
                            <PoliceCertificationStackStackRow>
                                <PoliceCertificationStackStack>
                                    <PoliceCertificationStack>
                                        <PoliceCertification>Grama Certification</PoliceCertification>
                                        <Rect3></Rect3>
                                    </PoliceCertificationStack>
                                    <LoremIpsum>
                                        This is to certify person holding National Identity card
                                        bearing number{"\n"}
                                        {" " + localStorage.getItem('nic')} who has been residing at {"\n"}
                                        {" " + localStorage.getItem('address')} in my police station area to{"\n"}has not been
                                        involved in any criminal activities, nor has he/she come to the
                                        {"\n"}adverse notice of during the period of residence in my area.
                                    </LoremIpsum>
                                    <Rect></Rect>
                                    <Auther>
                                        Authorised by officer in charge{"\n"}
                                        Village Officer{"\n"}
                                    </Auther>
                                    <Auther1>To Whom It May Concern,</Auther1>
                                    <Image
                                        src={policePng}
                                    ></Image>
                                    <Date>DATE :</Date>
                                </PoliceCertificationStackStack>
                            </PoliceCertificationStackStackRow>
                        </Container>
                        </div>
                            : localStorage.getItem('responseMessage') == "ID validation failed" ? <p>ID Validation failed, your record does not exist in your local ID office. Please visit your local ID office before applying for certifcate.</p>
                                : localStorage.getItem('responseMessage') == "Address validation failed" ? <p>Address validation failed, Your ID does not match address. Please update your address in the registry before applying</p> : <p>Please try again later!</p>}
                        <button onClick={() => setIsOpen(false)} className='closeBtn'>Close</button>
                    </Modal>

                </form>
            </div>
        </div>

    )
}

const Container = styled.div`
  display: flex;
  background-color: rgba(213,254,227,0);
  flex-direction: row;
  height: 70vh;
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
  color: #121212;
  font-size: 19px;
  left: 500px;
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
  left: 500px;
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
  top: 178px;
  left: 500px;
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
  left: 80px;
  width: 382px;
  height: 452px;
  position: absolute;
  object-fit: contain;
`;

const Date = styled.span`
  font-family: Roboto;
  top: 150px;
  left: 500px;
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
  margin-left: 350px;
  margin-top: 49px;
`;

export default Search
