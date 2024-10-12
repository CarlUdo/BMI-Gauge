const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
const heightField = document.getElementById("heightField") as HTMLInputElement;
const weightField = document.getElementById("heightField") as HTMLInputElement;
const baseUrl = 'http://localhost:3000';

type BmiRequest = {
  height: string;
  weight: string;
};

const postDataToApi = async (bmiRequestObj: BmiRequest) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bmiRequestObj)
  });

  const serverData = await response.json();
};

submitButton.addEventListener('click', event => {
  event.preventDefault();

  const bmiRequestObj = {
    height: heightField.value,
    weight: weightField.value
  };

  postDataToApi(bmiRequestObj); 
});
