import React from 'react'
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usdi",
    amountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
    const amountInputId=useId();
   

    return (
        <div className={`bg-gray-500 p-3 rounded-lg text-sm flex  ${className} `}>
            <div className="w-1/2">
                <label 
                htmlFor={amountInputId} 
                className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}// in event js always get a value in string format so we convert in number format to remove error
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 text-black cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabled={currencyDisable}
                >
                    
                    {currencyOption.map((Currency)=>(
                        <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
