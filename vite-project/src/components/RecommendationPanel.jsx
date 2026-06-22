function RecommendationPanel({ level }) {

function getActions() {

if (level === "CRITICAL") {

return [

"Immediate evacuation",

"Stop nearby operations",

"Lock hazardous equipment",

"Notify response teams",

"Preserve sensor evidence"

];

}

if (level === "HIGH") {

return [

"Reduce personnel",

"Inspect equipment",

"Increase monitoring"

];

}

return [

"Continue monitoring"

];

}

return (

<div className="card">

<h2>

AI Recommended Actions

</h2>

<br />

{

getActions().map(

(item,index)=>(

<div

key={index}

className="timeline-item"

>

✓ {item}

</div>

)

)

}

</div>

);

}

export default RecommendationPanel;