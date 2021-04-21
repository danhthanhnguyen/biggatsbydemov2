import React from "react";
import { Link } from "gatsby"
import {
  Card, CardImg, CardBody,
} from 'reactstrap';
import { makeStyles } from "@material-ui/core";

const CardItem = ({img, href, title, date, description}) => {
  const classes = useStyles();

  return (
    <div>
      <Link to={href} itemProp="url" className={classes.card}>
        <Card>
          <CardImg className={classes.image} top src={img} alt="" />
          <CardBody>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <span itemProp="headline">{title}</span>
                </h2>
                <small>{date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

export default CardItem;

const useStyles = makeStyles((theme) => ({
  image: {
    height: 143,
    width: "inherit",
  },
  title: {
    fontWeight: "bold",
    fontSize: "16px"
  },
  card: {
    textDecoration: "none!important",
    color: "#000000!important"
  }
}));