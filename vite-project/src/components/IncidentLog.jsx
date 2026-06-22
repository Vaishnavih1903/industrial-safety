function IncidentLog({

history

}){

return(

<div className="card">

<h2>

Incident History

</h2>

<br/>

{

history.length===0

?

<p>

No incidents yet

</p>

:

history.map(

(item,index)=>(

<div

key={index}

className="timeline-item"

>

<div>

🕒 {item.time}

</div>

<br/>

<div>

Zone:
{item.zone}

</div>

<div>

Risk:
{item.level}

</div>

<div>

Action:
{item.action}

</div>

</div>

)

)

}

</div>

);

}

export default IncidentLog;