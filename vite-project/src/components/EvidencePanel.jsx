function EvidencePanel({

sensor,

risk

}){

const evidence=[];

if(sensor.gas>=70){

evidence.push(
"Gas concentration elevated"
);

}

if(sensor.pressure>=70){

evidence.push(
"Pressure abnormal"
);

}

if(sensor.temperature>=60){

evidence.push(
"Temperature escalation"
);

}

if(sensor.workerCount>=10){

evidence.push(
"High worker exposure"
);

}

if(

sensor.gas>=70

&&

sensor.workerCount>=10

){

evidence.push(
"Compound hazard detected"
);

}

return(

<div className="card">

<h2>

Risk Evidence

</h2>

<br/>

{

evidence.length===0

?

<div>

No significant indicators

</div>

:

evidence.map(

(item,index)=>(

<div

key={index}

className="evidence"

>

⚠ {item}

</div>

)

)

}

<br/>

<div>

Lead Time Estimate:

<strong>

{

risk.level==="CRITICAL"

?

" 45–90 min"

:

risk.level==="HIGH"

?

" 2–4 hrs"

:

" Stable"

}

</strong>

</div>

</div>

);

}

export default EvidencePanel;