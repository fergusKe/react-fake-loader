import React, { Component } from 'react';

import FakeLoader from '../../components/FakeLoader/FakeLoader';

import './Home.scss';

class Home extends Component {
  state = {
    loading: true,
  }

  toggle = () => {
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <FakeLoader loading={loading} />
        <button
          type="button"
          className="btn-toggle mt-2 ml-2 btn btn-primary"
          onClick={this.toggle}
          >
            toggle
        </button>
      </div>
    );
  }
}

export default Home;
