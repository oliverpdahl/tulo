import React from 'react';
import { connect } from 'react-redux'
import { fetchPaths } from '../actions/fetchPaths'
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  handleOnClick() {
    this.props.fetchPaths()
  }
 
  render() {
    const paths = this.props.paths.map(path => <li key={path.id}>{path.title}</li>);
 
    return(
      <div>
        <button onClick={(event) = this.handleOnClick(event)} />
        {paths}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return { fetchPaths: () => dispatch(fetchPaths()) }
}
 
function mapStateToProps(state){
  return {paths: state.paths}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)