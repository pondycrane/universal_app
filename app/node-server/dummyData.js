import Blog from './models/blog'; 

export default function() {
  Blog.remove( {}, ( err ) => !err ? console.log( 'success' ) : console.log( err ) ); 
  Blog.count().exec(( err, count ) => {
    console.log( 'Counting = ', count ); 
    if ( count > 0 ) {
      return;
    } else {
      var blogs = [
	{
          index: 'blog_this-is-my-first-project', 
	  title: 'This is My First Project',
	  img: 'http://combiboilersleeds.com/images/react/react-0.jpg',
	  data: [
	    {
	      dType: 'p',
	      data: 'First time trying. I have to admit it is kind of funny.'
	    }
	  ]
	},
	{
          index: 'blog_how-i-built-this-site', 
	  title: 'How I Built This Site',
	  img: 'https://www.usb-antivirus.com/wp-content/uploads/2014/11/tutorial-windwos-10-2-320x202.png',
	  data: [
	    {
	      dType: 'p',
	      data: 'Thanks to the open-source community, I can access a lot of knowledge to make this possible. Usually, I would do this in ta coffee shop in the middle of the city. This is particularly dificult because each time I stay, my wallet will become that much a little bit lighter. But this is the price you pay to make fron-end programming great again! Particularly, it gaves me a chance to meet other front-end developers in the coffee shop. I guess that will make up for the time you wasted in this kind of environment. I hope this paragraph is long enough to see the boundary of this CardItem... '
	    }
	  ]
	}
      ] 
      
      Blog.create( blogs, ( error ) => {
        if ( !error ) {
          console.log( 'creating dummy data error' ); 
        }
      }); 
    }
  })
}


