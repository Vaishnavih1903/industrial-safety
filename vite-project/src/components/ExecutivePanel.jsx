function ExecutivePanel({

risk,

history

}){

const incidents=
history.length;

const critical=

history.filter(
x=>
x.level==="CRITICAL"
).length;

const safe=

Math.max(
0,
100-(risk.score||0)
);

return(

<div className="card">

<h2>

Executive Safety Summary

</h2>

<br/>

<div className="exec-row">

<div>

Current Risk

<br/>

<strong>

{risk.level}

</strong>

</div>

<div>

Incidents

<br/>

<strong>

{incidents}

</strong>

</div>

</div>

<br/>

<div className="exec-row">

<div>

Critical Events

<br/>

<strong>

{critical}

</strong>

</div>

<div>

Safety Score

<br/>

<strong>

{safe}/100

</strong>

</div>

</div>

<br/>

<div className="exec-action">

{

risk.level==="CRITICAL"

?

"Immediate evacuation + isolate zone"

:

risk.level==="HIGH"

?

"Reduce exposure and inspect"

:

"Continue monitored operation"

}

</div>

</div>

);

}

export default ExecutivePanel;