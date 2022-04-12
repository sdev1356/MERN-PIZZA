import pizzas from "../pizzadata";
import Pizza from '../components/Pizza'
function Homescreen() {
    return (
        <div className="row">
           
                {pizzas.map(pizza=>{
                    return <div className="col-md-4 p-3">
                    
                        <Pizza pizza={pizza}/>
                    </div>
                })}
            
        </div>
    )
}
export default Homescreen;