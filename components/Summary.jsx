import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Summary(props) {
    var initialAmount = props.initialAmount
    var finalAmount = props.finalAmount
    var summaryBase = props.summaryBase
    var summaryTarget = props.summaryTarget
    var exchangeRate = props.exchangeRate

    function test() {
        props.hideHandler()
    }
    return (
        <div className=' bg-slate-500 rounded-3xl px-10 py-5 '>
            <div className='text-3xl font-sans font-semibold flex justify-between mx-2 ' >
                <h1>Summary</h1>
                <FontAwesomeIcon onClick={test} icon={faClose} className='text-slate-700 bg-white hover:text-white hover:bg-slate-700 px-2 py-1 rounded-full' />
            </div>

            <div className='my-7 text-2xl space-y-5  mx-auto self-center'>
                <div className='flex space-x-5'>
                    <h1>Base Currency :</h1>
                    <h1 className='font-semibold'>{summaryBase}</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1>Target Currency :</h1>
                    <h1 className='font-semibold'>{summaryTarget}</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1>Exchange Rate :</h1>
                    <h1 className='font-semibold'>{exchangeRate}</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1>Amount to Convert : </h1>
                    <h1 className='font-semibold'>{initialAmount}</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1>Final Result :</h1>
                    <h1 className='font-semibold'>{finalAmount}</h1>
                </div>
            </div>
        </div>
    )
}

export default Summary