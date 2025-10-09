// import { toast } from "react-toastify";

import { toast } from "react-toastify";

const getInstall = () => {
  const installed = localStorage.getItem("installed");
  if (installed) {
    const parsed = JSON.parse(installed);
    return parsed;
  } else {
    return [];
  }
};

const setInstall = (id) => {
  const installed = getInstall();
  const strID = String(id);
  if (installed.includes(strID)) {
    return toast.warning("already installed");
  }

  const newInstall = JSON.stringify([...installed, strID]);
  localStorage.setItem("installed", newInstall);
  return toast.success("Successfully Installed");
};

export { setInstall, getInstall };
