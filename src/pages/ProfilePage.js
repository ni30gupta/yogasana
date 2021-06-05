import { Typography } from "@material-ui/core";
import "./ProfilePage.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button as BtnButton,
} from "react-bootstrap";
import { instructorDetails } from "../API/instructorDetails";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";

function ProfilePage(profile) {
  const [data] = instructorDetails.filter(
    (user) => user.id === profile.match.params.profileId
  );

  // Kriyas Card

  const useStyles = makeStyles({
    root: {
      // maxWidth: "30vw",
    },
  });

  function ImgMediaCard(datas) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={datas.photo}
            title={datas.kriya}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {datas.kriya}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Practicing these yoga postures is best for back pain.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }

  // console.log(data);
  return (
    <div>
      <Image
        fluid
        alt="big"
        style={{
          padding: "0px",
          margin: "0px",
          width: "100vw",
          height: "80vh",
        }}
        src={data.wallPhoto}
      />
      <h1 className="heading"> {data.name} </h1>
      <div className="socialIcon">
        <AiOutlineInstagram size="1.5em" />
        <FiFacebook size="1.5em" />
        <FiTwitter size="1.5em" />
      </div>
      <Row className="container ">
        <Col lg={5} className="profileSnap">
          <Image
            className="mb-4 profilePhoto"
            roundedCircle
            src={data.profilePhoto}
          ></Image>
          <div className="profileNexperience ">
            <Typography className="mb-2" variant="h4">
              Expert : {data.expertIn}
            </Typography>
            <Typography variant="h6">
              Experience : {data.experience} Years so far
            </Typography>

            <a href="#classes">
              <BtnButton className="mt-4 " size="lg">
                Go to Booking{" "}
              </BtnButton>
            </a>

            {/* <Link to='/booking'>
            <BtnButton
              className="mt-4 "
              size="lg"
              style={{ padding: "0.5rem 5rem" }}
            >
              
              </BtnButton>Book Slot</Link> */}
          </div>
        </Col>
        <Col col lg={7}>
          <Typography
            align="right"
            className="longDesc"
            style={{
              lineSpacing: "2px",
              lineHeight: "2px",
              letterSpacing: "1px",
              fontSize: "1.2rem",
              marginLeft: "4rem",
            }}
            variant="p"
          >
            {data.longDescription}
          </Typography>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="d-flex justify-content-around">
          <ul className="mt-5">
            <h3>Kriyas</h3>
            {data.kriyas.map((kriya) => {
              return <li style={{ fontSize: "1rem" }}>{kriya}</li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row className="mt-5 kriyas">
        <Col lg={4} xs={12}>
          <ImgMediaCard kriya={data.kriyas[0]} photo={data.kriyasPhoto[0]} />
        </Col>
        <Col lg={4} xs={12}>
          <ImgMediaCard kriya={data.kriyas[1]} photo={data.kriyasPhoto[1]} />
        </Col>
        <Col lg={4} xs={12}>
          <ImgMediaCard kriya={data.kriyas[2]} photo={data.kriyasPhoto[2]} />
        </Col>
      </Row>

      <Container fluid className="video">
        <Row className="d-flex justify-content-between">
          <Col lg={7} xs={12}>
            <iframe
              width="100%"
              height="415"
              src={data.videos[0]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col lg={4} xs={11} className="d-flex align-items-center">
            <Typography variant="h4" style={{ textAlign: "justify" }}>
              Our yoga live session with clean video and audio will make you
              joyfulland stress less.
            </Typography>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-between bottomVideo"
          style={{ marginTop: "4rem" }}
        >
          <Col lg={4} xs={11} className="d-flex align-items-center">
            <Typography variant="h4" style={{ textAlign: "justify" }}>
              You can take Entire month complete course as well and save more
              learn more.
            </Typography>
          </Col>
          <Col lg={7} xs={12} style={{ padding: "0px" }}>
            <iframe
              width="100%"
              height="415"
              src={data.videos[1]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="pricing">
        <Typography variant="h2" align="center">
          Live Session (Monday - Sunday){" "}
        </Typography>
        <Row className="justify-content-around mt-5">
          <Col lg={5} className="mt-4 ">
            <Typography align="center" variant="h4">
              Joint Session
            </Typography>
            <Typography variant="h6">
              {" "}
              Morning : {data.pricing.jointSession.morningTime}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Evening : {data.pricing.jointSession.eveningTime}{" "}
            </Typography>
            <hr />
            <Typography align="center" variant="h4">
              Pricing
            </Typography>
            <Typography variant="h6">
              {" "}
              Per Session : {data.pricing.jointSession.pricePerPerson}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Per Week : {data.pricing.jointSession.pricePerWeek}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Package : {data.pricing.jointSession.otherPrice}{" "}
            </Typography>
            {/* <BtnButton className="mt-4 " size="lg" block>Book Now</BtnButton> */}
          </Col>
          <Col lg={5} className="mt-4">
            <Typography align="center" variant="h4">
              Individual Session{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Morning : {data.pricing.individualSession.morningTime}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Evening : {data.pricing.individualSession.eveningTime}{" "}
            </Typography>
            <hr />
            <Typography align="center" variant="h4">
              Pricing
            </Typography>
            <Typography variant="h6">
              {" "}
              Per Session : {data.pricing.individualSession.pricePerPerson}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Per Week : {data.pricing.individualSession.pricePerWeek}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              Package : {data.pricing.individualSession.otherPrice}{" "}
            </Typography>
            {/* <BtnButton className="mt-4" size="lg" block>Book Now</BtnButton> */}
          </Col>
        </Row>
        <div id="classes" className="d-flex justify-content-around my-4">
          {data.buttons.map((button) => {
            return (
              <Link to={"/booking"}>
                <BtnButton variant="outline-primary">{button}</BtnButton>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
