import React from 'react';
import { Row } from 'reactstrap';
import Group from './components/Group';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      groups: [],
      teams: [],
    }
  }

  render() {
    return (
      <div style={{
        backgroundImage: 'url("assets/background.jpeg")',
        backgroundSize: 'contain',
        height: '100vh',
        padding: '5%',
        width: '100vw',
      }}>

        <Row>
          {
            this.state.groups.map((group, i) => {
              return (
                <Group title={group.name} teams={group.teams} />
              );
            })
          }
        </Row>
      </div>
    );
  }

  componentDidMount() {
    this.downloadTeams();
  }

  downloadTeams = () => {
    fetch('https://myfakeapi.com/api/football/teams', {
      method: 'GET'
    })
      .then(response => {
        response.json()
          .then(data => {
            this.setGroups(data.Teams);
          });
      });
  }

  setGroups = (teams) => {
    teams = teams.sort( () => .5 - Math.random() );

    let groups = [];
    let groupCounter = 1;
    for (let i = 0; i < teams.length; i = i + 4) {
      let myGroup = [];
      myGroup.push(teams[0 + i]);
      myGroup.push(teams[1 + i]);
      myGroup.push(teams[2 + i]);
      myGroup.push(teams[3 + i]);

      groups.push({
        name: 'Grupo ' + groupCounter,
        teams: myGroup,
      });

      groupCounter++;
    }

    this.setState({
      groups: groups,
      teams: teams
    });
  }

}

export default App;