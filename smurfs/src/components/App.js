import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

import { fetchSmurf, ndSmurf } from '../actions/index';

import SmurfMaker from './SmurfMaker';

const App = props => {
  useEffect(() => {
    props.fetchSmurf();
  }, [])

  return (
    <div className="App">
      {props.loading && <p>loading...</p>}
      <div className = 'smurf'>
      {
        props.smurfs.map(smurf => {
          return(<div key = {smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}cm</p>
          </div>)
        })
      }
      </div>
      <SmurfMaker ndSmurf = {props.ndSmurf} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    loading: state.loading,
    error: state.error,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurf, ndSmurf })(App);
