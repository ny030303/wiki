import axios from "axios";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};


export const getLoginInfo = () => {
  let data = localStorage.getItem('loginUser');
  return (data) ? JSON.parse(data) : null;
};

// export const deleteUser = (userid, callback) => {
//   axios.get(`/php/deleteUser.php?id=${userid}`, config).then(res => {
//     // console.log('deleteUser:', res.data.result);
//     if (callback) callback(res.data);
//   });
// };

export const login = (uid, pwd, callback) => {
  fetch(`/php/login.php?id=${uid}&pwd=${pwd}`).then(data => data.json()).then(res => {
    // console.log('getUser:', res);
    if (res.result) {
      // localStorage.setItem('userInfo', JSON.stringify(res.user));
    }
    if (callback) callback(res);
  });
};

// export const getUserInfo = (uid, callback) => {
//   axios.get(`/php/getUser.php?userid=${uid}`, config).then(res => {
//     if (callback) callback(res.data);
//   })
// };

export const signup = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/signup.php`, formData).then(res => {
    // console.log('putUser:', res.data);
    // getUserInfo(data.id, () => {
    //   // console.log('pass')
    // }, true);
    if (callback) callback(res.data);
  });

};

export const logout = (callback) => {
  // localStorage.removeItem('loginUser');
  axios.get(`/php/logout.php`, config).then(res => {
    // console.log('logout:', res.data.result);
    if (callback) callback(res.data.result);
  });
};

export const updateUserTier = (idx, callback) => {
  // localStorage.removeItem('loginUser');
  axios.get(`/php/updateUserTier.php?idx=${idx}`, config).then(res => {
    // console.log('logout:', res.data.result);
    if (callback) callback(res.data);
  });
};

// ======== post ========

export const insertWriting = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/insertWriting.php`, formData).then(res => {
    if (callback) callback(res.data);
  });

};

export const getWriting = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/getWriting.php`, formData).then(res => {
    if (callback) callback(res.data);
  });
};

export const getSearchWritings = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/getSearchWritings.php`, formData).then(res => {
    if (callback) callback(res.data);
  });
};


// ======== newsBox ========

export const getNewBoxPosts = (callback) => {
  // localStorage.removeItem('loginUser');
  axios.get(`/php/getNewBoxPosts.php`, config).then(res => {
    // console.log('logout:', res.data.result);
    if (callback) callback(res.data);
  });
};

// ======== QnA ==========


export const insertQna = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/insertQna.php`, formData).then(res => {
    if (callback) callback(res.data);
  });
};

export const getQna = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/getQna.php`, formData).then(res => {
    if (callback) callback(res.data);
  });
};

export const insertQnaAnswer = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/insertQnaAnswer.php`, formData).then(res => {
    if (callback) callback(res.data);
  });
};

//========= schedule =============

export const getDateSchedule = (date, callback) => {
  // localStorage.removeItem('loginUser');
  axios.get(`/php/getDateSchedule.php?date=${date}`, config).then(res => {
    // console.log('logout:', res.data.result);
    if (callback) callback(res.data);
  });
};



