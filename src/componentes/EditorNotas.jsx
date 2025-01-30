import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditorNotas() {
  const params = useParams();

  const [datos, setDatos] = useState({
    idnota: params.id,
    titulo: "",
    texto: "",
    urlimagen: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function getNotaById() {
      let response = await fetch(
        "http://localhost:3000/api/notas/" + datos.idnota
      );
      if (response.ok) {
        let data = await response.json();
        setDatos(data.datos);
      } else if (response.status === 404) {
        let data = await response.json();
        alert(data.mensaje);
        navigate("/"); // Volver a la página principal por ruta erronea
      }
    }

    getNotaById();
  }, []); // Se ejecuta solo en el primer renderizado

  const handleSubmit = async (e) => {
    // No hacemos submit
    e.preventDefault();

    // Enviamos los datos mediante fetch
    try {
      console.log("Vamos a hacer fetch");
      const response = await fetch(
        "http://localhost:3000/api/notas/" + datos.idnota,
        {
          method: "PUT", // "PATCH"
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos), // JSON.stringify({blocked: true})
        }
      );

      if (response.ok) {
        // 204 No content
        alert("Actualización correcta");
        navigate(-1); // Volver a la ruta anterior
      } else {
        // 404 Not Found plato no modificado o no encontrado
        const data = await response.json();
        alert(data.mensaje);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
    }
  };

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Typography gutterBottom variant="h4" sx={{ m: 2 }}>
        Editor de notas
      </Typography>
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack
            component="form"
            spacing={2}
            onSubmit={handleSubmit}
            sx={{ mx: 2 }}
          >
            <TextField
              id="filled-basic"
              label="Titulo"
              variant="filled"
              name="titulo"
              value={datos.titulo}
              onChange={handleChange}
            />
            <TextField
              id="filled-basic"
              label="Texto"
              variant="filled"
              name="texto"
              value={datos.texto}
              onChange={handleChange}
            />
            <TextField
              id="filled-basic"
              label="Url de la Imagen"
              variant="filled"
              name="urlimagen"
              value={datos.urlimagen}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Modificar
            </Button>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}

export default EditorNotas;
