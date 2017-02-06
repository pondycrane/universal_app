import { handleActions } from 'redux-actions'; 

const blogs = handleActions( {
  //blogs/get
  ['blogs/get'](state) {
    return {...state, isLoading: true}; 
  }, 
  ['blogs/get/success'](state, action) {
    return {...state, isLoading: false, blogs: action.response};
  }, 
  ['blogs/get/failed'](state, action) {
    return {...state, isLoading: false, err: action.err}; 
  }, 
  ['blogs/select'](state, action) {
    return {...state, blogInd: action.blogInd, blogOpen: true}; 
  }, 
  ['blogs/back'](state) {
    return {...state, blogOpen: false}
  }
}, {
  blogs: [], 
  isLoading: false, 
  blogInd: 0, 
  blogOpen: false
}); 

export default blogs; 
