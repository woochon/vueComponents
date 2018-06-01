import request from './axiosRequest'; // eslint-disable-line

const urls = {
  ratingContent: '../../../static/ratingContent.json'
};

/* 评价页面 */
export const ratingContent = params => request(urls.ratingContent, 'get', params);
