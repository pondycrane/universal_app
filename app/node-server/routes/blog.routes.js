import { Router } from 'express';
import * as BlogController from '../controllers/blog.controller';
const router = new Router();

// Get all Posts
router.route('/blogs').get(BlogController.getBlogs);

export default router; 
