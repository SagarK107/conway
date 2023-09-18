
import PropTypes from 'prop-types'
import "./conway.css"
import Square from '../square/Square';
import React, { useState, useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';

function nextConwayState(arr)
{
    var m = arr.length;
    var n = arr[0].length;
    var new_arr = Array(m).fill(0).map(e => Array(n).fill(0)); // New Array
    console.log(arr);
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];
    for(var i = 0; i < m ; i++)
    {
        for(var j = 0; j < n; j++)
        {
            var neighbouring_cells_alive = 0;
            for (const [dx,dy] of directions)
            {
                const r_ = i + dx
                const c_ = j + dy
                
                
                if ( r_ > 0 && r_ < m && c_ > 0 && c_ < n && arr[r_][c_] === 1)
                {
                    console.log(r_,c_)
                    neighbouring_cells_alive += 1
                }
            }
            if (arr[i][j] === 1)
            {
                console.log(neighbouring_cells_alive)
            }
            if (neighbouring_cells_alive < 2 || neighbouring_cells_alive >= 4)
            {
                new_arr[i][j] = 0;
            }

            else if (neighbouring_cells_alive === 2 && arr[i][j] === 1)
            {
                new_arr[i][j] = arr[i][j];
            }

            else if (neighbouring_cells_alive == 3)
            {
                new_arr[i][j] = 1;
            }
            
        }
    }

    return new_arr;
}

function Conway(props) {
    
    const length = props.length;
    const width = props.width;
    const started = props.started;
    const reset = props.reset;
    const setStarted = props.setStarted;
    const [grid,setGrid] = useState(Array(length).fill(0).map(e => Array(width).fill(0)));
    console.log(started);
    const interval = 2000;
    useEffect(() => {
        if (started)
        {
            const c = setInterval(() => {
                console.log(grid);
                setGrid(nextConwayState(grid));
            },interval);
            return () => clearInterval(c);
        }
        

    }
    )

    
    function changeGrid(i,j,val)
    {
        setGrid(grid.map((row_a,row) => row_a.map((original_val,col) => (row === i && col === j) ? val : original_val)));
        console.log("changed",i,j,val)
    }

    
    return (
        <div>
            {
                grid.map((e,i) => <div> {e.map((f,j) =>  
                        <Square state={(f === 1) ? "live" : "dead"} row={i} col={j} changeGrid={changeGrid}/>  
                       
                              
                )
                
            }
            </div>
                )
            }
            <Button variant="primary" onClick={() =>setStarted(true)}>Start</Button>
            <Button variant="secondary" onClick={() => setStarted(false)}>Stop</Button>
            <Button variant="danger" onClick={() => setGrid(Array(length).fill(0).map(e => Array(width).fill(0)))}>Reset</Button>
        </div>
    )
}



Conway.propTypes = {}

export default Conway

