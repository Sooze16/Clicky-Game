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
    }

    resetClick = () => {
        const newFriends = this.state.friends.map(friend => {

            friend.clicked = false;
            return friend
        })
        this.setState({
            friends: newFriends
        })
    }


    click = id => {

        const updatedFriends = this.state.friends.map(friend => {

            if (id === friend.id) {


                if (friend.clicked) {
                    this.setState({
                        score: 0
                    })
                    this.resetClick()

                } else {

                    if (this.state.score >= this.state.topScore) {
                        this.setState({
                            score: this.state.score + 1,
                            topScore: this.state.topScore + 1
                        })
                    } else {
                        this.setState({
                            score: this.state.score + 1

                        })
                    }
                    if (!friend.clicked) {
                        friend.clicked = true;
                    }



                }

            }


            return friend;

        });

        console.log(updatedFriends)

        this.setState({ friends: updatedFriends })

        const NewArray = this.state.friends.sort(() => Math.random() - 0.5)

        this.setState({ friends: NewArray })



    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
             <Wrapper>

            <Title 
            Title score = { this.state.score }
            topScore = { this.state.topScore } />  

            {
                this.state.friends.map(friend => (  
                    <FriendCard myfun = { this.click }
                    id = { friend.id }
                    key = { friend.id }
                    name = { friend.name }
                    image = { friend.image }
                    occupation = { friend.occupation }
                    location = { friend.location }
                    />
                ))
            } 
            
            </Wrapper>);
    }
}

export default App;