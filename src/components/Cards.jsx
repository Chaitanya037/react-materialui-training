import { Button, Typography } from "@mui/material";

const Cards = ({ ...props }) => {
  const { heading, body, buttonText, size } = props;
  const classSuffix = `card-${size}`;

  return (
    <>
      <div className={`card ${classSuffix}`}>
        <Typography variant="h2" component="h2">
          {heading}
        </Typography>

        <div className="card-body">
          <Typography variant="body1">{body}</Typography>
        </div>
        <div className="card-footer">
          <Button variant="contained" size={size}>
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

Cards.defaultProps = {
  size: "default",
};

export default Cards;
