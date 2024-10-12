const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
const heightField = document.getElementById("heightField") as HTMLInputElement;
const weightField = document.getElementById("weightField") as HTMLInputElement;
const outputArea = document.getElementById("outputArea") as HTMLInputElement;
const baseUrl = 'http://localhost:3000';

type BmiRequest = {
  height: string;
  weight: string;
};

type BmiResponse = {
  height: string;
  weight: string;
};

const renderData = (data: BmiResponse) => {
  outputArea.innerHTML = data.height;
};

const postDataToApi = async (bmiRequest: BmiRequest) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bmiRequest)
  });

  const serverData = await response.json() as BmiResponse;

  renderData(serverData);
};

submitButton.addEventListener('click', event => {
  event.preventDefault();

  const bmiRequest = {
    height: heightField.value,
    weight: weightField.value
  };

  postDataToApi(bmiRequest); 
});
