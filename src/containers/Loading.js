import React from 'react';
import { connect } from 'react-redux'
import img from '../loading_spinner.gif'

let Loading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)


export default Loading;


