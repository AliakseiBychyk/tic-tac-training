import React, { Component } from 'react'
import {
  Container,
  Name,
  GameListHeader,
  GameList,
  GameRecord,
  Column,
  ColumnLabels
} from '../styled/Profile'

class Profile extends Component{
  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '04/10/2018',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '04/11/2018',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '04/12/2018',
          id: '0003'
        }
      ]
    }
  }

  get records() {
    return this.props.user.games.map((game, index) => {
      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won!': "Didn't win"}
          </Column> 
          <Column>
            "ROBOT"
          </Column>
          <Column>
            "No"
          </Column>
          <Column>
            {game.createdAt}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>{email}</Name>
        <GameList>
          <GameListHeader>My Games</GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>    
      </Container>
    )
  }  
}

export default Profile