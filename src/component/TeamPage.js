import React from "react";
import { Typography, Grid, Box } from '@mui/material';
import InstituteCard from "./InstituteCard";
import MentorCard from "./MentorCard";
import MentorAdvisor from "./MentorAdvisor";

const TeamPage = () => {

    return (
        <>
            <Box textAlign={"center"} marginBottom={2} marginTop={1}>
                <Typography variant="subtitle1">Learn from the scientist reasearch Learn from the scientist reasearch</Typography>
            </Box>
            <Box marginLeft={2} marginRight={2} marginBottom={2}>
                <InstituteCard />
            </Box>
            <Box container sx={{ bgcolor: '#FFF', height: '100%', }}>
                <Box textAlign={"center"}>
                    <Typography variant="h6">Meet you Mentor</Typography>
                </Box>
                <Box marginLeft={2} marginRight={2} marginBottom={2}>
                    <MentorCard />
                </Box>
            </Box>

            <Box textAlign={"center"}>
                <Typography variant="h6">Mentor & Advisor</Typography>
            </Box>
            <Box marginLeft={2} marginRight={2} marginBottom={2}>
                <MentorAdvisor />
            </Box>
        </>


    )
}

export default TeamPage;

