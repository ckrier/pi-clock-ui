const BASE_URL = `http://${process.env.REACT_APP_MACHINE_IP}:5000/sounds`;

export const stopSound = async () => {
  const response = await fetch(`${BASE_URL}/stop`, {
    method: 'PUT',
  });

  return response.status === 204;
};
