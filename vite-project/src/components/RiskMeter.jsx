function RiskMeter({
score
}){

const color=

score>80

?

"#ef4444"

:

score>50

?

"#f59e0b"

:

"#22c55e";

return(

<div className="card">

<h2>

Risk Score

</h2>

<br/>

<div className="progress">

<div

className="progress-fill"

style={{

width:
`${score}%`,

background:
color

}}

></div>

</div>

<br/>

<div className="big">

{score}

%

</div>

</div>

);

}

export default RiskMeter;