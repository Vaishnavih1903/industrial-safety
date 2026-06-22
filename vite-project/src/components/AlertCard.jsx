function AlertCard({

level,

action,

zone

}){

return(

<div className="card">

<h2>

Current Incident

</h2>

<br/>

<div className="big">

{level}

</div>

<br/>

<p>

Action:
{action}

</p>

<br/>

<p>

Zone:
{zone}

</p>

</div>

);

}

export default AlertCard;