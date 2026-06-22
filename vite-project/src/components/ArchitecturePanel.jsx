function ArchitecturePanel() {

const flow = [

{
title:"DATA",
items:[
"IoT",
"SCADA",
"CCTV",
"Permits"
]
},

{
title:"AI",
items:[
"Risk Engine",
"Fusion",
"Groq"
]
},

{
title:"ACTION",
items:[
"Alerts",
"Emergency",
"Dashboard"
]
}

];

return(

<div className="card">

<h2>

Industrial Safety Intelligence Pipeline

</h2>

<br/>

<div className="pipeline">

{

flow.map(

(stage,index)=>(

<div
key={index}
className="stage"
>

<div
className="stage-title"
>

{stage.title}

</div>

{

stage.items.map(

(item)=>(

<div
key={item}
className="stage-node"
>

{item}

</div>

)

)

}

{

index!==flow.length-1

&&

<div
className="connector"
/>

}

</div>

)

)

}

</div>

</div>

);

}

export default ArchitecturePanel;