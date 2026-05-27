import { urlApi, post } from "../index";

/**
 * @typedef {Object} data
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} subject
 * @property {string} message
 */
export const postContact = async (data) => {
  const url = urlApi + "v2/send?tpl=contact";

  const obj = data;
  return await post(url, obj);
};
