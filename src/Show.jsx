import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Show({weather}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/736x/d9/d2/82/d9d282bfd1842ef06e706a12679e7e49.jpg"
        title="weatherIcon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h5>{weather.name}</h5>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                <p>Latitude: {weather.lat}</p>
                <p>Longitude: {weather.lon}</p>
                <p>Local Time: {weather.localtime}</p>
                <p>Temperature: {weather.temp}°C</p>
                <p>Real Feel: {weather.realfeel}°C</p>
                <p>Condition: {weather.condition}</p>
                <p>Wind Speed: {weather.windspeed} kph</p>
                <p>Cloud: {weather.cloud}%</p>
                <p>Humidity: {weather.humidity}%</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}
