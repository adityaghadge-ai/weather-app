import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
const HOT_URL =
  "https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const COLD_URL =
  "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const RAIN_URL =
  "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
           
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp>15 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography  component={"span"}variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature: {info.temp}°C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Min Temp: {info.tempMin}°C</p>
          <p>Max Temp: {info.tempMax}°C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}