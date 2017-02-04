import React from 'react'; 
import {
  Card, 
  Content, 
  CardItem, 
  Text, 
  Thumbnail, 
  Button, 
  ListItem
} from 'native-base'; 
import {
  Image
} from 'react-native'; 

const Blogs = ( props ) => {
  return (
    <Content>
    {
      props.blog_data.map( ( blog, bInd ) =>
        <Card 
          key={ bInd } 
          style={{ flex: 0 }}
        >
          <ListItem
            onPress={ () => props.handleBlogOpen( bInd ) }
          >
            <Thumbnail source={ require( '../../assets/github.png' ) } />
            <Text>{ blog.title }</Text>
            <Text note>{ blog.date }</Text>
          </ListItem>

          <CardItem cardBody>
            <Image style={{ resizeMode: 'cover' }} source={ blog.img } />
            <Text>{ blog.data[0].data.slice(0, 250) + '...' }</Text>
          </CardItem>

        </Card>
      )
    }
    </Content>
  ); 
}

Blogs.propTypes = {
  blog_data: React.PropTypes.array.isRequired
}

export default Blogs 
