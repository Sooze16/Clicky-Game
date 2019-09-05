import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };

  clicked = id => {
 
      //verify is the card was clicked before
      // if yes  you need to rest (score,)
      // if not (update sore, update the top core if new score is better, shuffle)
      // update the state (setState) this will render 

    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.score}
      topScore={this.state.topScore}
        >

        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            myfun={this.clicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
