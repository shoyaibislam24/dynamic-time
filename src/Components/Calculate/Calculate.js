import React, { useEffect } from 'react';
import './Calculate.css';
import logo from '../logo/mh.jpg';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Calculate = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const {calculate} = props;
    console.log(calculate);
    let total = 0;
    for (const items of calculate) {
        total = total + items.time;
    }
    // break time 
    useEffect( ()=>{
        // setBreakTime(firstData);
        const storedDataSt = localStorage.getItem('Break-Time');
        const storedData = JSON.parse(storedDataSt);
        console.log(storedData);
        if(storedData === null){
            setBreakTime(0)
        }else{
            setBreakTime(storedData);
        }
        
    },[])
    let getBreakTimeDb = 0
    const handleBreakTimeBtn = (e) =>{
        // setBreakTime(e);
        const breakTimeDb = localStorage.getItem('Break-Time');
        const oldBeakTimeDb = JSON.parse(breakTimeDb);
        if(oldBeakTimeDb){
            localStorage.removeItem('Break-Time');
            localStorage.setItem('Break-Time', JSON.stringify(e));
            const getBreakTimeDbStr = localStorage.getItem('Break-Time');
            const getBreakTimeDb = JSON.parse(getBreakTimeDbStr);
            setBreakTime(getBreakTimeDb);
        }
        else{
            localStorage.setItem('Break-Time', JSON.stringify(e));
            const getBreakTimeDbStr = localStorage.getItem('Break-Time');
            getBreakTimeDb = JSON.parse(getBreakTimeDbStr);
            setBreakTime(getBreakTimeDb);
        }
    }
    const notify = () =>{
        alert("Wow so easy!");
        }
    return (
        <div  className='calculate-position'>
            <div>
            <div className='my-delails'>
                <div className='my-img'>
                    <img src={logo} alt="" />
                </div>
                <div className='my-name'>
                    <h4>M.Mahmud Hossain</h4>
                    <br />
                    <h4></h4>
                </div>
            </div>
            <div className='details'>
                <div>
                    <h5>64 Kg</h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.5</h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>16<small>yrs</small></h5>
                    <p>Age</p>
                </div>
            </div>
            {/* add breaker */}
            <div className="break-section">
                <h2 className='cart-heading'>Add A Break</h2>
                <div className="break-time">
                    <button onClick={()=>handleBreakTimeBtn(10)} className="time">10m</button>
                    <button onClick={()=>handleBreakTimeBtn(20)} className="time">20m</button>
                    <button onClick={()=>handleBreakTimeBtn(30)} className="time">30m</button>
                    <button onClick={()=>handleBreakTimeBtn(40)} className="time">40m</button>
                    <button onClick={()=>handleBreakTimeBtn(50)} className="time">50m</button>
                </div>
            </div>
            {/* Activity Details  */}
            <div className="count-section">
                <h2 className='cart-heading'>Activity Details</h2>
                <div className="activity-time">
                    <div className="name-detail">Activity Time</div>
                    <div className="total-activity">{total}min</div>     
                </div>
                <h4>Cart Length : {calculate.length}</h4>
                <div className="activity-time">
                    <div className="name-detail">Break Time</div>
                    <div className="total-break">{breakTime}min</div>                        
                </div>
            </div>
            {/* Activity Complite  */}
            <button onClick={notify} className='final-button'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Calculate;