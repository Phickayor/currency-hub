import { faArrowsUpDown, faLongArrowDown, faLongArrowLeft, faLongArrowRight, faLongArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Currencies(props) {
    const [countries, setCountries] = useState([])
    const [basecountrycode, setBaseCountryCode] = useState("- -")
    const [targetcountrycode, setTargetCountryCode] = useState("- -")
    function Basename(e) {
        e.preventDefault()
        setBaseCountryCode(e.target.value)
        props.baseHandler(e.target.value)
    }
    function Targetname(e) {
        e.preventDefault()
        setTargetCountryCode(e.target.value)
        props.targetHandler(e.target.value)
    }

    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/1c1d2c7fac1d2e6deb4303c4/codes")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setCountries(data.supported_codes)
            }).catch((error) => {
                console.log(error)
                alert("You do not have an internet connection")
            })
    }, [])

    return (
        <form
            className="mx-auto w-10/12 lg:w-6/12 my-12 space-y-6 lg:space-y-0 lg:space-x-6 font-poppins lg:flex"
        >
            <div className="flex lg:w-full ">
                <label
                    className="w-1/4 py-4 text-center rounded-l-xl border cursor-pointer flex flex-col justify-center border-slate-500 font-semibold text-xl"
                >
                    {basecountrycode}
                </label>
                <select onChange={Basename} className="bg-gray-700 py-6 cursor-pointer space-y-10 w-full outline-none lg:text-xl px-5 rounded-r-xl">
                    <option defaultValue value="- -">Choose Base Currency</option>
                    {countries.map((country) => (
                        <option
                            key={country[0]}
                            value={country[0]}
                            className='border-b-2'
                        >{country[1]}</option>
                    ))}
                </select>

            </div>
            <div className=" justify-center space-x-1 hidden lg:block">
                <FontAwesomeIcon icon={faLongArrowLeft} />
                <FontAwesomeIcon icon={faLongArrowRight} />
            </div>
            <div className="flex justify-center space-x-1 lg:hidden text-3xl">
                <FontAwesomeIcon icon={faLongArrowUp} />
                <FontAwesomeIcon icon={faLongArrowDown} />
            </div>
            <div className="flex lg:w-full">
                <label
                    className="w-1/4 py-4 text-center rounded-l-xl border cursor-pointer flex flex-col justify-center border-slate-500 font-semibold text-xl"
                >
                    {targetcountrycode}
                </label>
                <select onChange={Targetname} className="bg-gray-700 py-6 cursor-pointer space-y-10 w-full outline-none lg:text-xl px-5 rounded-r-xl">
                    <option defaultValue value="- -">Choose Target Currency</option>
                    {countries.map((country) => (
                        <option
                            key={country[0]}
                            value={country[0]}
                            className='border-b-2'
                        >{country[1]}</option>
                    ))}
                </select>
            </div>
        </form >
    )
}

export default Currencies