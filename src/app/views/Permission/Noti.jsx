import React from 'react'
import { useEffect } from 'react';
import Pusher from 'pusher-js';

export default function Noti() {

    useEffect(()=>{
        var pusher = new Pusher("Avhcqfuedh6BGPXVRyXJtjPIoxjgUqMELSwTlbsj5OY=", {
            cluster: "ap2",
            encrypted: true,
          });
     
          var channel = pusher.subscribe("notifyChannel");
           channel.bind("notifyChannel", async function (response) {
               alert('some notification');
           })
    },[])
  return (
    <div>
      
    </div>
  )
}
