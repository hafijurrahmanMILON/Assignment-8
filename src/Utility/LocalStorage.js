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
    return;
  }

  const newInstall = JSON.stringify([...installed, strID]);
  localStorage.setItem("installed", newInstall);
};

const removeInstall = (id) => {
  const installed = getInstall();
  const updated = [...installed].filter((app) => Number(app) !== id);
  localStorage.setItem("installed", JSON.stringify(updated));
};

export { setInstall, getInstall, removeInstall };
