function CompliancePanel({

risk,

sensor

}){

function status(ok){

return ok

?

"PASS"

:

"FAIL";

}

const checks=[

{

name:"Gas Safety",

ok:sensor.gas<50

},

{

name:"Pressure Control",

ok:sensor.pressure<70

},

{

name:"Worker Density",

ok:sensor.workerCount<10

},

{

name:"Emergency Readiness",

ok:risk.level!=="CRITICAL"

}

];

const score=

Math.round(

checks
.filter(

c=>c.ok

)

.length

/

checks.length

*100

);

return(

<div className="card">

<h2>

Compliance Intelligence

</h2>

<br/>

{

checks.map(

(item,index)=>(

<div

key={index}

className="timeline-item"

>

{item.name}

—

{

status(
item.ok
)

}

</div>

)

)

}

<br/>

<h3>

Overall:
{score}%

</h3>

</div>

);

}

export default CompliancePanel;