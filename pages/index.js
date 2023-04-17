import Amount from '@/components/Amount'
import Currencies from '@/components/Currencies'
import Header from '@/components/Header'
import Summary from '@/components/Summary'
import Image from 'next/image'
import { useRef, useState } from 'react'
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
