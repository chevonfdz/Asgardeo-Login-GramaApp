import React from 'react'
import {useState, useEffect} from 'react'
import './SearchStyles.css'
import { useForm } from 'react-hook-form'
import { useAuthContext } from "@asgardeo/auth-react";
import axios from "axios";
import qs from 'qs';

import Video from '../../assets/GRMA CHECK.mp4'


function Search() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [NIC, setNIC] = useState('');
    const [Address, setAddress] = useState('');
    const [{PhoneNo}, setPhoneNo] = useState('');
    const { state, getIDToken } = useAuthContext();

    const obtainAccessToken = () => {
        getIDToken().then((IDToken)=>{
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
    )};
    

    useEffect(() => {
        if(state.isAuthenticated){
            obtainAccessToken();
    
        } else {
            console.log("Did not pass the token")
        }
        
    }, [state.isAuthenticated]);

    const validateResponse = () => {
        console.log(NIC);
        console.log(Address);
        console.log(PhoneNo);

        var myHeaders = new Headers();
        // var accessToken = "eyJ4NXQiOiJNV1E1TldVd1lXWmlNbU16WlRJek16ZG1NekJoTVdNNFlqUXlNalZoTldNNE5qaGtNR1JtTnpGbE1HSTNaRGxtWW1Rek5tRXlNemhoWWpCaU5tWmhZdyIsImtpZCI6Ik1XUTVOV1V3WVdaaU1tTXpaVEl6TXpkbU16QmhNV000WWpReU1qVmhOV000Tmpoa01HUm1OekZsTUdJM1pEbG1ZbVF6Tm1FeU16aGhZakJpTm1aaFl3X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI0MDZiZDFhZC1iODQxLTQ0NDQtYWNiNS1hY2I3MTg5MTE5MzgiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoiWEhaOW0ybUEyU3A5YXI0Sjc5bk9yS0xoS2ZjYSIsIm5iZiI6MTY1OTg3NjQwOSwiYXpwIjoiWEhaOW0ybUEyU3A5YXI0Sjc5bk9yS0xoS2ZjYSIsInNjb3BlIjoiZGVmYXVsdCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2NTk4ODAwMDksImlkcF9jbGFpbXMiOnsidXNlcm5hbWUiOiJhcmVlYm5peWFzQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTk4NzY0MDksImp0aSI6ImJiYzNlYzc5LWNhNjEtNDEyMC04NDU1LWE2YjY0MTA2NGU4NiJ9.oHeXRa8H331CxpVUoQgir3zOhFkPkVUZlkW_u-yTI3iISMixDTVXSxMAuM9Opois0qQhmC6ItxfqOHz-5HZWlo73kohPeG2acS03bgj3JCrPFDvhThimAjqfisk162Oz1ho0eHReCQqIYavET8c2hikHYe0OchW97YTdvbwIDPkcZW82mcKLSn51uRxPaCKYt21TVMYGQ46LVWtU8Ygv_w9nbFDP5S_4PtcJ3KigQqMSXv14nQQHxX72Sn3GdNS7lD__zbkHMIkq_jPK61m_GU_wqEN7_gRuiUylJ7NW9QK14BuprOx3tDH8ychzPj9lacxZN_dVr6y1OYwF8BEM1MdJwsmYOjnkYSwINOFPT4UvFf9vbaJffQCe1ESPVmz9soyBAkPyjA-oXt65YhZXrwgSbYKl4wEJOHaiYUx1oesLusSeD2KrqT6nvHibW144f2blLiRTfY0JUanwtN7d4U8NdeitUncBCM6czQzx9C5wuyrAvlC7tAX_lKzPT1dza8A8_mw1rbXTbIDF92a5Vfo-BJF8cN6sgk1-PQBcqSxFucReLXY2A8m4ubG64KafYyy0a6hfvJBHhJK96eZbzDyyjh3zdQoJJyhJ4wRy3wG7zmn5Fr_aO9vkVt-hx146Jhz_hFIY98H435KK_y_rt23jefz8bxf_T40WY-gjtUg";
        // console.log(accessToken)
        myHeaders.append("Authorization", "Bearer " +localStorage.getItem('auth-token'));
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://b4baf3d6-1f2c-4895-9f5c-aeecc00e7aef-prod.e1-us-east-azure.choreoapis.dev/knmr/choreogramacheckintegrationapi/1.0.0/validate?nic="+NIC+"&address="+ Address+"&phone="+ PhoneNo, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

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
                <form onSubmit={handleSubmit((data) => {
                    setNIC(data.NIC);
                    setAddress(data.Address);
                })}>
                    <div className="nic">
                        <div className="input-wrap">
                            <label>Enter NIC</label>
                            <input {...register("NIC", { required: "This is required", maxLength: {value: 12, message: "Max length is 12"} })} placeholder = "NIC here"/>
                        </div>
                    </div>
                    <p>{errors.NIC?.message}</p>
                    <div className="address">
                        <div className="input-wrap">
                            <label>Enter your permanent address</label>
                            <input {...register("Address", { required: "This is required", maxLength: {value: 100, message: "Max length is 100"} })} placeholder = "Address here" />
                        </div>

                    </div>
                    <p>{errors.Address?.message}</p>
                    <div className="phoneno">
                        <div className="input-wrap">
                            <label>Enter Phone Number</label>
                            <input {...register("PhoneNo", { required: "This is required", maxLength: {value: 12, message: "Max length is 12"} })} placeholder = "Phone Number here"/>
                        </div>
                    </div>
                    <p>{errors.PhoneNo?.message}</p>

                    <button onClick={validateResponse}>Apply for a Grama Certificate </button>
                    <div className='or'><h2>OR</h2></div>
                    <button onClick={validateResponse}>Check status of Certificate</button>
                </form>
            </div>
        </div>

    )
}

export default Search
