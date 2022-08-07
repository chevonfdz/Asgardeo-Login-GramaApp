import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useAuthContext } from "@asgardeo/auth-react";
import { Link } from 'react-scroll'
import axios from "axios";
import qs from 'qs';
import './NavbarStyles.css'


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const { state, signIn, signOut, getAccessToken, getIDToken } = useAuthContext();


    const obtainIDToken = () => {
        getIDToken().then((IDToken) => {
            console.log(IDToken)
        })
    };

    useEffect(() => {
        var data = qs.stringify({
            'grant_type': 'urn:ietf:params:oauth:grant-type:token-exchange',
            'subject_token': 'eyJ4NXQiOiJZak0xWkRGa01EVTVPV00wTW1NNE1HWTVPR1U1TUdKbE5qWmhPVFV5TnpVM1pUUTFaR0k0WkdGa05qRTJPVGxpTVdZek5XTmpOR0psTWpFMU16Y3lOdyIsImtpZCI6IllqTTFaREZrTURVNU9XTTBNbU00TUdZNU9HVTVNR0psTmpaaE9UVXlOelUzWlRRMVpHSTRaR0ZrTmpFMk9UbGlNV1l6TldOak5HSmxNakUxTXpjeU53X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiJhNjkxYjM5MmFkZjA3ZGQ2MDE0NWZkOGUwYTExMGNmNWZmYWVjZjQ4MDZjYmYzNGI0YWUzYjkxZTQ3MjM3MDFjIiwiYXRfaGFzaCI6IlE3dmViSFNONlFjbHZjcWZiRml4bHciLCJhdWQiOlsiR2dqM0prdHV1cElaVWdmX1F2WWcxRU5jZDFFYSIsImh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldlwvb2F1dGgyXC90b2tlbiJdLCJzdWIiOiI0MDZiZDFhZC1iODQxLTQ0NDQtYWNiNS1hY2I3MTg5MTE5MzgiLCJuYmYiOjE2NTk4NzMwNjcsImF6cCI6IkdnajNKa3R1dXBJWlVnZl9RdllnMUVOY2QxRWEiLCJhbXIiOlsicmVmcmVzaF90b2tlbiJdLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9hcmVlYlwvb2F1dGgyXC90b2tlbiIsImV4cCI6MTY1OTg3NjY2NywiaWF0IjoxNjU5ODczMDY3LCJ1c2VybmFtZSI6ImFyZWVibml5YXNAZ21haWwuY29tIn0.VohA1M_fOGNy-RH3nhjpYLt2WxyGg8dqPlBWKJJKaBBDLO78V1aIdlbHSz70JIv4MtKt3qtCoPnecBzjQvjFAqGn3DgEZgFJKAQXuphpcYnOs77T-xSOQ1tosXHgPWPEVUND18SH7Si9cTjr-u3Vp3SWdNGW32eE_EPwC-lTc3f7K4ytknoBPm2w2ivLKY_RsRMJEIEJFXp9edurEkVNDuqfpCfLAaLrT1d_jkkZ2NyqjNHRcpJP-96NXgavlSHQQ3EKRFWIM8E23lYD7Z-wOatdlrUhOZWG2cYbhilOmEqmhC7B04YGfaMtsH6b0-ZAgIhGD8U07USGQslMSBUDzg',
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


    }, []);

    const obtainRequest = () => {

        var myHeaders = new Headers();
        var accessToken = "eyJ4NXQiOiJNV1E1TldVd1lXWmlNbU16WlRJek16ZG1NekJoTVdNNFlqUXlNalZoTldNNE5qaGtNR1JtTnpGbE1HSTNaRGxtWW1Rek5tRXlNemhoWWpCaU5tWmhZdyIsImtpZCI6Ik1XUTVOV1V3WVdaaU1tTXpaVEl6TXpkbU16QmhNV000WWpReU1qVmhOV000Tmpoa01HUm1OekZsTUdJM1pEbG1ZbVF6Tm1FeU16aGhZakJpTm1aaFl3X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI0MDZiZDFhZC1iODQxLTQ0NDQtYWNiNS1hY2I3MTg5MTE5MzgiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoiWEhaOW0ybUEyU3A5YXI0Sjc5bk9yS0xoS2ZjYSIsIm5iZiI6MTY1OTg3NjQwOSwiYXpwIjoiWEhaOW0ybUEyU3A5YXI0Sjc5bk9yS0xoS2ZjYSIsInNjb3BlIjoiZGVmYXVsdCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2NTk4ODAwMDksImlkcF9jbGFpbXMiOnsidXNlcm5hbWUiOiJhcmVlYm5peWFzQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTk4NzY0MDksImp0aSI6ImJiYzNlYzc5LWNhNjEtNDEyMC04NDU1LWE2YjY0MTA2NGU4NiJ9.oHeXRa8H331CxpVUoQgir3zOhFkPkVUZlkW_u-yTI3iISMixDTVXSxMAuM9Opois0qQhmC6ItxfqOHz-5HZWlo73kohPeG2acS03bgj3JCrPFDvhThimAjqfisk162Oz1ho0eHReCQqIYavET8c2hikHYe0OchW97YTdvbwIDPkcZW82mcKLSn51uRxPaCKYt21TVMYGQ46LVWtU8Ygv_w9nbFDP5S_4PtcJ3KigQqMSXv14nQQHxX72Sn3GdNS7lD__zbkHMIkq_jPK61m_GU_wqEN7_gRuiUylJ7NW9QK14BuprOx3tDH8ychzPj9lacxZN_dVr6y1OYwF8BEM1MdJwsmYOjnkYSwINOFPT4UvFf9vbaJffQCe1ESPVmz9soyBAkPyjA-oXt65YhZXrwgSbYKl4wEJOHaiYUx1oesLusSeD2KrqT6nvHibW144f2blLiRTfY0JUanwtN7d4U8NdeitUncBCM6czQzx9C5wuyrAvlC7tAX_lKzPT1dza8A8_mw1rbXTbIDF92a5Vfo-BJF8cN6sgk1-PQBcqSxFucReLXY2A8m4ubG64KafYyy0a6hfvJBHhJK96eZbzDyyjh3zdQoJJyhJ4wRy3wG7zmn5Fr_aO9vkVt-hx146Jhz_hFIY98H435KK_y_rt23jefz8bxf_T40WY-gjtUg";
        console.log(accessToken)
        myHeaders.append("Authorization", "Bearer " +localStorage.getItem('auth-token'));
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://b4baf3d6-1f2c-4895-9f5c-aeecc00e7aef-prod.e1-us-east-azure.choreoapis.dev/knmr/choreogramacheckintegrationapi/1.0.0/validate?nic=196325521555&address=20%2F9%20Symonds%20Road%2C%2010&phone=%2B94712181673", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

    };


    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Your police report is just one click away!</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Check status</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Request a certificate</li></Link>
                <Link to='Help' smooth={true} duration={500} ><li>Help</li></Link>
                <div>
                    {
                        state.isAuthenticated
                            ? (
                                <div>
                                    <li><button onClick={() => signOut()}>Logout</button></li>
                                </div>
                            )
                            : <li><button onClick={() => signIn()}>Login</button></li>
                    }
                </div>
                <li><button onClick={() => obtainIDToken()}>Get ID Token</button></li>

                <li><button onClick={() => obtainRequest()}>Request</button></li>


            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500} ><li>Service catalog</li></Link>
                    <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                    <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                    <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Navbar
