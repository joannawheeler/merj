import React from 'react';
import { ChatUsers } from './chat-users'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'

const EventView = (props) => (
  <div>
    <ChatUsers />
    <EventDetails events={props.events}/>
    <ChatContainer />
    <ChatInput />
  </div>
);

const server = location.origin;
const socket = io(server);

class EventView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  
  receiveMessage(message) {
    this.setState({
      message: message
    })
  }

  render() {
    return (
      <div>
        <ChatUsers />
        <ChatContainer message={this.state.message}/>
        <EventDetails />
        <ChatInput 
        // socket={socket}
        receiveMessage={this.receiveMessage.bind(this)}
        />
      </div>
    );
  }
}
  


export { EventView }