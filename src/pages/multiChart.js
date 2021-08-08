
import GridLayout from 'react-grid-layout';

const multiChart = () => {

    return (
        
        <div  className="page__content pb-52" style={{ marginTop: '110px'}}>
     
           <div className="container mx-auto">
                    
                <div class="item-misk p-2 rounded flex flex-col pb-10 relative">
                    <div class="absolute right-8 top-8 cursor-pointer">
                        
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn absolute right-8 top-8 cursor-pointer" for="menu__toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-400" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
                        </label>
                        <ul class="menu__box">
                        <div class="item-misk p-2 rounded flex flex-col">
                            <div class="w-full">
                                <div class="py-3 pl-3 menu--sidebar">
                                    <div class="grid grid-cols-2 gap-5">
                                    <div class=" p-3 rounded mb-3 items-link active" data-tab-target="#home">
                                        <div class="flex items-center">
                                            <div class="w-12 h-12 svg-container p-2 rounded">
                                                <svg viewBox="0 -14 512.00001 512" class="text-white fill-current" xmlns="http://www.w3.org/2000/svg"><path d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"/><path d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"/><path d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"/><path d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"/><path d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"/><path d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"/></svg>
                                            </div>
                                            <div class="text-white ml-6 uppercase font-regular flex items-center text-sm">
                                                Promoted
                                            </div>
                                            <div class="ml-auto">
                                                <svg class="text-gray-200 fill-current"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" p-3 rounded mb-3 items-link" data-tab-target="#pricing">
                                        <div class="flex items-center">
                                            <div class="w-12 h-12 svg-container p-2 rounded flex items-center justify-center">
                                                <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                                            </div>
                                            <div class="text-white ml-6 uppercase font-regular text-sm">
                                                Wallet
                                            </div>
                                            <div class="ml-auto">
                                                <svg class="text-gray-200 fill-current"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
                                            </div>
                                        </div>
                                    </div>


                                    <div class=" p-3 rounded mb-3 items-link"  data-tab-target="#about">
                                        <div class="flex items-center">
                                            <div class="w-12 h-12 svg-container p-2 rounded flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg"  class="text-white fill-current" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z"/></g></g></svg>
                                            </div>
                                            <div class="text-white ml-6 uppercase font-regular text-sm">
                                                Starred
                                            </div>
                                            <div class="ml-auto">
                                                <svg class="text-gray-200 fill-current"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
                                            </div>
                                        </div>
                                    </div>


                                    <div class=" p-3 rounded items-link" data-tab-target="#news">
                                        <div class="flex items-center">
                                            <div class="w-12 h-12 svg-container p-3 rounded">
                                                <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M9,5v0.38c-0.83-0.33-1.72-0.5-2.61-0.5c-1.42,0-2.84,0.43-4.05,1.29C1.83,6.53,1.77,7.26,2.21,7.7l2.57,2.57h1.11v1.11 c0.86,0.86,1.98,1.31,3.11,1.36V15H7c-0.55,0-1,0.45-1,1v2c0,1.1,0.9,2,2,2h10c1.66,0,3-1.34,3-3V5c0-0.55-0.45-1-1-1H10 C9.45,4,9,4.45,9,5z M7.89,10.41V8.26H5.61L4.57,7.22C5.14,7,5.76,6.88,6.39,6.88c1.34,0,2.59,0.52,3.54,1.46l1.41,1.41l-0.2,0.2 c-0.51,0.51-1.19,0.8-1.92,0.8C8.75,10.75,8.29,10.63,7.89,10.41z M19,17c0,0.55-0.45,1-1,1s-1-0.45-1-1v-1c0-0.55-0.45-1-1-1h-5 v-2.59c0.57-0.23,1.1-0.57,1.56-1.03l0.2-0.2L15.59,14H17v-1.41l-6-5.97V6h8V17z"/></g></g></svg>
                                            </div>
                                            <div class="text-white ml-6 uppercase font-regular text-sm">
                                            History
                                            </div>
                                            <div class="ml-auto">
                                                <svg class="text-gray-200 fill-current"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div class="w-full tab-content">
                                <div class="container-items-tabs py-3 " id="home" data-tab-content>
                                    <div class="flex px-6">
                                        <div class="text-white  uppercase font-regular flex items-center text-sm">
                                            Promote your token
                                        </div>
                                        <div class="ml-auto">
                                            <button class="p-3 bg-brand-500  rounded	text-white text-sm">
                                                Vetted
                                            </button>
                                            <button  class="p-3 rounded text-white text-sm">
                                                Un-Vetted
                                            </button>
                                        </div>
                                    </div>
                                    <div class="px-6 mt-4">
                                        <div class="bg-gray-800 pb-4 px-4 rounded-md w-full">
                                            <div class="flex justify-between w-full pt-6">
                                                <p class="ml-3 text-white">Tokens</p>
                                                <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.4">
                                                        <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222" />
                                                        <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222" />
                                                        <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="w-full flex justify-end px-2 mt-2">
                                                <div class="w-full sm:w-64 inline-block relative">
                                                    <input type="" name="" class="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg" placeholder="Search" />

                                                    <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
                                                        <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                                                            <path
                                                                d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="overflow-x-auto mt-6">
                                                <table class="table-auto border-collapse w-full">
                                                    <thead>
                                                        <tr class="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: "0.9674rem" }}>
                                                            <th class="px-4 py-3 bg-gray-200 text-white font-light" style={{ backgroundColor: "#3a3a3a" }}>Token</th>
                                                            <th class="px-4 py-2 text-white font-light" style={{ backgroundColor: "#3a3a3a" }}>Balance</th>
                                                            <th class="px-4 py-2 text-white font-light" style={{ backgroundColor: "#3a3a3a" }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="text-sm font-normal text-gray-700">
                                                        <tr class=" border-b border-gray-300 py-10 border-opacity-10">
                                                            <td class="px-4 py-4 font-light text-white">
                                                            THOREUM <strong class="text-ek-green rounded p-2">$0.0097</strong> <br />
                                                            Thoreum
                                                            </td>
                                                            <td class="px-4 py-4 font-light text-white">Adam</td>
                                                            <td class="px-4 py-4 font-light text-white">
                                                                <div class="">
                                                                    <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr class=" border-b border-gray-300 py-10 border-opacity-10">
                                                            <td class="px-4 py-4 font-light text-white">
                                                            THOREUM <strong class="text-ek-green rounded p-2">$0.0097</strong> <br />
                                                            Thoreum
                                                            </td>
                                                            <td class="px-4 py-4 font-light text-white">Adam</td>
                                                            <td class="px-4 py-4 font-light text-white">
                                                                <div class="">
                                                                    <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr class=" border-b border-gray-300 py-10 border-opacity-10">
                                                            <td class="px-4 py-4 font-light text-white">
                                                            THOREUM <strong class="text-ek-green rounded p-2">$0.0097</strong> <br />
                                                            Thoreum
                                                            </td>
                                                            <td class="px-4 py-4 font-light text-white">Adam</td>
                                                            <td class="px-4 py-4 font-light text-white">
                                                                <div class="">
                                                                    <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr class=" border-b border-gray-300 py-10 border-opacity-10">
                                                            <td class="px-4 py-4 font-light text-white">
                                                            THOREUM <strong class="text-ek-green rounded p-2">$0.0097</strong> <br />
                                                            Thoreum
                                                            </td>
                                                            <td class="px-4 py-4 font-light text-white">Adam</td>
                                                            <td class="px-4 py-4 font-light text-white">
                                                                <div class="">
                                                                    <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div id="pagination" class="w-full flex justify-center border-t border-gray-100 pt-4 items-center border-opacity-10">
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.4">
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                                                            fill="#2C2C2C"
                                                        />
                                                    </g>
                                                </svg>

                                                <p class="leading-relaxed cursor-pointer mx-2 text-blue-600 hover:text-blue-600 text-sm text-white">1</p>
                                                <p class="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600 text-gray-500">2</p>
                                                <p class="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600 text-gray-500">3</p>
                                                <p class="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600 text-gray-500">4</p>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
                                                        fill="#18A0FB"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                

                                    </div>
                                </div>

                                <div class="container-items-tabs py-3 h-full" id="pricing" data-tab-content>

                                <div class="px-60 h-full flex items-center">
                                <button class="bg-brand-500 w-full px-4 py-4 text-white uppercase font-bold rounded">Connect your wallet to see your tokens.</button>
                                </div>

                                </div>

                                <div class="container-items-tabs py-3 "  id="about"  data-tab-content>

                                    
                                </div>

                                <div class="container-items-tabs py-3 " id="news" data-tab-content>

                                    
                                </div>
                            </div>
                        </div>
                        </ul>
                    </div>
                    <div class="text-white text-4xl text-center my-12 flex justify-center w-full GL flex flex-col items-center">
                     Track your   <br />
                     <strong class="GB new-line mt-3">cryto currency</strong>
                    </div>
                    <div class="py-6 w-full flex items-center px-10">
                        <input type="text" class=" w-full p-2 rounded w-4/6 pl-6 GL bg-gray-50 bg-opacity-10 " placeholder="Enter Token name or address" />
                        <button class="h-full bg-brand-500 p-2 ml-6 rounded bg-brand-500 GB  w-2/6 uppercase text-white">Search</button>
                    </div>
                    <div class="grid grid-cols-5 gap-5 w-full  px-10">
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>

                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>

                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                        <div class="bg-gray-50 bg-opacity-10  p-1 rounded w-full h-44">
                            a   
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default multiChart