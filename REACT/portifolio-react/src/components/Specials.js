import {Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import imgMonday from "../assets/img/cheeseburger-1.jpg";
import imgTuesday from "../assets/img/pizza-3-rectangle.jpg";
import imgWednesday from "../assets/img/pizza-2-rectangle.jpg";
import imgThursday from "../assets/img/pizza-2-rectangle.jpg";
import imgFriday from "../assets/img/pizza-2-rectangle.jpg";
import imgSaturday from "../assets/img/pizza-2-rectangle.jpg";
import imgSunday from "../assets/img/pizza-2-rectangle.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Specials = () => {
  const Specials = [
    {
      order: "first",
      day: "Monday",
      title: "Burger Mania",
      description: "Kickstart your week with our Burger Mania! Indulge in a culinary delight with 50% off on all our succulent burgers from 5 PM to 8 PM. Experience the perfect blend of premium quality ingredients crafted into mouthwatering burgers.",
      events: "50% off on all burgers from 5 PM to 8 PM",
      imgUrl: imgMonday
    },
    {
      order: "second",
      day: "Tuesday",
      title: "Pizza Delight",
      description: "Tuesdays are now about Pizza Delight! Treat yourself to our special offer: Buy one large pizza and receive a small pizza absolutely free. Dive into a symphony of flavors with our handcrafted pizzas.",
      events: "Buy one large pizza, get a small pizza free",
      imgUrl: imgTuesday
    },
    {
      order: "third",
      day: "Wednesday",
      title: "Burger and Brews",
      description: "Elevate your midweek dining experience with our Burger and Brews combo every Wednesday! Savor the perfect harmony of a delectable burger meal along with a complimentary pint of premium craft beer.",
      events: "Burger meal with a free pint of craft beer",
      imgUrl: imgMonday
    },
    {
      order: "fourth",
      day: "Wednesday",
      title: "Burger Bonanza",
      description: "Fridays are for our Burger Bonanza! Be the first to relish our weekly debut of innovative burger flavors. Immerse yourself in a burst of creativity and exquisite taste with our latest burger creations!",
      events: "New burger flavors introduced today!",
      imgUrl: imgMonday
    },
    {
      order: "fifth",
      day: "Friday",
      title: "Burger Bonanza",
      description: "Fridays are for our Burger Bonanza! Be the first to relish our weekly debut of innovative burger flavors. Immerse yourself in a burst of creativity and exquisite taste with our latest burger creations!",
      events: "New burger flavors introduced today!",
      imgUrl: imgMonday
    },
    {
      order: "sixth",
      day: "Saturday",
      title: "Pizza Feast",
      description: "Saturdays are a Pizza Feast! Dive into an endless array of flavors with our all-you-can-eat pizza buffet priced at just $15 per person. Explore a variety of gourmet pizzas crafted to please every palate!",
      events: "All-you-can-eat pizza buffet for $15 per person",
      imgUrl: imgMonday
    },
    {
      order: "seventh",
      day: "Sunday",
      title: "Burger and Shake",
      description: "Sundays are for the whole family with our Burger and Shake meal! Indulge in our family meal deal featuring two delectable burgers and two delightful milkshakes for only $20. Make Sundays memorable with our family-friendly offer!",
      events: "Two burgers and two milkshakes for $20",
      imgUrl: imgMonday
    },
  ];

  const [todaysDay, setTodaysDay] = useState("Monday");
  const [dayIndexOrder, setDayIndexOrder] = useState("second");
  useEffect(() => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayIndexName = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"];
    const currentDay = new Date();
    const dayIndex = currentDay.getDay();
    if (dayIndex === 0) {
      setTodaysDay(days[6])
      setDayIndexOrder(dayIndexName[6])
    }
    else {
    setTodaysDay(days[dayIndex - 1])
    setDayIndexOrder(dayIndexName[dayIndex - 1])

    }
  }, [])

  return (
    <section className="specials">
      <Container>
        <Row>
          <Col>
          <h2>Checkout what is waiting for you</h2>
          <h2> {dayIndexOrder}: day</h2>
          <h3>Today is:<span className="special-text">{todaysDay}</span></h3>

          {/* defaultActiveKey will be replaced by CURRENT DAY*/}
          <Tab.Container id="specials-tabs" defaultActiveKey={dayIndexOrder}>
  <Nav variant='pills'>
    {Specials.map((special, index) => (
      <Nav.Item key={index}>
        <Nav.Link eventKey={special.order} active={dayIndexOrder === special.order}>
          {special.day}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
  <Tab.Content>
    {Specials.map((special, index) => (
      <Tab.Pane key={index} eventKey={special.order}>
        <Row className="align-items-center">
          <h3>{special.title}</h3>
        </Row>
        <Row>
          <img src={special.imgUrl} alt={`Special for ${special.day}`} />
        </Row>
        <Row>
          <Col>
            <div>
              <p>{special.description}</p>
            </div>
            <div>
              <h1 className="special-header">Events of the Day</h1>
              <p>{special.events}</p>
            </div>
          </Col>
        </Row>
      </Tab.Pane>
    ))}
  </Tab.Content>
</Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}
