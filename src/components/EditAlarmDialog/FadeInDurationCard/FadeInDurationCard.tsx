import React from "react";
import { Card, CardHeader, Select } from "@mui/material";

const minutes = [0, 5, 10, 15, 30, 45, 60];

interface FadeInDurationCardProps {
  fadeInDuration: number;
  onFadeInDurationChanged: (minutes: number) => void;
}

const FadeInDurationCard: React.FC<FadeInDurationCardProps> = ({
  fadeInDuration: fadeIn,
  onFadeInDurationChanged,
}) => {
  return (
    <Card>
      <CardHeader
        title="Fade In"
        action={
          <Select
            value={fadeIn}
            defaultValue={0}
            native={true}
            size="small"
            onChange={(e) => onFadeInDurationChanged(Number(e.target.value))}
          >
            {minutes.map((min) => (
              <option value={min}>
                {min == 0 ? "None" : `${min} minutes`}
              </option>
            ))}
          </Select>
        }
      />
    </Card>
  );
};

export default FadeInDurationCard;
