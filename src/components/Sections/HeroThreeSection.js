import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/dish1.webp";
import dish2 from "../../assets/image/dish2.webp";
import dish3 from "../../assets/image/dish3.webp";
import dish4 from "../../assets/image/dish4.webp";
import dish5 from "../../assets/image/dish5.webp";
import dish6 from "../../assets/image/dish6.webp";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
    name: "Chicken fried rice",
    price: 150,
  },

  {
    id: "d2",
    src: dish2,
    name: "Chicken biryani",
    price: 180,
  },

  {
    id: "d3",
    src: dish3,
    name: "Porridge beans",
    price: 200,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Chicken soup",
    price: 50,
  },

  {
    id: "d5",
    src: dish5,
    name: "Egg Noodles",
    price: 45.00,
  },

  {
    id: "d6",
    src: dish6,
    name: "Poori with chenna masala",
    price: 35.00,
  },
];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
