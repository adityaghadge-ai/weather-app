import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export default function InfoBox(){
    const INIT_URL="https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let info={
        city: "Delhi",
        feelsLike: 24.84,
        
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 47,
        weather: "Haze"
    }
    return (
        <div className="InfoBox">
            <h1>WeatherInfo- {info.weather}</h1>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
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
    );
}