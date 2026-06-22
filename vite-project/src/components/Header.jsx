import { motion } from "framer-motion";

function Header(){

return(

<motion.div

initial={{
opacity:0,
y:-50
}}

animate={{
opacity:1,
y:0
}}

className="card"

>

<h1 className="title">

AI Industrial Safety
Command Center

</h1>

<div className="live">

● Live Monitoring

</div>

<p className="subtitle">

Predict • Prevent • Protect

</p>

</motion.div>

);

}

export default Header;