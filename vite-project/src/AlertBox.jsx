import { useEffect, useState } from "react";

import { Client } from "@stomp/stompjs";

function AlertBox() {

const [connected,setConnected]=useState(false);

const [alert,setAlert]=useState(null);

useEffect(()=>{

const client=
new Client({

brokerURL:
"ws://localhost:8080/ws",

reconnectDelay:
5000,

onConnect:()=>{

setConnected(
true
);

client.subscribe(

"/topic/alerts",

(message)=>{

setAlert(
JSON.parse(
message.body
)
);

}

);

},

onStompError:(frame)=>{

console.log(
frame
);

}

});

client.activate();

return()=>{

client.deactivate();

};

},[]);

return(

<div
style={{
padding:"20px",
border:"1px solid gray",
marginTop:"20px"
}}
>

<h2>

Industrial Alerts

</h2>

<p>

Status:

{

connected

?

" Connected"

:

" Connecting"

}

</p>

{

alert&&

<div>

<h3>

Level:
{alert.level}

</h3>

<h3>

Action:
{alert.action}

</h3>

<h3>

Zone:
{alert.zone}

</h3>

</div>

}

</div>

);

}

export default AlertBox;