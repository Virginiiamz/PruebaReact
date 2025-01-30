import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

function CardNotas({ nota }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={nota.titulo} subheader={nota.fcreacion} />
        <CardMedia
          sx={{ height: 200 }}
          image={nota.urlimagen}
          title={nota.titulo}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {nota.texto}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/ejercicio3/${nota.idnota}`} style={{ color: "#4f4f4f" }}>
            <Button size="small">Editar nota</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default CardNotas;
