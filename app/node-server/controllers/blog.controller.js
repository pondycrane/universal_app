import Blog from '../models/blog';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */

export function getBlogs(req, res) {
  Blog.find().sort('-dateAdded').exec((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json( data );
  });
}
