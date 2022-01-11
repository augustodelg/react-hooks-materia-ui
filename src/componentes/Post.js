import Divider from "@mui/material/Divider";

export const Post = ({ title, body, id }) => {
  return (
    <div className="Post animate__animated animate__fadeInDown">
      <h2>{title.toUpperCase()}</h2>
      <Divider />
      <h4>{body}</h4>
      <Divider light />
      <h6>ID: {id}</h6>

      <style jsx>{`
        .Post {
          margin-bottom: 10px;
          padding: 25px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          background-color: rgb(252, 250, 250);
        }
        .Post h4 {
          font-family: "Hind Madurai", sans-serif;
          font-weight: 200;
        }
        .Post h6 {
          font-family: "Hind Madurai", sans-serif;
          font-weight: 200;
          text-align: end;
          margin-right: 2px;
        }
        .Post h1 {
          font-family: "Prompt", sans-serif;
        }
      `}</style>
    </div>
  );
};
