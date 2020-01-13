import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Showcase from "../components/Showcase";


const Home = () => {
    const [pakestate, setPakestate] = useState('');

    const apabae = e => setPakestate('anjing');
    const changeTheState = e => setPakestate(e.target.value);

    useEffect(() => {
        console.log(pakestate)
    }, [pakestate]);

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Nav/>

            { pakestate || "apabae" }

            <Showcase/>

            <CustomInput changing={ changeTheState }/>

            <CustomButton
                actiondong={ apabae }
                namebutton="submit"
            />


        </div>
    )
};

export default Home
