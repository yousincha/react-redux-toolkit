import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchUsersAsync } from "./counterSlice";
const Test = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(fetchUsersAsync());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return <div>Test</div>;
};

export default Test;
