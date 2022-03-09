import {
  ButtonBase,
  Card,
  CardContent,
  Stack,
  Switch,
  Typography,
} from '@mui/material';

interface AlarmCardProps {
  alarmTime: string;
  isToggled: boolean;
  onClick: () => void;
  onToggle: (isToggled: boolean) => void;
}

const AlarmCard: React.FC<AlarmCardProps> = ({
  alarmTime,
  isToggled,
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
            <Typography variant="h4">{alarmTime}</Typography>
            <Switch
              defaultChecked
              //checked={isToggled}
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
