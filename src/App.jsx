import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=871&auto=format&fit=crop')`
      }}
    >
      {/* Title & Tagline */}
            <div className="text-center text-gray-900 mb-6 drop-shadow-lg">
        <h1 className="text-4xl font-bold flex items-center gap-2">
            💱 Currency Converter
        </h1>
        <p className="mt-2 text-lg text-gray-800 opacity-90">
            Convert your money instantly with live exchange rates
        </p>
        </div>


      {/* Converter Card */}
      <div className="w-full max-w-md mx-auto border border-white/30 rounded-2xl p-6 backdrop-blur-md bg-white/20 shadow-2xl text-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From */}
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(Currency) => setFrom(Currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              inputClass="bg-white/20 text-white placeholder-gray-200 rounded-lg p-3 w-full"
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-1 transition-all duration-200 shadow-md"
              onClick={swap}
            >
              🔄 Swap
            </button>
          </div>

          {/* To */}
          <div className="mt-4 mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(Currency) => setTo(Currency)}
              selectCurrency={to}
              onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
              inputClass="bg-white/20 text-white placeholder-gray-200 rounded-lg p-3 w-full"
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-200"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
