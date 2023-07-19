import { toast } from "react-toastify";

export default function Toast(type, message) {
  let showToastMessage = () => {
    toast("Something went wrong!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };
  switch (type) {
    case "success":
      showToastMessage = () => {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      break;
    case "error":
      showToastMessage = () => {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      break;
    case "warn":
      showToastMessage = () => {
        toast.warn(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      break;
    case "info":
      showToastMessage = () => {
        toast.info(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      break;

    default:
      break;
  }
  return showToastMessage();
}
