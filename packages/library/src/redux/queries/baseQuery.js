import useApiRequest from '../../hooks/useApiRequest';

const baseQuery =
  () =>
  async ({ axiosInstance, url }) => {
    const { makeGetCall } = useApiRequest();
    try {
      const response = makeGetCall({
        axiosInstance,
        url,
      });
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export default baseQuery;