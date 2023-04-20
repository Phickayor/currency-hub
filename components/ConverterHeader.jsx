import React from 'react'

function ConverterHeader() {
    return (
        <div
            className="w-full sticky top-0 lg:h-36 h-28 backdrop-blur-3xl"
        >
            <img src='/images/headerbg.jpeg'
                className="w-full absolute top-0 lg:h-36 h-28 backdrop-blur-3xl object-cover opacity-60 sepia-[.40]"
            />
            <div
                className="relative mx-auto w-11/12 flex flex-col justify-end h-full lg:py-4 py-2"
            >
                <h1 className="text-4xl font-serif lg:text-6xl font-bold text-shadow-2xl">
                    CURRENCY HUB
                </h1>
            </div>
        </div>)
}

export default ConverterHeader