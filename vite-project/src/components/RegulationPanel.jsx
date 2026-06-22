function RegulationPanel({

sensor,

risk

}){

const rules=[];

if(sensor.gas>=70){

rules.push(
{
rule:"OISD Gas Monitoring",
status:"Violation"
}
);

}

if(sensor.workerCount>=10){

rules.push(
{
rule:"Worker Exposure Threshold",
status:"Review Required"
}
);

}

if(sensor.temperature>=60){

rules.push(
{
rule:"Thermal Safety Protocol",
status:"Action Required"
}
);

}

if(

rules.length===0

){

rules.push(
{

rule:"Factory Safety Standards",

status:"Compliant"

}

);

}

return(

<div className="card">

<h2>

Compliance Decision Engine

</h2>

<br/>

{

rules.map(

(

r,

i

)=>(

<div

key={i}

className="rule"

>

<div>

{r.rule}

</div>

<strong>

{r.status}

</strong>

</div>

)

)

}

<br/>

<div>

Audit Readiness:

<strong>

{

risk.level==="CRITICAL"

?

" FAIL"

:

risk.level==="HIGH"

?

" REVIEW"

:

" PASS"

}

</strong>

</div>

</div>

);

}

export default RegulationPanel;