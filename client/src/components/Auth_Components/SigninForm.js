import React from "react";
import { Link } from "react-router-dom"
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import googleIconImageSrc from "../Landing_Components/images/google-icon.png";
import twitch_logo from "../Landing_Components/assets/twitch_logo.png"





const SigninForm = ({ featured_image }) => {
    return (
        <div tw="w-full flex flex-wrap">
            <div tw="w-full md:w-5/12 flex flex-col">
                <div tw="flex justify-center items-center pt-12 md:-mb-24">
                    <Link to="/" tw="font-body bg-black text-white font-bold text-xl p-4">Logo</Link>
                </div>
                <div tw="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p tw=" font-body  pb-8 font-bold text-gray-900 text-center text-3xl">Sign in to Vinyl</p>
                    
                    <a href="/auth/google" tw="  bg-gray-900 items-center justify-center flex flex-row
                        rounded-full py-2 px-6 shadow  active:bg-gray-100 text-gray-800 font-body font-medium text-lg hover:bg-black p-3 mt-0">
                        <img
                            alt="..."
                            tw="w-5 mr-3"
                            src={googleIconImageSrc}
                        />
                        <p tw=" font-body text-white text-sm">SIGN IN WITH GOOGLE</p>
                    </a>


                    <a href="/auth/twitch" tw="  bg-gray-900 items-center justify-center flex flex-row
                        rounded-full py-2 px-6 shadow  active:bg-gray-100 text-gray-800 font-body font-medium text-lg hover:bg-black p-3 mt-2">
                        <img
                            alt="..."
                            tw="w-5 mr-3"
                            src={twitch_logo}
                        />
                        <p tw=" font-body text-white text-sm">SIGN IN WITH TWITCH</p>

                    </a>


                    <form tw="flex flex-col pt-3 md:pt-4" onsubmit="event.preventDefault();">
                        <div tw="flex flex-col pt-4">
                            <label for="email" tw=" text-gray-700 font-body text-lg">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" tw="font-body shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div tw=" flex flex-col pt-4">
                            <label for="password" tw=" text-gray-700 font-body text-lg">Password</label>
                            <input type="password" id="password" placeholder="Password" tw=" font-body shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <input type="submit" value="Log In" tw="  rounded-full py-2 px-6 shadow font-body bg-gray-900 text-white font-medium text-lg hover:bg-black p-2 mt-8" />
                    </form>
                    <div tw="font-body text-center pt-10 pb-12">
                        <p>Don't have an account? <Link to="/signup" tw="text-gray-900 font-body underline font-semibold">Register here.</Link></p>
                    </div>
                </div>
            </div>
            <div tw="w-7/12 shadow-2xl">
                <img tw="object-cover w-full h-screen hidden md:block" alt="" src={featured_image} />
            </div>
        </div>

    )
}


export default SigninForm