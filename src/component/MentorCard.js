import { Avatar, Card, Grid, Typography } from "@mui/material";
import React from "react";

const MentorCard = () => {

    const mentorData = [
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Shubham", university: "Cambridge University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Raj", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Aryan", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Shubham", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "John", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Roy", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Dan", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Shubham", university: "Chandigarh University" },
        { img: "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png", name: "Shubham", university: "Chandigarh University" }
    ]


    return (
        <Grid container spacing={2}> {/* Container for the grid */}
            {mentorData.map((val, index) => (
                <Grid item key={index} lg={3} md={4} sm={6} xs={12} style={{display:"flex", flexDirection:"column", alignItems:"center"}}> {/* Each card takes up a quarter of the row on larger screens */}
                    <Avatar
                        alt="Remy Sharp"
                        src={val.img}
                        sx={{ width: 56, height: 56 }}
                    />
                    <Typography variant="caption" display="block" gutterBottom>{val.name}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>{val.university}</Typography>

                </Grid>
            ))}
        </Grid>
    )
}

export default MentorCard