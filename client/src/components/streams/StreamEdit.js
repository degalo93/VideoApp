import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
    return <div > StreamEdit </div>
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams };
}

export default connect(mapStateToProps) (StreamEdit);