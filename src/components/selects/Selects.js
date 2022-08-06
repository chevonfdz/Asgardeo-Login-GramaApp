import React from 'react'
import './SelectsStyles.css'

import Register from '../../assets/register.png'
import Login from '../../assets/login.png'
import NIC from '../../assets/nic.png'
import Address from '../../assets/addr.png'
import Generate from '../../assets/generate.png'


import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Register} text='Register' />
                <SelectsImg bgImg={Login} text='Login' />
                <SelectsImg bgImg={NIC} text='Enter NIC' />
                <SelectsImg bgImg={Address} text='Address' />
                <SelectsImg bgImg={Generate} text='Generate Certificate' />
            
            </div>

        </div>
    )
}

export default Selects
