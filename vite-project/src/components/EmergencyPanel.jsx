function EmergencyPanel({

level

}){

const active=

level==="CRITICAL";

return(

<div

className="card"

style={{

border:

active

?

"2px solid red"

:

"none"

}}

>

<h2>

Emergency Status

</h2>

<br/>

{

active

?

<div>

🚨 Emergency Protocol Active

</div>

:

<div>

🟢 Standby

</div>

}

<br/>

<p>

Response Team:
Ready

</p>

<p>

Evacuation:
Auto

</p>

<p>

Evidence:
Recording

</p>

</div>

);

}

export default EmergencyPanel;