import { useState } from "react";

import Header from "./Header";
import SensorPanel from "./SensorPanel";
import AlertCard from "./AlertCard";
import RiskMeter from "./RiskMeter";
import ImpactPanel from "./ImpactPanel";
import AiPanel from "./AiPanel";
import Timeline from "./Timeline";
import Heatmap from "./Heatmap";
import PlantLayout from "./PlantLayout";
import RecommendationPanel from "./RecommendationPanel";
import EmergencyPanel from "./EmergencyPanel";
import CompliancePanel from "./CompliancePanel";
import AnalyticsPanel from "./AnalyticsPanel";
import ReplayPanel from "./ReplayPanel";
import ArchitecturePanel from "./ArchitecturePanel";
import IncidentLog from "./IncidentLog";
import CommandCenter from "./CommandCenter";
import DemoPanel from "./DemoPanel";
import ExecutivePanel from "./ExecutivePanel";
import { analyzeRisk } from "../services/sensorService";
import EvidencePanel from "./EvidencePanel";
import RegulationPanel from "./RegulationPanel";
function Dashboard() {

const [loading,setLoading]=useState(false);

const [running,setRunning]=useState(false);

const [demo,setDemo]=useState(false);

const [sensor,setSensor]=useState({

zone:"Boiler-A",

gas:40,

pressure:40,

temperature:40,

workerCount:5

});

const [risk,setRisk]=useState({

score:0,

level:"SAFE",

action:"MONITOR"

});

const [ai,setAi]=useState(
"Waiting for industrial simulation..."
);

const [history,setHistory]=useState([]);

async function simulate(customSensor=null){

try{

setLoading(true);

const current=

customSensor

?

customSensor

:

sensor;

const payload={

zone:current.zone,

gas:Number(current.gas),

pressure:Number(
current.pressure
),

temperature:Number(
current.temperature
),

workerCount:Number(
current.workerCount
)

};

const result=

await analyzeRisk(
payload
);

setRisk(
result.risk
);

setAi(
result.ai
);

setHistory(

prev=>

[

{

time:
new Date()
.toLocaleTimeString(),

zone:
current.zone,

level:
result.risk.level,

action:
result.risk.action,

score:
result.risk.score

},

...prev

]

);

}

catch(error){

console.log(error);

setAi(
"Simulation failed"
);

}

finally{

setLoading(false);

}

}

async function runDemo(){

setRunning(true);

const scenarios=[

{

zone:"Boiler-A",

gas:20,

pressure:20,

temperature:30,

workerCount:2

},

{

zone:"Boiler-A",

gas:60,

pressure:55,

temperature:45,

workerCount:7

},

{

zone:"Boiler-A",

gas:95,

pressure:95,

temperature:75,

workerCount:15

}

];

for(

const s

of scenarios

){

setSensor(
s
);

await simulate(
s
);

await new Promise(

r=>

setTimeout(
r,
2500
)

);

}

setRunning(false);

}

return(

<div className="container">

<Header/>

<br/>

<CommandCenter

risk={risk}

history={history}

/>

<br/>

<button

onClick={()=>

setDemo(

!demo

)

}

>

{

demo

?

"Exit Presentation"

:

"Presentation Mode"

}

</button>

<br/>
<br/>

<div

style={{

transform:

demo

?

"scale(1.02)"

:

"scale(1)",

transition:
"0.4s"

}}

>

<div className="grid">

<DemoPanel

runDemo={runDemo}

running={running}

/>
<EvidencePanel

sensor={sensor}

risk={risk}

/>

<SensorPanel

sensor={sensor}

setSensor={setSensor}

simulate={simulate}

loading={loading}

/>

<AlertCard

level={risk.level}

action={risk.action}

zone={sensor.zone}

/>

<RiskMeter

score={risk.score}

/>

<AiPanel

text={ai}

/>

<Heatmap

risk={risk.score}

zone={sensor.zone}

/>

<PlantLayout

risk={risk.score}

zone={sensor.zone}

/>

<ReplayPanel

history={history}

/>
<ExecutivePanel

risk={risk}

history={history}

/>
<RecommendationPanel

level={risk.level}

/>

<EmergencyPanel

level={risk.level}

/>
<RegulationPanel

sensor={sensor}

risk={risk}

/>

<CompliancePanel

risk={risk}

sensor={sensor}

/>

<AnalyticsPanel

history={history}

risk={risk}

/>
<ImpactPanel

risk={risk}

history={history}

/>

<ArchitecturePanel/>

<IncidentLog

history={history}

/>

<Timeline/>

</div>

</div>

</div>

);

}

export default Dashboard;