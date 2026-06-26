import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrainIcon from '@mui/icons-material/Grain';
import SunnyIcon from '@mui/icons-material/Sunny';
import"./InfoBox.css"

export default function InfoBox({info}){
   
const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const COLD_URL="https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    
    return(
        <div className="InfoBox">
                  <h1>Search weather app</h1>
                  <br />
                  <br/>
                 <h1>WeatherInfo-{info.weather}</h1>
                 <div className="cardContainer">
                  <Card sx={{ maxWidth: 345 }}>

         <CardMedia
          sx={{ height: 140 }}
           image={info.humidity >80 ?RAIN_URL: info.temp > 15?HOT_URL:COLD_URL}
          title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {
             info.humidity >80 ?<AcUnitIcon/>: info.temp > 15?<GrainIcon/>:<SunnyIcon/>}
            </Typography>
          <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }} >
            <p>Temperature ={info.temp}&deg;c</p>
           <p>Humidity ={info.humidity}</p>
           <p>min Temp={info.tempMin}&deg;c</p>
           <p>max Temp={info.tempMax}&deg;c</p>
           <p>The weather can be described as {info.weather} feels like {info.feelsLike}&deg;c</p>

         </Typography>
         </CardContent>
         </Card>
       </div>
    </div>
            
            
    )

};