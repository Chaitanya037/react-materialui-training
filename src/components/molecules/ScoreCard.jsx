import "./Skills.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BarMeter from "../atoms/BarMeter";
import { Card, CardHeader, CardActions, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

const ScoreCard = () => {
  const cardInfo = [
    {
      scorevalue: 4.1,
      label: "Camera Footage",
      iconEnable: false,
      tooltip: null,
    },
    {
      scorevalue: 3,
      label: "Sensor Response",
      iconEnable: true,
      tooltip: null,
    },
    {
      scorevalue: 5,
      label: "Mobile App",
      iconEnable: false,
      tooltip: 'Our tooltip test',
    },
  ];
  return (
    <Box component={"section"} sx={{ px: "1rem" }}>
      <Typography
        variant="h4"
        component="h2"
        className="section-title"
        sx={{
          fontSize: "var(--h2-font-size) !important",
          fontWeight: "bold !important",
          margin: "0 0 var(--mb-6) 0",
        }}
      >
        Score Card
      </Typography>
      <Card>
        <CardHeader
          title={"Vivint Ratings Breakdown"}
          action={
            <Typography
              variant="h4"
              color="#FFF"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "0.25px",
              }}
            >
              4.7
            </Typography>
          }
          titleTypographyProps={{
            variant: "h4",
            color: "#FFF",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0.25px",
          }}
          sx={{ backgroundColor: "#064AB7" }}
        />
        <CardContent>
          {cardInfo.map((card, i) => (
            <BarMeter key={i} {...card} />
          ))}
        </CardContent>
        <CardActions sx={{p: 0, px: 2, pb: 2}}>
          <Button variant="outlined" color="error">Outlined</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ScoreCard;
