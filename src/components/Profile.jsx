
import * as React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Profile() {
  const dispatch = useDispatch();
  const userNR = useSelector(state => state.userNR);
  console.log(dd);
  return (
    <div className="">
      <h1>Profile</h1>
    </div>
  );
}