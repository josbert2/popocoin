
import React, { Component } from "react";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom"
const Header = () => {
    return (
        <div  className="Home">
                <header className="bg-white navbar shadow-sm dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
                    <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
                        <div className="flex justify-between">
                            <Link to="/" className="text-gray-800 dark:text-gray-200">
                                <div className="flex items-center">
                                <svg id="Layer_1" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><g><path d="m180 492h-60c-55.229 0-100-44.772-100-100v-272c0-55.229 44.771-100 100-100h60c-55.229 0-100 44.771-100 100v272c0 55.228 44.771 100 100 100zm27-274c0-50.351 33.83-92.799 80-105.858-68.588-20.403-141.147 33.994-139.999 105.859-1.152 71.849 71.418 126.278 139.999 105.857-46.17-13.059-80-55.507-80-105.858z" fill="#cee1f2"/><path d="m392 512h-272c-66.168 0-120-53.832-120-120v-272c0-66.168 53.832-120 120-120h272c66.168 0 120 53.832 120 120v272c0 66.168-53.832 120-120 120zm-272-472c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h272c44.112 0 80-35.888 80-80v-272c0-44.112-35.888-80-80-80zm137 308c-71.683 0-130-58.317-130-130 6.535-172.226 253.491-172.179 260 .002 0 71.681-58.317 129.998-130 129.998zm0-220c-49.626 0-90 40.374-90 90 4.525 119.233 175.493 119.201 180-.001 0-49.625-40.374-89.999-90-89.999z" fill="#0023c4"/><path d="m363 428h-213c-26.508-.983-26.488-39.026 0-40h213c26.508.983 26.488 39.026 0 40zm-86-179v-62c0-11.046-8.954-20-20-20h-20c-26.508.983-26.488 39.026 0 40v42c0 11.046 8.954 20 20 20s20-8.954 20-20z" fill="#ff5cf4"/></g></svg>
                                    <p className="text-xl ml-2 text-white">Poo<strong>Chain</strong></p>
                                </div>
                            </Link>
                            <div className="flex items-center space-x-2 lg:hidden">
                                <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-300">
                                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 lg:hidden" style={{ display: "none" }}>
                            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
                                <Link to="/chart" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Charts</Link> 
                                
                                
                                <Link to="/premium" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Multi Chart</Link> 
                                <Link to="/cheatsheet" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Cheatsheet</Link>
                                <Link to="/gradient-generator" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Gradient Generator</Link>
                                <div className="relative inline-block hidden lg:block">
                                    <div>
                                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                            <span>Tools</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                  
                                    
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                                <button
                                    type="button"
                                    aria-label="Color Mode"
                                    className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                                >
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                </button>
                                
                                
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
                            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
                                <Link to="/" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Charts</Link> <a href="/components" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Components</a>
                                <Link className="relative inline-block hidden lg:block " to="/trade">
                                    <div>
                                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                            <span class="text-white">Trade</span>
                                        </button>
                                    </div>
                                </Link>
                                <Link to="/premium" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Multi Chart</Link> 
                                <Link to="/blog" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">About</Link>
                               
                                <div className="relative inline-block hidden lg:block">
                                    <div>
                                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                            <span>Tools</span>
                                           
                                        </button>
                                    </div>
                     
                                    
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                                
                                
                               
                                <Link
                                    to="/"
                                    className="flex items-center justify-center h-12 text-gray-100 px-4 mt-2 text-sm text-center text-gray-100 transition-colors duration-200 transform border rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                                >
                                    Connect
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
        </div>
    )

}

export default Header;