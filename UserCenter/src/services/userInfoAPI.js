import ServerHost from '../../config/server.config';
import request from '@/utils/request';

// 查询API
export default async function queryCurrent(params) {
  return request(`${ServerHost.GithubServer}/UserInfo/GetCurrent`, {
    method: 'POST',
  });
}