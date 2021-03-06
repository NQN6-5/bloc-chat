import React, { Component } from 'react';



class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

  render() {
    return (
      <div>
      <h1>Rooms</h1>
      {this.state.rooms.map(room => (
        <div className="room" key={RoomList}>
          {room.name}
        </div>
      ))}
    </div>
    )
  }
}

export default RoomList;
