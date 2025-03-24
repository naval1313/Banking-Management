import React from 'react'
import Card from "react-bootstrap/Card";
import Footer from '../COMPONENTS/Footer';

const MyAccount = () => {
let name = localStorage.getItem("name");
 let email = localStorage.getItem("email");
  let id = localStorage.getItem("id");
  let accType = localStorage.getItem("acctype")

  return (
    <>
      <Card id="accCard" style={{ width: "38rem", color: "black" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              paddingBottom: "20px",
            }}
          >
            ACCOUNT HOLDER DETAIL'S
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "20px" }}
          >
            Acc Holder Name : {name}
          </Card.Subtitle>

          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "20px" }}
          >
            Acc Holder id : {id}
          </Card.Subtitle>

          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "20px" }}
          >
            Acc Holder Email : {email}
          </Card.Subtitle>

          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "20px" }}
          >
            Account Type : {accType}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <br /> 
      {/* <Footer /> */}
    </>
  );
}

export default MyAccount
