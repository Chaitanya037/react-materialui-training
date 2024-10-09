import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { Box, Stack } from "@mui/material";

const BarMeter = ({...props}) => {
  const { scorevalue, iconEnable, label, tooltip } = props;

  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "space-between", mb: 1 }}>
        <Box component="section" sx={{ display: "flex", alignItems: "center" }}>
          {iconEnable && <PaymentsOutlinedIcon sx={{ fontSize: "1rem" }} />}
          <Typography
            color="text.primary"
            fontWeight={400}
            fontSize={'16px'}
            lineHeight={'24px'}
            letterSpacing={'0.15px'}
            variant="body1"
            sx={{ paddingLeft: "0.25rem" }}
          >
            {label}
          </Typography>
        </Box>
        <Box component="section" sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            color="text.primary"
            fontWeight={400}
            fontSize={'16px'}
            lineHeight={'24px'}
            letterSpacing={'0.15px'}
            variant="body1"
            sx={{ paddingRight: "0.25rem" }}
          >
            {scorevalue}
          </Typography>
          {tooltip && (
            <Tooltip title={tooltip}>
              <InfoOutlinedIcon sx={{ fontSize: "0.75rem" }} />
            </Tooltip>
          )}
        </Box>
      </Stack>
      <LinearProgress variant="determinate" value={(scorevalue / 5) * 100} sx={{mb: 1}}/>
    </>
  );
};

BarMeter.defaultProps = {
  scorevalue: "4.1",
  iconEnable: true,
  label: "Compact Storage",
  tooltip: "Our Simple Tool Tip",
};

BarMeter.propTypes = {
  scorevalue: PropTypes.number,
  iconEnable: PropTypes.bool,
  label: PropTypes.string,
  tooltip: PropTypes.string,
};

export default BarMeter;
