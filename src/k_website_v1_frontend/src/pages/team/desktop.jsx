import React from 'react';
import { Grid, Card, Typography, Avatar, Divider, Container } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

export const Team = () => {
    
  const { t } = useTranslation();
  const members = t('home.team.members');

  return (
    <Container>
      {/* Section Header */}
      <Typography variant="h2" align="center" color="white" fontFamily="Montserrat" gutterBottom>
        Meet the Team
      </Typography>
      <Typography variant="body1" align="center" color="#666" fontFamily="Inter" paragraph>
        Passionate experts and IC OGs building a platform that they will be excited to use.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Team Cards */}
      <Grid container spacing={4}>
        {members.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card 
                sx={{ 
                border: "1px solid rgba(255, 255, 255, 0.1);",
                borderRadius: "16px", 
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)",
                textAlign: 'center', p: 3 
                }}
            >
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" gutterBottom color="white">
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="#2E68FF">
                {member.role}
              </Typography>
              <Typography variant="body2" color="#666" paragraph>
                {member.description}
              </Typography>
                <Grid item container spacing={2} xs={12} alignItems="center" justifyContent="space-around">
                    <Grid item container xs={ member.github ? 4 : 6 } alignItems="center" justifyContent="right">
                        <a href={member.x} target="_blank" style={{ textDecoration: "none" }}>
                            <XIcon sx={{ color: "#fff", fontSize: "20px" }}/>
                        </a>
                    </Grid>
                    <Grid item container xs={ member.github ? 4 : 6 } alignItems="center" justifyContent={ member.github ? "center" : "left" }>
                        <a href={member.linkedin} target="_blank" style={{ textDecoration: "none" }}>
                            <LinkedIn sx={{ color: "#fff", fontSize: "20px" }}/>
                        </a>
                    </Grid>
                    {
                        member.github &&
                        <Grid item container xs={4} alignItems="center" justifyContent="left">
                            <a href={member.github} target="_blank" style={{ textDecoration: "none" }}>
                                <GitHubIcon sx={{ color: "#fff", fontSize: "20px" }}/>
                            </a>
                        </Grid>
                    }
                </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};