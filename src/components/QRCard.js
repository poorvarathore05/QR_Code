import Card from "react-bootstrap/Card";
import "./QRCard.css";
import QRImage from "../images/image-qr-code.png";

function QRCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={QRImage} />
        <Card.Body>
          <Card.Title>
            Improve your front-end skills by building projects
          </Card.Title>
          <Card.Text>
            Scan the QR code to visit Frontend Mentor and take your skills to
            the next level
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default QRCard;
