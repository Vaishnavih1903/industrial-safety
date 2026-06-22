function ReplayPanel({

history

}){

const events=

history
.slice(
0,
5
);

return(

<div className="card">

<h2>

Incident Replay

</h2>

<br/>

{

events.length===0

?

<div>

Run a simulation first

</div>

:

events.map(

(item,index)=>(

<div

key={index}

className="replay"

>

<div>

Step
{index+1}

</div>

<div>

{item.time}

</div>

<div>

{item.zone}

</div>

<div>

{item.level}

</div>

</div>

)

)

}

</div>

);

}

export default ReplayPanel;