import Chief from '../assets/img/chief.png';
import {useState} from 'react';
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap';
export const Connect = () => {
const formInitialsDetail = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  message: ''
}
const [form, setForm] = useState(formInitialsDetail);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});

const onFormUpdate = (formField, value) => {
  setForm({
    ...formField,
    [formField]: value
  })
}
const handelFormSubmit = async (e) => {
  e.preventDefault();
  setButtonText('Sending...');

  let response = await fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(form),
  });
  setButtonText('Send');
  setForm(formInitialsDetail);
  let result = await response.json();
  if (result.code === 200) {
    setStatus({success: true, message: 'Message sent successfully'});
  } else {
    setStatus({success: false, message: 'Something went wrong, please try again later.'});
  }
}


return (
  <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img src={Chief} alt="Contact image Chief standing" />
        </Col>
        <Col>
          <h1>Let's Connect</h1>
          <form onSubmit={handelFormSubmit}>
            <Row>
              <Col className="px-1">
                <input type="text" placeholder="First Name" name="fname" value={form.fname} onChange={ (e) => onFormUpdate('fname', e.target.value)} />
              </Col>
              <Col className="px-1">
                <input type="text" placeholder="Last Name" name="lname" value={form.lname} onChange={ (e) => onFormUpdate('lname', e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col className="px-1">
                <input type="email" placeholder="Email" name="email" value={form.email} onChange={ (e) => onFormUpdate('email', e.target.value)} />
                <textarea placeholder="Message" name="messge" value={form.message} onChange={ (e) => onFormUpdate('message', e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={4} className="px-1">
                <button type="submit">{buttonText}</button>
              </Col>
              {
                <Col className="px-1">
                  status.message &&
                    <p className={status.success === true ? "sucess" : "danger"}></p>
                </Col>
              }
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  </section>
)
}