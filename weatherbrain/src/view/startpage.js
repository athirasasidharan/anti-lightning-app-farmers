import { WeatherTile } from "../components/weathertile";
import { Weathertileholder } from "../components/weathertile-holder";
import '../styling/pages/startpage.css'


export const Startpage = () => {
    
    return (
        <>
        <div>
            <div class="animation">
                <h1>Weather Brain</h1>
            </div>
            
            <h2>Predicting weather with state of the art Macheine Learning </h2>

        </div>

            <Weathertileholder />
            
            

        </>
    );
}
