import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PaymentRequest = () => {
    const [req, setReq] = useState('sent')
    const [data, setdata] = useState([])
    const fetchSentRequest= async()=>{
        const res= await axios.get(`/api/request/sent-request`, {
            headers:{
                'Content-Type':'application/json'
            }
        })

        const data= await res.data
        console.log(data)
    }
    const fetchReceived=async()=>{

    }

    // useEffect(() => {
    //  fetchSentRequest()

    // }, [])

    const handleData=async()=>{
        if(req==='sent'){
            setdata(fetchSentRequest)
        }
        else{
            setdata(fetchReceived)
        }
    }
    
  return (
   <>
   {/* header */}
   <div>
    <button onClick={()=>setReq('sent')}>sent</button>
    <button onClick={()=>setReq('received')}>received</button>
   </div>
   {/* body */}
   <div>
   </div>
   
   </>
  )
}

export default PaymentRequest