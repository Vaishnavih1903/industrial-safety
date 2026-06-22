function CommandCenter({

risk,

history

}){

const critical=

history.filter(
x=>
x.level==="CRITICAL"
).length;

const status=

risk.level==="CRITICAL"

?

"#ef4444"

:

risk.level==="HIGH"

?

"#f59e0b"

:

"#10b981";

return(

<div

className="command"

style={{

borderColor:status

}}

>

<div>

CONTROL ROOM

</div>

<div>

STATUS:
{risk.level}

</div>

<div>

INCIDENTS:
{history.length}

</div>

<div>

CRITICAL:
{critical}

</div>

<div id="clock">

{

new Date()

.toLocaleTimeString()

}

</div>

</div>

);

}

export default CommandCenter;