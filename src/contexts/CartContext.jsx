import { createContext, useState, useEffect, useContext } from "react";
import { CheckOutContext } from "contexts/CheckOutContext.jsx";

const dummyItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState(dummyItems);

  //按鈕加減數量
  function handleMinusClick(itemId) {
    setItems(
      items.map((item) => {
        if (item.id === itemId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0)  
    );
  }

  function handlePlusClick(itemId) {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }

  //計算總價
  let totalPrice = 0;
  items.forEach((item) => (totalPrice += item.price * item.quantity));

  // 更新 checkOutData 的 totalPrice
  const { setCheckOutData } = useContext(CheckOutContext)
  useEffect(() => {
    setCheckOutData((prevData) => ({
      ...prevData,
      totalPrice: totalPrice,
    }));
  }, [totalPrice]);

  const value = {
    items,
    totalPrice,
    handleMinusClick,
    handlePlusClick,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
