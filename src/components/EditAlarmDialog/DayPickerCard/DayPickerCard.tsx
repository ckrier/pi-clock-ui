import React from 'react';
import {
  Card,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
  CardHeader,
  Switch,
  Collapse,
} from '@mui/material';
import { DayOfWeek } from '../../../types/alarmConfiguration';

interface DayPickerCardProps {
  isScheduleEnabled: boolean;
  onScheduleChanged: (schedule: DayOfWeek[]) => void;
  onScheduleToggled: (isEnabled: boolean) => void;
  schedule: DayOfWeek[];
}

const DayPickerCard: React.FC<DayPickerCardProps> = ({
  isScheduleEnabled,
  onScheduleChanged,
  onScheduleToggled,
  schedule,
}) => {
  console.log(isScheduleEnabled);
  return (
    <Card>
      <CardHeader
        title="Schedule"
        action={
          <Switch
            checked={isScheduleEnabled}
            onChange={(_, toggle) => onScheduleToggled(toggle)}
          />
        }
      />
      <Collapse in={isScheduleEnabled} timeout="auto" unmountOnExit>
        <CardContent>
          <ToggleButtonGroup
            color="primary"
            fullWidth
            value={schedule}
            onChange={(_, v) => onScheduleChanged(v)}
          >
            <ToggleButton value="Monday">M</ToggleButton>
            <ToggleButton value="Tuesday">T</ToggleButton>
            <ToggleButton value="Wednesday">W</ToggleButton>
            <ToggleButton value="Thursday">T</ToggleButton>
            <ToggleButton value="Friday">F</ToggleButton>
            <ToggleButton value="Saturday">S</ToggleButton>
            <ToggleButton value="Sunday">S</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DayPickerCard;
