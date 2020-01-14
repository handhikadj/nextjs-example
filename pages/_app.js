import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "../components/Nav";
import React from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <>
                <Head>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <link rel="stylesheet" type="text/css" href="/nprogress.css"/>
                </Head>

                <Nav/>

                <Component { ...pageProps } key={ router.route }/>
            </>
        );
    }
}

export default MyApp
