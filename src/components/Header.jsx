import React from 'react';
import Typography from "@mui/material/Typography";
import shalomlogo from "../logo.jpg";

const Header = ({ titulo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1976d2', padding: '10px 20px' }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        style={{ marginRight: '10px', color: 'white' }}
      >
        {titulo}
      </Typography>
      <img
        src={shalomlogo}
        alt="Logo Shalom"
        className="logo"
        style={{ maxWidth: '150px', maxHeight: '150px' }}
      />
    </div>
  );
}

export default Header;
