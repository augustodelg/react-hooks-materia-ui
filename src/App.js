import "./styles.css";
import { description, redes, technologies } from "./content";
import { usePosts } from "./hooks/usePosts";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { RedesCard } from "./componentes/RedesCard";
import { VerticalCard } from "./componentes/VerticalCard";
import { ImageCard } from "./componentes/ImageCard";

import { Post } from "./componentes/Post";
import { ComponentPaginator } from "./componentes/ComponentPaginator";

//TODO AGREGAR COMPONENTES PARA APLICAR TIPOGRAFIA
//TODO AGREGAR COMPONENTES PARA PAGINAR POSTS

export default function App() {
  const { posts } = usePosts();
  return (
    <div className="App">
      <Grid container className="root" spacing={2}>
        <Grid xs={0} md={1} item />
        <Grid item xs={12} md={3}>
          <Container>
            <Grid>
              <Grid item>
                <VerticalCard image={require("./images/hi.gif")}>
                  {description}
                </VerticalCard>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center" alignItems="center">
                  {technologies.map((technology) => (
                    <ImageCard {...technology} />
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                {redes.map((red) => (
                  <RedesCard {...red} />
                ))}
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid
          xs={12}
          md={7}
          item
          justifyContent="center"
          alignItems="flex-start"
        >
          <Container>
            <h1 className="titulo-post animate__animated animate__fadeIn ">
              POSTS:
            </h1>
            <ComponentPaginator
              components={posts}
              RenderComponent={Post}
              perPage={3}
            />
          </Container>
        </Grid>
        <Grid xs={0} md={1} item />
      </Grid>
      <style jsx>{`
        body {
          background-image: radial-gradient(#09f 1px, transparent 1px),
            radial-gradient(#09f 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          margin: 10px 90px 10px 80px;
        }
        @media (max-width: 670px) {
          body {
            margin: 0px;
          }
        }

        .App {
          font-family: "Prompt", sans-serif;
        }

        span {
          color: #09f;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
