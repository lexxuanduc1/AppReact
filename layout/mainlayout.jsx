'use client'

import Head from "next/head"
import Footer from'../pages/footer.jsx'
import Nav from '../pages/nav.jsx'
import Body from'../pages/body.jsx'
import React, { useState,useEffect } from 'react';
export default function MainLayout({children}) {
    const [login, setLogin]=useState(null);
    useEffect(()=>{
        const logindata=JSON.parse(localStorage.getItem('login'));
        if(logindata){
            setLogin(logindata);
        }
    },[]);
    return (
    <>
        <Head>
            <title>APP</title>
        </Head>
        <main>
            <Nav islogin={login}></Nav>
            <Body islogin={login}>
                {children}
            </Body>
            <Footer></Footer>
        </main>
    </>);
}