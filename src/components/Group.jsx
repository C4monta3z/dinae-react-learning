import { Card, CardBody, Col } from 'reactstrap';
import React from 'react';

// Auxiliar components:
import Team from './Team';

const Group = (props) => {
  return (
    <Col xs={12} md={6} lg={3} style={{ marginBottom: 35 }}>
      <Card style={{ borderRadius: 25, position: 'relative', }}>
        <CardBody>
          {
            props.teams.map((team, i) => {
              return (
                <Team team={team} />
              );
            })
          }
        </CardBody>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          top: -10
        }}>
          <div style={{
            backgroundColor: 'red',
            borderRadius: 10,
            color: 'white',
            fontWeight: 800,
            textAlign: 'center',
            textTransform: 'uppercase',
            width: 100,
          }}>
            {props.title}
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default Group;