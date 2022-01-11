import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
export const VerticalCard = ({ image, children }) => {
  return (
    <Paper
      w={10}
      className="vertical-card animate__animated animate__fadeInLeft"
      elevation={2}
    >
      <Grid container justifyContent="center" alignItems="stretch">
        <Grid item xs={12}>
          <Image aspectRatio={1.2} src={image} />
        </Grid>
        <Grid item xs={11}>
          <h3>{children}</h3>
        </Grid>
      </Grid>
      <style jsx>{`
        .vertical-card {
          margin: 20px 0px 10px 0px;
          padding: 15px;
          width: 90%;
          border-radius: 12px !important;
          text-align: center;
          font-family: "Prompt", sans-serif;
        }
        .vertical-card h3 {
          font-family: "Prompt", sans-serif;
          font-weight: 300;
          text-align: justify;
          padding: 15px;
        }
      `}</style>
    </Paper>
  );
};
