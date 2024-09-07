import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from './typography.jsx';
import { Grid } from '../../../../node_modules/@mui/material/index.js';

export function MediaCard({ title, description, image }) {
  return (
    <Card 
        sx={{ 
            width: 345, 
            border: "1px solid rgba(255, 255, 255, 0.1);",
            borderRadius: "16px", 
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)"
        }}
    >
        <CardMedia
            sx={{ height: 130 }}
            image={image}
            title=""
        />
        <CardContent sx={{padding: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography text={title} size="medium" />
                </Grid>
                <Grid item xs={12}>
                    <Typography text={description} size="tiny" color="secondary" />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}