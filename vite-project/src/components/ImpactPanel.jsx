function ImpactPanel({

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

const prevented=

Math.max(
0,
critical*2
);

const fnReduction=

Math.min(
95,
40+(critical*10)
);

const readiness=

Math.max(
60,
100-(risk.score||0)
);

return(

<div className="card">

<h2>

Impact Simulation

</h2>

<br/>

<div className="impact">

<div>

Incidents Prevented

<br/>

<strong>

{prevented}

</strong>

</div>

<div>

Lead Time

<br/>

<strong>

{

risk.level==="CRITICAL"

?

"60 min"

:

risk.level==="HIGH"

?

"3 hrs"

:

"Stable"

}

</strong>

</div>

</div>

<br/>

<div className="impact">

<div>

False Negative ↓

<br/>

<strong>

{fnReduction}%

</strong>

</div>

<div>

Operational Readiness

<br/>

<strong>

{readiness}%

</strong>

</div>

</div>

<br/>

<div className="impact-note">

Safety Intelligence continuously reduces delayed response risk.

</div>

</div>

);

}

export default ImpactPanel;