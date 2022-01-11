import Image from "material-ui-image";
import Paper from "@material-ui/core/Paper";

export const ImageCard = ({ image, aspectRatio }) => {
  return (
    <Paper
      w={10}
      className="imagen-card animate__animated animate__fadeInLeft"
      elevation={2}
    >
      <Image aspectRatio={aspectRatio} src={image} />
      <style jsx>{`
        .imagen-card {
          margin: 20px 10px 10px 0px;
          padding: 15px;
          width: 15%;

          border-radius: 16px !important;
          align-items: center;
          justify-content: center;
          font-family: "Prompt", sans-serif;
        }
      `}</style>
    </Paper>
  );
};
