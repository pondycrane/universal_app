import { handleActions } from 'redux-actions'; 

const blogs = handleActions( {
  //blogs/get
  ['blogs/get'](state) {
    return {...state, isLoading: true}; 
  }, 
  ['blogs/get/success'](state, action) {
    return {...state, isLoading: false, list: action.response};
  }, 
  ['blogs/get/failed'](state, action) {
    return {...state, isLoading: false, err: action.err}; 
  }, 
}, {
  blogs: [], 
  isLoading: false
}); 

export default blogs; 
