import { Component } from "react";
import { Button, Text, View } from "react-native";

class LifeCycleComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ReactNative",
      count: 0
    }
    console.log("Constructor initialized");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props);
    return null;
  }
  componentDidMount() {
    console.log("Component mounted");
  }
  shouldComponentUpdate(nextProps, nextState) {

    console.log("shouldComponentUpdate", nextProps.count !== this.state.count, nextProps); 

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate : Before DOM is updated  ", prevProps, prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate : After DOM is updated", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", error, info);
  }
  render() {
    return <View 
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{this.state.name}</Text>
      <Text>{this.state.count}</Text>
      <Button 
      title="Increment" 
      onPress={() => this.setState({ count: this.state.count + 1 })} />
    </View>
  }
}

export default LifeCycleComponents;