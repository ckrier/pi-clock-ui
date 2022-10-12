import React from 'react';
import {
  Fab as MaterialFab,
  FabProps as MaterialFabProps,
} from '@mui/material';

const Fab: React.FC<MaterialFabProps> = (props) => {
  // 68 = BottomNavBarHeight + 12 padding
  return (
    <MaterialFab
      {...props}
      sx={{
        width: 64,
        height: 64,
        ...props.sx,
        position: 'fixed',
        bottom: 68,
        right: 12,
      }}
    />
  );
};

export default Fab;
