import axios from 'axios';

axios.defaults.baseURL = 'api/';
import { UnauthorizedHandler } from '@/axios/unauthorized-handler';
import { UnprocessableEntityHandler } from '@/axios/unprocessable-entity-handler';
import { RetryHandler } from '@/axios/retry-handler';

axios.interceptors.response.use(
  response => response,
  UnauthorizedHandler.onRejected(),
);

axios.interceptors.response.use(
  response => response,
  UnprocessableEntityHandler.onRejected(),
);

axios.interceptors.response.use(
  response => response,
  RetryHandler.onRejected(),
);
