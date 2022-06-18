const BASE_URL = 'http://192.168.86.234:5000/sounds';

export const stopSound = async () => {
  const response = await fetch(`${BASE_URL}/stop`, {
    method: 'PUT',
  });

  return response.status === 204;
};
