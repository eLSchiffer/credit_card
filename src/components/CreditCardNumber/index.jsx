import { useEffect, useRef } from "react";
import "./style.css";

export const CreditCardNumber = () => {
  const cardFiledOneRef = useRef();
  const cardFiledTwoRef = useRef();
  const cardFiledThreeRef = useRef();
  const cardFiledFourRef = useRef();

  const handleChange = () => {
    if (cardFiledFourRef.current.value.length === 4) {
      cardFiledFourRef.current.nextElementSibling.focus();
    } else if (cardFiledThreeRef.current.value.length === 4) {
      cardFiledThreeRef.current.nextElementSibling.focus();
    } else if (cardFiledTwoRef.current.value.length === 4) {
      cardFiledTwoRef.current.nextElementSibling.focus();
    } else if (cardFiledOneRef.current.value.length === 4) {
      cardFiledOneRef.current.nextElementSibling.focus();
    }
  };

  useEffect(() => {
    cardFiledOneRef.current.focus();
  }, []);

  return (
    <form className="card-number">
      <label>Card number:</label>
      <input
        type="text"
        name="cardFiledOne"
        ref={cardFiledOneRef}
        maxLength={4}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="cardFiledTwo"
        ref={cardFiledTwoRef}
        maxLength={4}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="cardFiledThree"
        ref={cardFiledThreeRef}
        maxLength={4}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="cardFiledFour"
        ref={cardFiledFourRef}
        maxLength={4}
        onChange={handleChange}
      ></input>
      <input type="submit" value="Submit Card Number" />
    </form>
  );
};
