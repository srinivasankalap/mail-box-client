import Form from "react-bootstrap/Form";
import stylesheet from "./Authentication.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { BiSolidLockAlt } from "react-icons/bi";
import { useRef } from "react";
const Authentication = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enterdEmail = emailInputRef.current.value;
    const enterdPassword = passwordInputRef.current.value;
    const enterdConfirmPassword = confirmPasswordInputRef.current.value;
    if (!!enterdEmail && enterdPassword === enterdConfirmPassword) {
        try {
            const response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANmYbMvsaABkpxPc54L-7D-EMwqQgrKMU",
              {
                method: "POST",
                body: JSON.stringify({
                  email: enterdEmail,
                  password: enterdPassword,
                  returnSecureToken: true,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            if (!response.ok) {
              console.log("Error");
            }
      
            const data = await response.json();
            console.log(data);
            console.log("Success");
          } catch (error) {
            console.error("An error occurred:", error);
          }
  };
};
  return (
    <>
      <Form onSubmit={submitHandler} className={`${stylesheet["auth-root"]}`}>
        <Row>
          <Col>
            <h1 className={stylesheet.heading}>
              <BiSolidLockAlt className={stylesheet.lock} />
              Sign Up
            </h1>
          </Col>
          <Form.Group className={`${stylesheet["form-group"]}`}>
            <Form.Label className={stylesheet["form-label"]}>Email</Form.Label>
            <Form.Control
              className={`${stylesheet["form-controls"]}`}
              type="email"
              placeholder="Enter Email"
              ref={emailInputRef}
              required
            />
          </Form.Group>

          <Form.Group className={`${stylesheet["form-group"]}`}>
            <Form.Label className={stylesheet["form-label"]}>
              Password
            </Form.Label>
            <Form.Control
              className={`${stylesheet["form-controls"]} `}
              type="password"
              placeholder="Enter password"
              ref={passwordInputRef}
              required
            />
          </Form.Group>
          <Form.Group className={`${stylesheet["form-group"]}`}>
            <Form.Label className={stylesheet["form-label"]}>
              Confirm Password
            </Form.Label>
            <Form.Control
              className={`${stylesheet["form-controls"]}`}
              type="password"
              placeholder="Confirm password"
              ref={confirmPasswordInputRef}
              required
            />
          </Form.Group>

          <Form.Group className={`${stylesheet["form-group"]}`}>
            <Button type="submit" className={stylesheet.btn}>
              Sign Up
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default Authentication;
