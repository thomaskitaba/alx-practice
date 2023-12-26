import {Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import imgMonday from "../assets/img/pizza-2-rectangle.jpg";
import imgTuesday from "../assets/img/pizza-2-rectangle.jpg";
import imgWednesday from "../assets/img/pizza-2-rectangle.jpg";
import imgThursday from "../assets/img/pizza-2-rectangle.jpg";
import imgFriday from "../assets/img/pizza-2-rectangle.jpg";
import imgSaturday from "../assets/img/pizza-2-rectangle.jpg";
import imgSunday from "../assets/img/pizza-2-rectangle.jpg";
import colorSharp from "../assets/img/color-sharp.png"
export const Specials = () => {
  const Specials = [
    {
      day: "Monday",
      title: "Burger Mania",
      description: "Kickstart your week with our Burger Mania! Indulge in a culinary delight with 50% off on all our succulent burgers from 5 PM to 8 PM. Experience the perfect blend of premium quality ingredients crafted into mouthwatering burgers.",
      events: "50% off on all burgers from 5 PM to 8 PM",
      imgUrl: imgMonday
    },
    {
      day: "Tuesday",
      title: "Pizza Delight",
      description: "Tuesdays are now about Pizza Delight! Treat yourself to our special offer: Buy one large pizza and receive a small pizza absolutely free. Dive into a symphony of flavors with our handcrafted pizzas.",
      events: "Buy one large pizza, get a small pizza free",
      imgUrl: imgMonday
    },
    {
      day: "Wednesday",
      title: "Burger and Brews",
      description: "Elevate your midweek dining experience with our Burger and Brews combo every Wednesday! Savor the perfect harmony of a delectable burger meal along with a complimentary pint of premium craft beer.",
      events: "Burger meal with a free pint of craft beer",
      imgUrl: imgMonday
    },
    {
      day: "Thursday",
      title: "Pizza Party",
      description: "Join us for a Pizza Party every Thursday evening! Enjoy a 25% discount on our gourmet pizzas post 6 PM. Delight in the symphony of flavors carefully curated in our gourmet pizza selection.",
      events: "25% off on all gourmet pizzas after 6 PM",
      imgUrl: imgMonday
    },
    {
      day: "Friday",
      title: "Burger Bonanza",
      description: "Fridays are for our Burger Bonanza! Be the first to relish our weekly debut of innovative burger flavors. Immerse yourself in a burst of creativity and exquisite taste with our latest burger creations!",
      events: "New burger flavors introduced today!",
      imgUrl: imgMonday
    },
    {
      day: "Saturday",
      title: "Pizza Feast",
      description: "Saturdays are a Pizza Feast! Dive into an endless array of flavors with our all-you-can-eat pizza buffet priced at just $15 per person. Explore a variety of gourmet pizzas crafted to please every palate!",
      events: "All-you-can-eat pizza buffet for $15 per person",
      imgUrl: imgMonday
    },
    {
      day: "Sunday",
      title: "Burger and Shake",
      description: "Sundays are for the whole family with our Burger and Shake meal! Indulge in our family meal deal featuring two delectable burgers and two delightful milkshakes for only $20. Make Sundays memorable with our family-friendly offer!",
      events: "Two burgers and two milkshakes for $20",
      imgUrl: imgMonday
    },
  ];

  const [todaysDay, setTodaysDay] = useState("Monday");
  useEffect(() => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const currentDay = new Date();
    setTodaysDay(days[currentDay.getDay()])
  }, [todaysDay])

  return (
    <section className="specials">
      <Container>
        <Row>
          <Col>
          <h2>Checkout what is waiting for you</h2>
          <p>{Specials[0].day}</p>
          {/* defaultActiveKey will be replaced by CURRENT DAY*/}

          <Tab.Container id="specials-tabs" defaultActiveKey={todaysDay}>
            <Nav variant='pills' defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Monday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="second">Tuesday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Wednesday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Thursday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="fifth">Friday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="sixth">Saturday</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="seventh">Sunday</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="align-items-center">
                <h3>{Specials[0].description}</h3>
                </Row>
                <Row>
                <img src={Specials[0].imgUrl} alt= "Mondays Specials"/>
                </Row>
                <Row>
                  <Col Col XS={2} md={2}>
                    <div>
                      <p>Specials[0].description</p>
                    </div>
                    <div>
                      <p>{Specials[0].events}</p>
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}