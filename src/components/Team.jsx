import React from 'react';
import { Col, Row } from 'reactstrap';

const Team = (props) => {
  return (
    <Row style={{
      alignItems: 'center',
      marginBottom: 15,
      marginTop: 15,
    }}>
      <Col xs={4} style={{ textAlign: 'center' }}>
        <img
          style={{
            borderRadius: 5,
            height: 30,
            maxWidth: 40,
            objectFit: 'cover'
          }}
          src={props.team.flag} />
      </Col>

      <Col xs={8} style={{
        fontWeight: 500,
        textAlign: 'left',
      }}>
        {props.team.name}
      </Col>
    </Row>
  );
}

export default Team;