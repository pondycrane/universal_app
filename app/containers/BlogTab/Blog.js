import React, { Component } from 'react'; 
import {
  Content, 
  Container, 
  Text, 
  Button, 
  Header, 
  Icon, 
  Title, 
  Card, 
  CardItem
} from 'native-base'; 
import {
  Image
} from 'react-native'; 
import {
  connect
} from 'react-redux'; 

class Blog extends Component {
  constructor( props ) {
    super( props ) 
  }

  static contextTypes = {
    navigator: React.PropTypes.any
  }

  handleBlogBack() {
    this.context.navigator.pop()
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Button
            onPress={ this.handleBlogBack.bind( this ) }
          >
            <Icon name='android-arrow-back' />
          </Button>
          <Title>
            { this.props.blog_data.title }
          </Title>
        </Header>
        <Content>
         
          <Card>
            <CardItem>
              <Image
                style={{ resizeMode: 'cover' }}
                source={ this.props.blog_data.img }
              />
            </CardItem>
            {
              this.props.blog_data.data.map( ( paragraph, pInd ) =>
                paragraph.dType == 'p' ? 
                <CardItem key={ pInd }>
                  <Text>{ paragraph.data }</Text>
                </CardItem>
                :
                null
              )
            }
          </Card>
        </Content>
      </Container>
    )
  }
}

Blog.propTypes = {
}

function mapStateToProps( store ) {
  return {
    blog_data: store.blogs.blogs[ store.blogs.blogInd ]
  }
}

export default connect( mapStateToProps )( Blog ); 
