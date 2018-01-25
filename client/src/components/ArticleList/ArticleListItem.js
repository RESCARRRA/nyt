import React from "react";
import { Container, Row, Col } from "../Grid";
// import SaveBtn from "../SaveBtn";
// ArticleListItem renders a bootstrap list item containing data from the article api call

export const ArticleListItem = props => (
  <li className="list-group-item" key={props._id}>
    <Container>
      <Row>       
        <Col size="xs-9 sm-10">
          <h2 className='headline'>{props.headline}</h2>
          <p className='snippet'>{props.snippet}</p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.web_url}>
            Go to article!   
          </a>
        </Col>
        <Col size="xs-3 sm-2">
        <button {...props} type="submit" className="btn btn-sm save-btn">
          Save
        </button>
        </Col>
      </Row>
    </Container>
  </li>
);
