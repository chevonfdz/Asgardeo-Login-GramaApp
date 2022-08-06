import React from 'react'
import './SearchStyles.css'

import Video from '../../assets/GRMA CHECK.mp4'


function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>What is Grama Check?</h2>
                    <p>Grama Check project aims in developing a computerized system to generate police certificates.A police report is being generated after validating user National Identity card and addresss.Overall this project is being developed to help the users in the best way possible and also to reduce human efforts.If you need any help contact us by clicking help icon to connect with our slack channel</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <video autoPlay loop muted id='video'>
                                <source src={Video} type='video/mp4' />
                                </video>
                        
                            </div>
                            <div>
                                <h3>SRI LANKA'S LEADING</h3>
                                <p>BEST WEB APP TO GENERATE POLICE REPORTS FOR 2 YEARS IN-A-ROW</p>
                            </div>
                            
                        </div>
                    </div>
                    <h2>Fill the form here to generate your Police certificate.Check below steps to generate the certificate</h2>
                </div>
                    <form>
                        <div className="name">
                        <div className="input-wrap">
                            <label>Enter full name</label>
                                <input type="text" placeholder='Name here'/>

                        </div>
                        </div>
                        <div className="nic">
                            <div className="input-wrap">
                            <label>Enter NIC</label>
                                <input type="text"placeholder='NIC here'/>
                            </div>
                        </div>
                        <div className="age">
                            <div className="input-wrap">
                            <label>Age</label>
                                <input type="text" placeholder='Age here'/>
                            </div>

                        </div>
                        <div className="address">
                            <div className="input-wrap">
                            <label>Enter your permanent address</label>
                                <input type="text"placeholder='Address here'/>
                            </div>

                        </div>
                        <div className="dob">
                            <div className="input-wrap">
                                <label>Date of birth</label>
                                <input type="date" placeholder='DOB here' />
                            </div>

                        </div>
                        <div className="input-wrap">
                            <label>Gender</label>
                            <select>
                                <option value="1">Male</option>
                                <option value="1">Female</option>
                        
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Requesting Date</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Apply for a Grama Certificate </button>
                        <div className='or'><h2>OR</h2></div>
                        <button>Check status of Certificate</button>
                    </form>
                </div>
            </div>
        
    )
}

export default Search
