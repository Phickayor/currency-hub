import Amount from '@/components/Amount'
import Currencies from '@/components/Currencies'
import Header from '@/components/ConverterHeader'
import Summary from '@/components/Summary'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false; /* eslint-disable import/first */
export default function Home() {
    const [base, setBase] = useState()
    const [target, setTarget] = useState()
    const [initialAmount, setInitialAmount] = useState()
    const [finalAmount, setFinalAmount] = useState()
    const [summaryBase, setSummaryBase] = useState()
    const [summaryTarget, setSummaryTarget] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const summaryContainer = useRef()
    const mainPage = useRef()

    function baseSetter(base) {
        setBase(base)
    }
    function targetSetter(target) {
        setTarget(target)
    }
    function hide() {
        console.log(summaryContainer)
        summaryContainer.current.classList.add("hidden")
        mainPage.current.classList.remove("blur")
    }
    function summaryInfo(initialAmount, finalAmount, summaryBase, summaryTarget, exchangeRate) {
        setInitialAmount(initialAmount)
        setFinalAmount(finalAmount)
        setSummaryBase(summaryBase)
        setSummaryTarget(summaryTarget)
        setExchangeRate(exchangeRate)
        summaryContainer.current.classList.remove("hidden")
        mainPage.current.classList.add("blur")
    }
    return (
        <div className='bg-slate-800 font-poppins'>
            <Head>
                <title>Currency Hub</title>
                <meta name="description" content="Convert to different currencies wiith the current exchange rate " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div ref={mainPage}>
                <Header />
                <Currencies baseHandler={baseSetter} targetHandler={targetSetter} />
                <Amount base={base} target={target} finalResultHandler={summaryInfo} />
            </div>
            <div ref={summaryContainer} className='hidden absolute top-1/2 left-1/2 w-11/12 md:w-10/12 lg:w-6/12 transform -translate-x-1/2 -translate-y-1/2'>
                <Summary initialAmount={initialAmount} finalAmount={finalAmount} summaryBase={summaryBase} summaryTarget={summaryTarget} exchangeRate={exchangeRate} hideHandler={hide} />
            </div>
        </div>






















    )
}
