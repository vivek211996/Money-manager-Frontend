import React from 'react';
import ReactLoading from 'react-loading';
 import "./loading.css"
const Loading = ({ type, color }) => (
    <ReactLoading className="spin" type={"spin"} color={"blue"} height={50} width={50} />
);
 
export default Loading;
