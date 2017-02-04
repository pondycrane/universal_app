import React from 'react'; 
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

const Blog = ( props ) => {
  return (
    <Container>
      <Header>
        <Button
          onPress={ () => props.handleBlogBack() }
        >
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>
          { props.blog_data.title }
        </Title>
      </Header>
      <Content>
       
        <Card>
          <CardItem>
            <Image
              style={{ resizeMode: 'cover' }}
              source={ props.blog_data.img }
            />
          </CardItem>
          {
            props.blog_data.data.map( ( paragraph, pInd ) =>
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
  ); 
}

Blog.propTypes = {
}

export default Blog
