


const Trade = () => {
    return (
     
        <div  className="page__content" style={{ marginTop: '110px'}}>
           
           <div className="container mx-auto">
                <div class="item-misk p-2 rounded flex flex-col">
                    <div class="text-white text-4xl text-center my-12 flex justify-center w-full GL flex flex-col items-center">
                     Más que un intercambio de <br />
                     <strong class="GB new-line mt-3">criptomonedas</strong>
                    </div>
                    <div class="px-36 pb-36">
                        <div class="grid grid-cols-2 gap-10">
                            <div class="flex-col flex">
                            <div class="flex">
                                <label class="text-gray-200">You Send</label>
                                <span  class="text-white ml-auto">Balance: <strong>0</strong></span>
                                </div>
                                <div class="rounded-lg flex items-center  px-8 py-8 bg-gray-300 bg-opacity-10 mt-8">
                                    <div class="icon rounded-full w-12 h-12 ">
                                        <img class="w-full h-full object-cover" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
                                    </div>
                                    <div class="text-left flex-auto ml-8">
                                        <div class="text-white GB font-lg">
                                            BTC - Bitcoin
                                            <div class="GL">
                                                0.00001000
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-auto flex">
                                        <div class="ml-auto">
                                            <div class="w-8 h-8 rounded-full bg-gray-100 bg-opacity-10 flex items-center justify-center cursor-pointer">
                                                <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                                <div class="flex mt-4">
                                    <div class="relative  flex-grow mr-4">
                                        <input type="text" class="pl-4 rounded-lg bg-gray-100 bg-opacity-10 w-full py-3" placeholder="0.11111111"/>
                                        <div class="absolute top-2/4 transform -translate-y-2/4 right-3 text-white GB">
                                            BTC
                                        </div>
                                    </div>
                                    <div class="rounded-lg bg-gray-100 bg-opacity-10 flex-none flex px-6 GL text-white items-center">
                                        $30.0
                                    </div>
                                </div>
                            </div>

                            <div class="flex-col flex">
                                <div class="flex">
                                <label class="text-gray-200">You Send</label>
                                <span class="text-white  ml-auto">Balance: <strong>0</strong></span>
                                </div>
                                <div class="rounded-lg flex items-center  px-8 py-8 bg-gray-300 bg-opacity-10 mt-8">
                                    <div class="icon rounded-full w-12 h-12 ">
                                        <img class="w-full h-full object-cover" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" />
                                    </div>
                                    <div class="text-left flex-auto ml-8">
                                        <div class="text-white GB font-lg">
                                            ETH - Ethereum
                                            <div class="GL">
                                                0.00001000
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-auto flex">
                                        <div class="ml-auto">
                                            <div class="w-8 h-8 rounded-full bg-gray-100 bg-opacity-10 flex items-center justify-center cursor-pointer">
                                                <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                                <div class="flex mt-4">
                                    <div class="relative  flex-grow mr-4">
                                        <input type="text" class="pl-4 rounded-lg bg-gray-100 bg-opacity-10 w-full py-3" placeholder="0.11111111"/>
                                        <div class="absolute top-2/4 transform -translate-y-2/4 right-3 text-white GB">
                                           ETH
                                        </div>
                                    </div>
                                    <div class="rounded-lg bg-gray-100 bg-opacity-10 flex-none flex px-6 GL text-white items-center">
                                        $30.0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <button class="px-20 py-4 rounded bg-brand-500 mt-20 uppercase text-white">Exchange</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Trade