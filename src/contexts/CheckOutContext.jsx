import { createContext, useState } from "react";

export const CheckOutContext = createContext();

export const CheckOutContextProvider = ({ children }) => {
  const [checkOutData, setCheckOutData] = useState({
    shipping: 0,
    cardHolderName: null,
    cardNumber: null,
    expiryDate: null,
    ccv: null,
    totalPrice: null,
  })

  const handleInputChange = (e => {
    const { name, value } = e.target
    setCheckOutData(prevCheckOutData => ({
    ...prevCheckOutData,
    [name]: value,
    }))
  })

  const handleShippingChange = (e => {
    setCheckOutData(prevCheckOutData => ({
      ...prevCheckOutData,
      shipping: parseInt(e.target.value)
    }))
  });

  const value = {
    checkOutData,
    setCheckOutData,
    handleInputChange,
    handleShippingChange,
  }

  return (
    <CheckOutContext.Provider value={value}> {children} </CheckOutContext.Provider>
  )
}