import { toast } from "react-hot-toast";

export const SuccessToast = (message, duration = 5000) => {
  toast.success(message, {
    duration: duration,
    style: {
      borderRadius: "10px",
      background: "#18AE19",
      color: "#fff",
    },
  });
};

export const ErrorToast = (message, duration = 5000) => {
  toast.error(message, {
    duration: duration,
    style: {
      borderRadius: "10px",
      background: "#dc2626",
      color: "#fff",
    },
  });
};
