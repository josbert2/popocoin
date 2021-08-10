
import React, { Component } from "react";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import metamask from '../img/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96-removebg-preview.png'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom"

 const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '400px',
      borderRadius: '6px',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const Header = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
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
                      
                        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
                            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
                               
                                <Link to="/trade" className="relative inline-block hidden lg:block " >
                                    <div>
                                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                            <span class="text-white">Trade</span>
                                        </button>
                                    </div>
                                </Link>
                                <Link to="/multi" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Multi Chart</Link> 
                                <Link to="/about" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">About</Link>
                               
                                <Link to="/tool" className="relative inline-block hidden lg:block">
                                    <div>
                                        <button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none">
                                            <span>Tools</span>
                                           
                                        </button>
                                    </div>
                     
                                    
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
                                
                                
                               
                                <button
                                    onClick={openModal}
                                    className="flex items-center justify-center h-12  px-4 mt-2 text-sm text-center 
                                    text-gray-100 transition-colors duration-200 transform border rounded-lg lg:h-10 dark:text-gray-300
                                     dark:border-gray-300 hover:bg-indigo-500 hover:text-gray-100 hover:border-indigo-500 dark:hover:bg-gray-700 focus:outline-none"
                                >
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  
                >
                    <div class="flex flex-col ">
                        <div class="">
                            <div class="bg-gray-700 rounded-md bg-opacity-10 flex items-center">
                                <div class="w-20 h-20 mr-4">
                                    <img class="w-full h-full" src={ metamask } />
                                </div>
                                <div class="text-gray-600 flex">
                                    MetaMask
                                   
                                </div>
                                <div class="ml-auto pr-2">
                                        <svg class="text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><rect height="2" transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)" width="6.22" x="13.74" y="6.13"/><polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"/><polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"/><polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"/><circle cx="12" cy="4" r="2"/></g></g></svg>
                                 </div>
                            </div>

                            <div class="bg-gray-700 rounded-md bg-opacity-10 flex items-center mt-5">
                                <div class="w-20 h-20 mr-4 rounded-full">
                                    <img class="w-full h-full" src="https://registry.walletconnect.org/logo/lg/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.jpeg" />
                                </div>
                                <div class="text-gray-600 flex">
                                    Hobi Wallet
                                   
                                </div>
                                <div class="ml-auto pr-2">
                                        <svg class="text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><rect height="2" transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)" width="6.22" x="13.74" y="6.13"/><polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"/><polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"/><polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"/><circle cx="12" cy="4" r="2"/></g></g></svg>
                                 </div>
                            </div>


                            <div class="bg-gray-700 rounded-md bg-opacity-10 flex items-center mt-5">
                                <div class="w-20 h-20 mr-4">
                                    <img class="w-full h-full" src="https://registry.walletconnect.org/logo/lg/0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c.jpeg" />
                                </div>
                                <div class="text-gray-600 flex">
                                   Pillar
                                   
                                </div>
                                <div class="ml-auto pr-2">
                                        <svg class="text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><rect height="2" transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)" width="6.22" x="13.74" y="6.13"/><polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"/><polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"/><polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"/><circle cx="12" cy="4" r="2"/></g></g></svg>
                                 </div>
                            </div>


                            <div class="bg-gray-700 rounded-md bg-opacity-10 flex items-center mt-5">
                                <div class="w-20 h-20 mr-4">
                                    <img class="w-full h-full" src="https://registry.walletconnect.org/logo/lg/9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2.jpeg" />
                                </div>
                                <div class="text-gray-600 flex">
                                    ImToken
                                   
                                </div>
                                <div class="ml-auto pr-2">
                                        <svg class="text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><rect height="2" transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)" width="6.22" x="13.74" y="6.13"/><polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"/><polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"/><polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"/><circle cx="12" cy="4" r="2"/></g></g></svg>
                                 </div>
                            </div>
                        </div>

                        <div class=" flex items-center justify-end mt-6">
                            <button class="text-gray-500 py-3 w-28" onClick={closeModal}>close</button>
                        </div>
                    </div>
                </Modal>
        </div>
    )

}

export default Header;