import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from "semantic-ui-react";

class SideBar extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  youveClicked = () => alert('aaa')

  render() {
    const { visible } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable style={{width: "100%", height: "400px"}}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home" onClick={this.youveClicked}>
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SideBar;
