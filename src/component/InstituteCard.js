import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';

const InstituteCard = () => {
    const InstituteName = ["Cambridge University", "Harvard University", "University Of California", "ETH Zurich", "Max Planck", "University Of Edinberg", "John's Hopkins", "Midigon State", "University Of Illinois", "Humboldt University Berlin", "Harvard University", "University Of California"];

    return (
        <Grid container spacing={2}> {/* Container for the grid */}
            {InstituteName.map((title, index) => (
                <Grid item key={index} lg={3} md={4} sm={6} xs={12}> {/* Each card takes up a quarter of the row on larger screens */}
                    <Card sx={{ minWidth: 250, textAlign:'center' }}>
                        <CardContent>
                            {title}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default InstituteCard;
