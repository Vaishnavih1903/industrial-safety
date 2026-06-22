function Heatmap({

risk,

zone

}) {

function color(){

if(
risk>=80
)
return "#ef4444";

if(
risk>=50
)
return "#f59e0b";

return "#22c55e";

}

return (

<div className="card">

<h2>

Plant Risk Heatmap

</h2>

<br/>

<div
style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"15px"

}}
>

{

[

"Boiler-A",

"Refinery-B",

"Storage-C",

"Maintenance-D"

]

.map(

(item)=>(

<div

key={item}

style={{

padding:"25px",

borderRadius:"18px",

background:

item===zone

?

color()

:

"#1e293b",

transition:"1s"

}}

>

<h3>

{item}

</h3>

<br/>

{

item===zone

?

`${risk}% Risk`

:

"Normal"

}

</div>

)

)

}

</div>

</div>

);

}

export default Heatmap;