function PlantLayout({

risk,

zone

}){

function getColor(value){

if(value>=80)
return "#ef4444";

if(value>=50)
return "#f59e0b";

return "#22c55e";

}

const areas=[

"Boiler-A",

"Refinery-B",

"Storage-C",

"Maintenance-D"

];

return(

<div className="card">

<h2>

Plant Floor

</h2>

<br/>

<div className="plant">

{

areas.map(

(item)=>(

<div

key={item}

className="plant-box"

style={{

background:

item===zone

?

getColor(
risk
)

:

"#1e293b"

}}

>

<div>

{item}

</div>

<br/>

<div>

{

item===zone

?

`${risk}%`

:

"Idle"

}

</div>

</div>

)

)

}

</div>

</div>

);

}

export default PlantLayout;