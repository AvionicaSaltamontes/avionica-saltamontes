import { urlApi, post } from "../index";

/**
 *
 * @param {Object} data
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {number} passengers
 * @property {string} from
 * @property {string} to
 * @property {string} date // 2025-01-01
 * @property {string} message
 */
export const postQuote = async (data) => {
  const url = urlApi + "v3/send?tpl=quote";

  const obj = data;
  return await post(url, obj);
};
