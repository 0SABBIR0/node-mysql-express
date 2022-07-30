let setSerialNumber;

const getDataFunc = () => {
  const inputValue = document.getElementById("codeInput").value;

  getDataReq(inputValue);
};

const getDataReq = (inputCode) => {
  setSerialNumber = inputCode;
  let result;
  axios
    .get(`http://localhost:8000/getData/${inputCode}`)
    .then((response) => {
      console.log(response.data[0]);
      result = response.data[0];
      const serialNumber = JSON.stringify(result.Serial_Number);
      const assetID = JSON.stringify(result.Asset_ID);
      const status = JSON.stringify(result.Status);

      const renderHtml =
        "<table>" +
        "<tr>" +
        "<th>Serial Number</th>" +
        "<th>Asset Id</th>" +
        "<th>Status</th>" +
        "<th>Update Status</th>" +
        "</tr>" +
        "<tr>" +
        '<td id="serial"></td>' +
        '<td id="asset"></td>' +
        '<td id="status"></td>' +
        '<td id="selectOptPart">' +
        '<select name="cars" id="option">' +
        '<option value="active">active</option>' +
        '<option value="inactive">inactive</option>' +
        '<option value="dismantle">dismantle</option>' +
        "</select>" +
        '<button onclick="updateStatus()"  id="btnSelect">Update</button>' +
        "</td>" +
        " </tr>" +
        "</table>";

      const targetedDiv = (document.getElementById("targetedDiv").innerHTML =
        renderHtml);
      const targetedId = (document.getElementById("serial").innerHTML =
        serialNumber);
      const targetedId2 = (document.getElementById("asset").innerHTML =
        assetID);
      const targetedId3 = (document.getElementById("status").innerHTML =
        status);
    })
    .catch((error) => {
      // console.log(error);
    });
};

const updateStatus = () => {
  console.log(setSerialNumber);
  const inputOption = document.getElementById("option").value;
  console.log(inputOption);
  const axiosExe = axios.patch(
    `http://localhost:8000/updateData/${setSerialNumber}`,
    {
      Status: inputOption,
    }
  );
  if (axiosExe) {
    getDataReq(setSerialNumber);
    alert("Status Successfully Updated 🥳");
  } else {
    alert("Status Update failed 🥲");
  }
  document.getElementById("mainWrap").onload = getDataReq(setSerialNumber);
};
