import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import CustomButton from "../components/CustomButton";
import Showcase from "../components/Showcase";


const Home = () => {
    const [pakestate, setPakestate] = useState('');

    const apabae = e => setPakestate('anjing');

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

            <CustomButton
                actiondong={ apabae }
                namebutton="submit"
            />


        </div>
    )
};

export default Home
