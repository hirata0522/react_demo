import { Avatar, IconButton, Tooltip, Box } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React from 'react';

function Icon(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-block", marginRight: "10px" }}>
      <Tooltip title={props.name} >  
        <IconButton>
          <Avatar sx={{ bgcolor: deepOrange[500], position: "absolute" }} variant="square">
            {props.name.substring(0, 1)}
          </Avatar>
        </IconButton>
      </Tooltip>
      {/* 学内・学外判定 */}
      <Box
        sx={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          border: "0.1px solid white",
          position: "absolute",
          bottom: -15, // アイコンの下に配置
          right: -20, // アイコンの右端に配置
          backgroundColor: props.isAdmin ? "green" : "red",
        }}
      />
    </Box>
  );
}

export default Icon;
