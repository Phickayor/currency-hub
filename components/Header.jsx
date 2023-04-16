import React from 'react'

function Header() {
    return (
        <div
            className="w-full sticky top-0 border lg:h-36 h-28 backdrop-blur-3xl bg-[url('/images/rates.jpeg')] bg-cover opacity sepia-[.60]"
        >
            <div
                className="mx-auto lg:w-6/12 w-11/12 flex flex-col justify-end h-full py-4"
            >
                <h1 className="text-white  text-4xl lg:text-6xl font-bold text-shadow-2xl">
                    CURRENCY HUB
                </h1>
            </div>
        </div>)
}

export default Header