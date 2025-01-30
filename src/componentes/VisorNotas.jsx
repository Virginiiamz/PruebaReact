import { Grid2, Typography } from "@mui/material";
import CardNotas from "./CardNotas";
import { useEffect, useState } from "react";

function VisorNotas() {
  const [datosNotas, setDatosNotas] = useState([]);

  useEffect(() => {
    async function getNotas() {
      let response = await fetch("http://localhost:3000/api/notas/");

      if (response.ok) {
        let data = await response.json();
        setDatosNotas(data.datos);
      }
    }

    getNotas();
  }, []); // Se ejecuta solo en el primer renderizado

  return (
    <>
      <Typography gutterBottom variant="h4" sx={{m: 2}}>
        Visor de notas
      </Typography>
      <Grid2 container spacing={6} sx={{m:2}}>
        {datosNotas.map((nota) => (
          <Grid2 key={nota.idnota} size={{ xs: 6, md: 4, lg: 2.4 }}>
            <CardNotas nota={nota} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default VisorNotas;
