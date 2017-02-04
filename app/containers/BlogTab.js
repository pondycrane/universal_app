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

class HomeTab extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      blogInd: 0, 
      blogOpen: false
    }
  }

  static contextTypes = {
    navigator : React.PropTypes.any
  };

  static propTypes = {
    dispatch : React.PropTypes.func,
    todos : React.PropTypes.object
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type : 'todos/get'
    });
  }

  handleNewBtnPress() {
    this.context.navigator.push({
      index : 1,
      title : 'New Todo'
    });
  }

  handleDeleteTodo(todo) {
    const { dispatch } = this.props;
    dispatch({
      type : 'todos/delete',
      todo
    });
  }

  handleBlogOpen( blogInd ) {
    this.setState( {
      blogInd, 
      blogOpen: true
    } )
  }

  handleBlogBack() {
    this.setState( {
      blogOpen: false
    } )
  }

  render() {
   var blog_data = [
    {
      title: 'This is My First Project', 
      img: 'http://combiboilersleeds.com/images/react/react-0.jpg', 
      date: '2017-02-03', 
      data: [
        {
          dType: 'p', 
          data: 'First time trying. I have to admit it is kind of funny.'
        }
      ]
    }, 
    {
      title: 'How I Built This Site', 
      img: 'https://www.usb-antivirus.com/wp-content/uploads/2014/11/tutorial-windwos-10-2-320x202.png', 
      date: '2017-02-04', 
      data: [
        {
          dType: 'p', 
          data: 'Thanks to the open-source community, I can access a lot of knowledge to make this possible. Usually, I would do this in ta coffee shop in the middle of the city. This is particularly dificult because each time I stay, my wallet will become that much a little bit lighter. But this is the price you pay to make fron-end programming great again! Particularly, it gaves me a chance to meet other front-end developers in the coffee shop. I guess that will make up for the time you wasted in this kind of environment. I hope this paragraph is long enough to see the boundary of this CardItem... '
        }
      ]
    }
  ]
   return (
      <Container theme={treehouseTheme}>
        <Content refreshControl={
          <RefreshControl
            refreshing={this.props.todos.isLoading}
            onRefresh={() => this.props.dispatch({type : 'todos/get'})}
          />}
          style={{backgroundColor:'#FFFFFF'}} 
        >
          {
            this.state.blogOpen ? 
            <Blog
              blog_data={ blog_data[ this.state.blogInd ] }
              handleBlogBack={ this.handleBlogBack.bind(this) }
            />
            :
            <Blogs 
              blog_data={ blog_data }
              handleBlogOpen={ this.handleBlogOpen.bind(this) }
            />
          }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  };
}

export default connect(mapStateToProps)(HomeTab);
