function SensorPanel({

sensor,

setSensor,

simulate,

loading

}) {

function update(field,value){

setSensor({

...sensor,

[field]:value

});

}

return (

<div className="card">

<h2>

Sensor Controls

</h2>

<br />

<input

type="text"

placeholder="Zone"

value={sensor.zone}

onChange={(e)=>

update(

"zone",

e.target.value

)

}

/>

<br />
<br />

<label>

Gas: {sensor.gas}

</label>

<input

type="range"

min="0"

max="100"

value={sensor.gas}

onChange={(e)=>

update(

"gas",

e.target.value

)

}

/>

<br />
<br />

<label>

Pressure: {sensor.pressure}

</label>

<input

type="range"

min="0"

max="100"

value={sensor.pressure}

onChange={(e)=>

update(

"pressure",

e.target.value

)

}

/>

<br />
<br />

<label>

Temperature: {sensor.temperature}

</label>

<input

type="range"

min="0"

max="100"

value={sensor.temperature}

onChange={(e)=>

update(

"temperature",

e.target.value

)

}

/>

<br />
<br />

<label>

Workers: {sensor.workerCount}

</label>

<input

type="range"

min="0"

max="20"

value={sensor.workerCount}

onChange={(e)=>

update(

"workerCount",

e.target.value

)

}

/>

<br />
<br />

<button

onClick={simulate}

disabled={loading}

>

{

loading

?

"Analyzing..."

:

"Analyze Risk"

}

</button>

</div>

);

}

export default SensorPanel;