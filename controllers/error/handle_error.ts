import { NextApiResponse } from 'next';
import CustomServerError from './custom_server_error';

const handleError = (err: unknown, res: NextApiResponse) => {
  let unKnownErr = err;
  if (err instanceof CustomServerError === false) {
    unKnownErr = new CustomServerError({ statusCode: 499, message: 'unknown error' });
  }

  const customError = unKnownErr as CustomServerError;
  res
    .status(customError.statusCode)
    .setHeader('location', customError.location ?? '')
    .send(customError.serializeErrors()); //에러 응답에 body를 전달
};

export default handleError;
