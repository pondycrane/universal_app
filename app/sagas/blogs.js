import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import apiCall from '../services/apiCall';

export function* getBlogs() {
  try {
    const response = yield call(apiCall, 'blogs', 'GET');
    yield put({
      type : 'blogs/get/success',
      response
    });
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    yield put({
      type : 'blogs/get/failed',
      err
    });
  }
}

export function* addBlog(action) {
  try {
    yield call(apiCall, 'blogs', 'POST', {
      todo : action.todo
    });
    yield put({
      type : 'blogs/add/success'
    });
    yield put({
      type : 'blogs/get'
    });
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    yield put({
      type : 'blogs/add/failed',
      err
    });
  }
}

export function* deleteBlog(action) {
  try {
    yield call(apiCall, `blogs/${action.todo.id}`, 'DELETE');
    yield put({
      type : 'blogs/delete/success'
    });
    yield put({
      type : 'blogs/get'
    });
  } catch (err) {
    //console.error(err);
    yield put({
      type : 'blogs/delete/failed',
      err
    });
  }
}

function* watchBlogsGet() {
  yield takeLatest('blogs/get', getBlogs);
}

function* watchBlogAdd() {
  yield takeLatest('blogs/add', addBlog);
}

function* watchBlogDelete() {
  yield takeLatest('blogs/delete', deleteBlog);
}

export default function* () {
  yield fork(watchBlogsGet);
  yield fork(watchBlogAdd);
  yield fork(watchBlogDelete);
}
