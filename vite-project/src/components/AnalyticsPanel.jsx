function AnalyticsPanel({

history,

risk

}){

const total=
history.length;

const critical=

history.filter(

x=>

x.level==="CRITICAL"

)

.length;

const avg=

history.length

?

Math.round(

history.reduce(

(a,b)=>

a+

(

b.score||0

),

0

)

/

history.length

)

:

0;

const safety=

100-

risk.score;

return(

<div className="card">

<h2>

Executive Analytics

</h2>

<br/>

<div className="timeline-item">

Total Events

<span>

{total}

</span>

</div>

<div className="timeline-item">

Critical Incidents

<span>

{critical}

</span>

</div>

<div className="timeline-item">

Average Risk

<span>

{avg}%

</span>

</div>

<div className="timeline-item">

Safety Score

<span>

{

Math.max(
0,
safety
)

}

%

</span>

</div>

</div>

);

}

export default AnalyticsPanel;