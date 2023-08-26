import { Avatar, Grid, Typography, Button } from "@mui/material";
import React from "react";

const MentorAdvisor = () => {

    const mentorData = [
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Dr. Omkar, Principle Project", university: "IIT Madras" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Akhil Tripathi", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Vivek Dewdi", university: "Chandigarh University" },
    ];

    return (
        <Grid container spacing={2}>
            {mentorData.map((val, index) => (
                <Grid item key={index} lg={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={val.img}
                        sx={{ width: 56, height: 56 }}
                    />
                    <Typography variant="caption" display="block" gutterBottom>{val.name}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>{val.university}</Typography>
                    {/* Button and paragraph */}
                   {index!==0 && <Button variant="contained" color="primary">
                        Message Him Now
                    </Button>}
                    {/* <Typography variant="body2" align="center" style={{ marginTop: "10px" }}>
                    </Typography> */}
                </Grid>
            ))}
        </Grid>
    );
};

export default MentorAdvisor;
