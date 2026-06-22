function DemoPanel({

runDemo,

running

}){

return(

<div className="card">

<h2>

Judge Demo Mode

</h2>

<br/>

<p>

Runs:
SAFE → WARNING → CRITICAL

</p>

<br/>

<button

onClick={runDemo}

disabled={running}

>

{

running

?

"Simulation Running..."

:

"Run Full Demo"

}

</button>

</div>

);

}

export default DemoPanel;