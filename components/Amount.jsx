import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import Summary from './Summary'
function Amount(props) {
    const amount = useRef(null)
    const back = <FontAwesomeIcon icon={faBackspace} />
    function convert() {
        // alert(props)
        fetch("https://v6.exchangerate-api.com/v6/1c1d2c7fac1d2e6deb4303c4/latest/" + props.base)
            .then((response) => {
                return response.json()
            }).then((data) => {
                props.finalResultHandler(amount.current.value, (amount.current.value * data.conversion_rates[props.target]), props.base, props.target, data.conversion_rates[props.target])

            })
    }
    function addToInput(e) {
        amount.current.value += e.target.innerHTML
    }
    function removeFromInput() {
        var presentValue = amount.current.value
        var presentValueArray = presentValue.split("")
        presentValueArray.pop()
        amount.current.value = presentValueArray.join("")

    }
    return (
        <div className="mx-auto w-10/12 lg:w-6/12 my-12 lg:space-y-10 space-y-5">
            <input
                type="text"
                className="bg-gray-700 text-white w-full h-full lg:py-8 py-5 px-5 rounded-xl text-center font-semibold lg:text-2xl text-xl"
                placeholder="# 2000"
                disabled
                ref={amount}
            />
            <table
                className="w-full h-72 text-center bg-gray-700 py-5 font-semibold text-4xl rounded-t-3xl"
            >
                <tr>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">1</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">2</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">3</div>
                    </td>
                </tr>
                <tr>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">4</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">5</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">6</div>
                    </td>
                </tr>
                <tr>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">7</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">8</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">9</div>
                    </td>
                </tr>
                <tr>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">0</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={addToInput} className="hover:bg-slate-500 mx-auto w-1/2 p-3">.</div>
                    </td>
                    <td className="cursor-pointer">
                        <div onClick={removeFromInput} className="hover:bg-slate-500 mx-auto w-1/2 py-3">{back}</div>
                    </td>
                </tr>
            </table>
            <button onClick={convert} className="bg-gray-700 hover:bg-slate-500 duration-[2s] w-full lg:py-6 py-5 px-5 rounded-xl text-center font-semibold lg:text-2xl text-xl">Convert</button>
        </div >)
}

export default Amount