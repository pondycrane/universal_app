import React, { Component } from 'react';
import {
  Container,
  Content,
} from 'native-base';
import { Text, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import treehouseTheme from '../themes/treehouse';
import TodoList from '../components/TodoList';
import Blogs from '../components/BlogTab/Blogs'; 
import Blog from '../components/BlogTab/Blog'; 

class BlogTab extends Component {
  constructor( props ) {
    super( props )
  }

  static contextTypes = {
    navigator : React.PropTypes.any
  };

  static propTypes = {
    dispatch : React.PropTypes.func,
    blogs: React.PropTypes.object
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type : 'blogs/get'
    });
  }

  handleBlogOpen( blogInd ) {
    const { dispatch } = this.props; 
    dispatch({
      type: 'blogs/select', 
      blogInd
    }); 
  }

  handleBlogBack() {
    const { dispatch } = this.props; 
    dispatch({
      type: 'blogs/back'
    });
  }

  render() {
   return (
      <Container theme={treehouseTheme}>
        <Content refreshControl={
          <RefreshControl
            refreshing={this.props.blogs.isLoading}
            onRefresh={() => this.props.dispatch({type : 'blogs/get'})}
          />}
          style={{backgroundColor:'#FFFFFF'}} 
        >
          {
            this.props.blogs.blogOpen ? 
            <Blog
              blog_data={ this.props.blogs.blogs[ this.props.blogs.blogInd ] }
              handleBlogBack={ this.handleBlogBack.bind(this) }
            />
            :
            <Blogs 
              blog_data={ this.props.blogs.blogs }
              handleBlogOpen={ this.handleBlogOpen.bind(this) }
            />
          }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ blogs }) {
  return {
    blogs
  };
}

export default connect(mapStateToProps)(BlogTab);
