import React, { Component } from 'react';
import Blog from '../containers/BlogTab/Blog';

class BlogScreen extends Component {

  static propTypes = {
    navigator : React.PropTypes.any
  }

  static childContextTypes = {
    navigator : React.PropTypes.any
  }

  getChildContext() {
    return {
      navigator : this.props.navigator
    };
  }

  render() {
    return (<Blog {...this.props} />);
  }
}

export default BlogScreen;
