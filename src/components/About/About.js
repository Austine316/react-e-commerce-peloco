import React, { Component } from "react";
import classes from "./About.css";
import Title from "../Title/Title";
export default class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Title name="About Us" />
        {/* <a href="https://github.com/hemanshuEng/react-ecommerce"><h1>Github</h1></a> */}
        {/* <h2>Created by Hemanshu Khodiyar</h2> */}
        <span className={classes.About}>
          Peloco Wears ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam.
        </span>
      </div>
    );
  }
}
