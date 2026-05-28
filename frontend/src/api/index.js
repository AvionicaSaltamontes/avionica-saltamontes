const configuredApiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com/api/services/transactional/mailing/";

export const urlApi = configuredApiBaseUrl.endsWith("/") ? configuredApiBaseUrl : `${configuredApiBaseUrl}/`;
console.log("API URL:", urlApi);

export const post = async (url, obj) => {
  let data = null;
  let flag = false;
  let status = 200;
  let message = "";

  const request = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("FETCH URL:", url);
  console.log("REQUEST:", request);
  await fetch(url, request)
    .then(async (res) => {
      status = res.status;
      if (res.status === 200 || res.status === 202) {
        flag = true;
      }

      return res.json();
    })
    .then((res) => {
      if (res.message) {
        message = res.message;
      }
      if (flag === true) {
        data = res;
      }
    })
    .catch(() => {
      flag = false;
      status = 400;
    });

  return { data, status, message };
};
