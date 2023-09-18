import React from 'react'
import "./square.css"
import { useState, useEffect } from 'react';

export default function Square({state,row,col,changeGrid}) {
  
  return (
    <div className={`${state === "live" ? "square__live" : "square__dead"} square`} onClick={() => {
    changeGrid(row,col,state === "live" ? 0 : 1)

  }}></div>
  )
}
