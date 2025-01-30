import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { Link } from "react-router";

function Menu() {
  return (
    <MDBListGroup style={{ minWidthL: "22rem" }} light>
      <Link to="/ejercicio2" style={{ color: "#4f4f4f" }}>
        <MDBListGroupItem>Visor de notas</MDBListGroupItem>
      </Link>
      <Link to="/ejercicio3/1" style={{ color: "#4f4f4f" }}>
        <MDBListGroupItem>Editor de notas</MDBListGroupItem>
      </Link>
    </MDBListGroup>
  );
}

export default Menu;
