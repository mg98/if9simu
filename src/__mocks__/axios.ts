export default {
  get: jest.fn( async (url, config) => {
    // tslint:disable-next-line:no-console
    console.log(`Using default mock for GET on ${url}`);
    return { data: {}, status: 201 };
  }),
  post: jest.fn( async (url, config) => {
    // tslint:disable-next-line:no-console
    console.log(`Using default mock for POST on ${url}`);
    return { data: {} };
  }),
};
