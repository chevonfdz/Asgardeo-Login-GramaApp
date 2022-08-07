import React, { useState } from 'react'
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
    const obtainAccessToken = () => {
        getAccessToken().then((accessToken) => {
            console.log(accessToken);
        })
    };

    const obtainIDToken = () => {
        getIDToken().then((IDToken) => {
            console.log(IDToken);
            const data = {
                'grant_type': 'urn:ietf:params:oauth:grant-type:token-exchange',
                'subject_token': IDToken,
                'subject_token_type': 'urn:ietf:params:oauth:token-type:jwt',
                'requested_token_type': 'urn:ietf:params:oauth:token-type:jwt'
            };

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(data),
                url: 'https://sts.choreo.dev/oauth2/token'
            };
            axios(options)

        })
    };
    //     getIDToken().then((IDToken) => {
    //         console.log(IDToken);

    //         const params = new URLSearchParams();
    //         params.append('grant_type', 'urn:ietf:params:oauth:grant-type:token-exchange');
    //         params.append('subject_token', 'eyJ4NXQiOiJZak0xWkRGa01EVTVPV00wTW1NNE1HWTVPR1U1TUdKbE5qWmhPVFV5TnpVM1pUUTFaR0k0WkdGa05qRTJPVGxpTVdZek5XTmpOR0psTWpFMU16Y3lOdyIsImtpZCI6IllqTTFaREZrTURVNU9XTTBNbU00TUdZNU9HVTVNR0psTmpaaE9UVXlOelUzWlRRMVpHSTRaR0ZrTmpFMk9UbGlNV1l6TldOak5HSmxNakUxTXpjeU53X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiI4MjBkNGQ2OWI3MzNkYTg0OTEwNjUzNWMyYzA1MmI0OWQxN2ExMzlmZTU4NmNlMjVlNzExNTZjN2QxNjUxZDFhIiwiYXRfaGFzaCI6IjRqQWl1eUREVnY5T3h4dlFvdEVZcXciLCJzdWIiOiI0MDZiZDFhZC1iODQxLTQ0NDQtYWNiNS1hY2I3MTg5MTE5MzgiLCJhbXIiOlsiQmFzaWNBdXRoZW50aWNhdG9yIl0sImlzcyI6Imh0dHBzOlwvXC9hcGkuYXNnYXJkZW8uaW9cL3RcL2FyZWViXC9vYXV0aDJcL3Rva2VuIiwic2lkIjoiN2U0MGZkNmEtNGEwYy00OTYxLTk1NTEtMTE5YjFmMmU1NjYzIiwiYXVkIjpbIkdnajNKa3R1dXBJWlVnZl9RdllnMUVOY2QxRWEiLCJodHRwczpcL1wvc3RzLmNob3Jlby5kZXZcL29hdXRoMlwvdG9rZW4iXSwiY19oYXNoIjoiSjJMUUFkSmd4WHU4d0hSM2pDT1Y3QSIsIm5iZiI6MTY1OTg1Njc3MywiYXpwIjoiR2dqM0prdHV1cElaVWdmX1F2WWcxRU5jZDFFYSIsImV4cCI6MTY1OTg2MDM3MywiaWF0IjoxNjU5ODU2NzczLCJ1c2VybmFtZSI6ImFyZWVibml5YXNAZ21haWwuY29tIn0.YKIjUV6ieaqBNRNzCZxQoya50m4MErpV36r_E5TWLCSh0AAZ8ZTumC3tEH_QcR4CoG8srDUe2xawBvsl0OvbYgquzwupFNCWXPJw_AltKCoFNC-ZX_NUMVd7qGcGjmCCFC3bRy25L_KQLGAR4o1htlng-Ey0EWWet2AEbK3dIwl36rU4hfCnTa-DFOfjr9mvYYtQQtAskk1pBsp2wFigDelseIvGuxLYEYWAJ9o8KbGoBSPP8oPX0z44xM2ch3EB7UpLgLh2ayhrikmtPEKierttekINtF7FHHhJhohwDcgA4oenP53xoWzkFsjakMV3qBuJ8aJhciy6YtigEq0AGQ');
    //         params.append('subject_token_type', 'urn:ietf:params:oauth:token-type:jwt');
    //         params.append('requested_token_type', 'urn:ietf:params:oauth:token-type:jwt');
    //         axios.post("https://sts.choreo.dev/oauth2/token",params).then((response) => { console.log(response) }).catch((error) => { console.log(error); });
    //     }
    //     )
    // };

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
                <li><button onClick={() => obtainAccessToken()}>Get Access Token</button></li>
                <li><button onClick={() => obtainIDToken()}>Get ID Token</button></li>

                {/* <li><button onClick={() => obtainIDToken()}>Get ID Token</button></li> */}


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

