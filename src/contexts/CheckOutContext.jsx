import { createContext, useState } from "react";

export const CheckOutContext = createContext();

export const CheckOutContextProvider = ({ children }) => {
  const [checkOutData, setCheckOutData] = useState({
    cardHolderName: null,
    cardNumber: null,
    expiryDate: null,
    ccv: null,
    totalPrice: 0,
  })

  const handleInputChange = (e => {
    const { name, value} = e.target
    setCheckOutData(prevCheckOutData => ({
    ...prevCheckOutData,
    [name]: value,
    }))
  })

  const value = {
    checkOutData,
    setCheckOutData,
    handleInputChange,
  }

  return (
    <CheckOutContext.Provider value={value}> {children} </CheckOutContext.Provider>
  )
}