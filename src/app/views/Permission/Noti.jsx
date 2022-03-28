import React from 'react'
import Echo from 'laravel-echo';


export default function Noti() {
   
 
window.Pusher = require('pusher-js');
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'Avhcqfuedh6BGPXVRyXJtjPIoxjgUqMELSwTlbsj5OY=',
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

const options = {
    broadcaster: 'pusher',
    key: 'Avhcqfuedh6BGPXVRyXJtjPIoxjgUqMELSwTlbsj5OY=',
    // cluster: config.pusher.cluster,
    forceTLS: true,
    // authEndpoint is your apiUrl + /broadcasting/auth
    authEndpoint: 'http://127.0.0.1:8000/api/noti', 
    // As I'm using JWT tokens, I need to manually set up the headers.
    auth: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        Accept: 'application/json',
      },
    },
  };
const echo = new Echo(options);
echo.private(`App.User.${localStorage.getItem('user_id')}`).notification((data) => {
    console.log(data);
});
  return (
    <div>
      
    </div>
  )
}
