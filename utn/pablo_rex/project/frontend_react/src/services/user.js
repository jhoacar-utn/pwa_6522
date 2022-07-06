import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/user";


export const handleDashboard = async (token) => {
  try {

    const response = await axios.get(AUTH_URL + '/profile', { params: { token } });
    const profileData = response.data;

    const arrayprofile = (Object.entries(Object.values(profileData))[1]);

    if (!arrayprofile)
      return [];

    return arrayprofile.map((element, index) => {
      return {
        name: element.name,
        image: element.image,
        avatar: element.avatar,
        email: element.email
      }
    })

  } catch (error) {
    console.log(error);
    return [];
  }
}

export const handleAvatar = async () => {
  try {

    const response = await axios.get(AUTH_URL + '/avatar');
    const avatarData = response.data;

    const avatar = Object.entries(avatarData)[1][1];

    if (!avatar)
      return [];

    return avatar.map((element, index) => {
      return {
        avatar: element.avatar
      }
    })

  } catch (error) {
    console.log(error);
    return [];
  }
}

