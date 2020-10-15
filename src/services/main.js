import request from './axios';


export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    methods: 'GET',
    params: {
      limit,
      offset
    }
  })
}