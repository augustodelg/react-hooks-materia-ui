import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

export const RedesCard = ({ image, text, link }) => {
  return (
    <div className="redes-card">
      <Paper
        className="paper animate__animated animate__fadeInLeft"
        elevation={2}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Image src={image} />
          </Grid>
          <Grid item xs={10}>
            <a href={link}>
              <h3>{text}</h3>
            </a>
          </Grid>
        </Grid>
      </Paper>
      <style jsx>{`
        .redes-card a {
          text-decoration: none;
          font-family: "Prompt", sans-serif;
          color: black;
        }

        .redes-card .paper {
          margin: 20px 0px 10px 0px;
          padding: 15px;
          width: 90%;
          border-radius: 12px !important;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
