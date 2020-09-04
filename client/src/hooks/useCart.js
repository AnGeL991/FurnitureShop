import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../redux/orderRedux";


const useCart = (item) => {
  const [errorVisibily, setError] = useState(false);
  const dispatch = useDispatch();

  const isError = () => {
    setError(true);
    setTimeout(() => setError(false), 1000);
  };
  const { id } = item;

  const handleAdd = () => {
    dispatch(updateCartItem({ ...item }));
  };
  const removeItem = () => {
    dispatch(removeCartItem(id, "cart", size));
  };

  return [errorVisibily, { isError, removeItem, handleAdd }];
};

export default useCart;
