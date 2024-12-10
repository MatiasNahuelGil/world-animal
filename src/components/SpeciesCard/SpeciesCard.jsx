import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function SpeciesCard({name, description,image}) {
  return (
    <Card sx={{
       height : "550px",
       overflow : 'hidden'
    }}>
      <CardActionArea sx={{
        
        outline : 'none' 
      }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}

          sx={{
            width : '100%',
            height : '250px',
            objectFit : 'cover',
            margin : '0'
          }}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
