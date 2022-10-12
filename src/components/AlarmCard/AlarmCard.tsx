import React, { MouseEventHandler } from 'react';
import {
  ButtonBase,
  Card,
  CardContent,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { formatTime, getAmPm } from '../../util/timeHelpers';

interface AlarmCardProps {
  hour: number;
  minute: number;
  enabled: boolean;
  onClick: MouseEventHandler;
  onToggle: (isToggled: boolean) => void;
}

const AlarmCard: React.FC<AlarmCardProps> = ({
  hour,
  minute,
  enabled,
  onClick,
  onToggle,
}) => {
  return (
    <ButtonBase onClick={onClick}>
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ ':last-child': { paddingBottom: '16px' } }}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h2">
              {formatTime(hour, minute)}
              <Typography variant="h4" component="span">
                {getAmPm(hour)}
              </Typography>
            </Typography>
            <Switch
              checked={enabled}
              onMouseDown={(e) => e.stopPropagation()} // stops ripple effect on ButtonBase
              onClick={(e) => {
                // prevents parent div from recieving switch clicks
                e.stopPropagation();
              }}
              onChange={(e) => {
                onToggle(e.target.checked);
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default AlarmCard;
