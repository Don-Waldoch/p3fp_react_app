const CryptoJS = require('crypto-js');

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_EXERCISEDB_HOST
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_YOUTUBE_HOST
  }
}

export const fetchRapidAPI = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const encryptWithAES = (ClearText) => {
  const CodedText = CryptoJS.AES.encrypt(ClearText, process.env.REACT_APP_AES_KEY).toString();
  return CodedText;
};

export const decryptWithAES = (CodedText) => {
  const bytes = CryptoJS.AES.decrypt(CodedText, process.env.REACT_APP_AES_KEY);
  const ClearText = bytes.toString(CryptoJS.enc.Utf8);
  return ClearText;
};

export const encryptWithSHA = (text) => {
  const hash = CryptoJS.SHA3(text, {outputLength: 256}).toString();
  return hash;
}
