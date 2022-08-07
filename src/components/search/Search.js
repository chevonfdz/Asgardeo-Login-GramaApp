import React from 'react'
import {useState} from 'react'
import './SearchStyles.css'
import { useForm } from 'react-hook-form'

import Video from '../../assets/GRMA CHECK.mp4'


function Search() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [NIC, setNIC] = useState('');
    const [Address, setAddress] = useState('');


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

                    <button>Apply for a Grama Certificate </button>
                    <div className='or'><h2>OR</h2></div>
                    <button>Check status of Certificate</button>
                </form>
            </div>
        </div>

    )
}

export default Search