// function obtainIDToken() {

//     // const params = new URLSearchParams();

//     const data = {
//         'grant_type': 'urn:ietf:params:oauth:grant-type:token-exchange',
//         'subject_token': 'eyJ4NXQiOiJZak0xWkRGa01EVTVPV00wTW1NNE1HWTVPR1U1TUdKbE5qWmhPVFV5TnpVM1pUUTFaR0k0WkdGa05qRTJPVGxpTVdZek5XTmpOR0psTWpFMU16Y3lOdyIsImtpZCI6IllqTTFaREZrTURVNU9XTTBNbU00TUdZNU9HVTVNR0psTmpaaE9UVXlOelUzWlRRMVpHSTRaR0ZrTmpFMk9UbGlNV1l6TldOak5HSmxNakUxTXpjeU53X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiI4MjBkNGQ2OWI3MzNkYTg0OTEwNjUzNWMyYzA1MmI0OWQxN2ExMzlmZTU4NmNlMjVlNzExNTZjN2QxNjUxZDFhIiwiYXRfaGFzaCI6IklPdEVJbmNXc0QxSDA3cUZvRXpzZFEiLCJzdWIiOiI0MDZiZDFhZC1iODQxLTQ0NDQtYWNiNS1hY2I3MTg5MTE5MzgiLCJhbXIiOlsiQmFzaWNBdXRoZW50aWNhdG9yIl0sImlzcyI6Imh0dHBzOlwvXC9hcGkuYXNnYXJkZW8uaW9cL3RcL2FyZWViXC9vYXV0aDJcL3Rva2VuIiwic2lkIjoiN2U0MGZkNmEtNGEwYy00OTYxLTk1NTEtMTE5YjFmMmU1NjYzIiwiYXVkIjpbIkdnajNKa3R1dXBJWlVnZl9RdllnMUVOY2QxRWEiLCJodHRwczpcL1wvc3RzLmNob3Jlby5kZXZcL29hdXRoMlwvdG9rZW4iXSwiY19oYXNoIjoiaExJM1lQSnp2Rmh5djVCMXgwRkVIZyIsIm5iZiI6MTY1OTg1OTcyNSwiYXpwIjoiR2dqM0prdHV1cElaVWdmX1F2WWcxRU5jZDFFYSIsImV4cCI6MTY1OTg2MzMyNSwiaWF0IjoxNjU5ODU5NzI1LCJ1c2VybmFtZSI6ImFyZWVibml5YXNAZ21haWwuY29tIn0.T3FKyT77Nn-g4pmrFjU5VV7KpnZFYAHrsb7aw2R0kUx7wZGwaFDBrX_ZhYd6qMsN_K9SmTiTdvFPfFtl3ovvTmCCG8Hvm-hw6jnKYYKve4KetmjW4HPPKlyRxXYFd9-5X6yR6uVhkfbbEh8samQdHwgGYHIAZe-UeCwe_jm1saAHBJtkVFuM_OUd3zAeUboot9vbCNpSn3fIXE_TN73Tw7-rUDPu4ph6qu_qyFEIG_abyxnlRepWSCR1d13Q0QGym4tj5lPMYexqXLyHHH14YUiMLLxbpbhOYBmY90YjMT88VH1-my1lQwi1ozkJ1B8hTo9mdGd71oGydSjJH23Faw',
//         'subject_token_type': 'urn:ietf:params:oauth:token-type:jwt',
//         'requested_token_type': 'urn:ietf:params:oauth:token-type:jwt'
//     };

//     const options = {
//         method: 'POST',
//         headers: { 'content-type': 'application/x-www-form-urlencoded' },
//         data: qs.stringify(data),
//         url: 'https://sts.choreo.dev/oauth2/token'
//     };

//     axios(options)

// };

export default Navbar
