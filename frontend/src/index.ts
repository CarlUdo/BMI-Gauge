/**
 *  Please note that in a real world project the following functions would be divided
 *  into different files/modules and bundled together at build time.
 *  For the convenience of this assignment all functions are collected into one script file.
 */

const submitButton = document.getElementById(
  "submitButton",
) as HTMLButtonElement;
const heightField = document.getElementById("heightField") as HTMLInputElement;
const weightField = document.getElementById("weightField") as HTMLInputElement;
const outputArea = document.getElementById("outputArea") as HTMLInputElement;
const baseUrl = "http://localhost:3000";

/** Types */
type BmiRequest = {
  height: string;
  weight: string;
};

type BmiResponse = {
  height: number;
  weight: number;
  bmi: number;
  range: string;
  emoji: string;
  info: string;
  advice: string;  
};

/** Helper functions */
const isInteger = (str: string) => {
  return /^-?\d+$/.test(str);
};

const isValidIntegers = (heightInput: string, weightInput: string) => {
  if (!isInteger(heightInput) || !isInteger(weightInput)) return false;

  const isValidHeight = Number(heightInput) > 80 && Number(heightInput) < 280;
  const isValidWeight = Number(weightInput) > 20 && Number(weightInput) < 700;

  return isValidHeight && isValidWeight;
};

/** Post and render functions */
const renderData = (bmiResponse: BmiResponse) => {
  outputArea.removeAttribute("hidden");

  const p1Element = document.createElement("p");

  p1Element.innerHTML =
    `<strong>Height: </strong>${bmiResponse.height} cm&nbsp;&nbsp;&nbsp;&nbsp;` +
    `<strong>Weight: </strong>${bmiResponse.weight} kg&nbsp;&nbsp;&nbsp;&nbsp;` +
    `<strong>BMI: </strong>${bmiResponse.bmi}&nbsp;&nbsp;&nbsp;&nbsp;` +
    `<strong>Range: </strong>${bmiResponse.range}&nbsp;&nbsp;&nbsp;&nbsp;` +    
    `<strong>Enjoy: </strong>${bmiResponse.emoji}`;

  const p2Element = document.createElement("p");
  p2Element.innerHTML = `<em><strong>Note! </strong>${bmiResponse.info}</em> `;

  const p3Element = document.createElement("p");
  p3Element.textContent = bmiResponse.advice;

  outputArea.appendChild(p1Element);
  outputArea.appendChild(p2Element);
  outputArea.appendChild(p3Element);
};

const makePostRequest = async (bmiRequest: BmiRequest) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bmiRequest),
  });

  return (await response.json()) as BmiResponse;
};

const postDataToApi = async () => {
  const bmiRequest: BmiRequest = {
    height: heightField.value,
    weight: weightField.value,
  };

  const bmiResponse = await makePostRequest(bmiRequest);

  renderData(bmiResponse);
};

/** Event listeners */
const initListeners = () => {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    postDataToApi();
    heightField.value = "";
    weightField.value = "";
    outputArea.value = "";
    submitButton.setAttribute("disabled", "true");
    outputArea.innerHTML = '';
    outputArea.setAttribute("hidden", "true");
  });

  heightField.addEventListener("input", () => {
    submitButton.setAttribute("disabled", "true");

    if (isValidIntegers(heightField.value, weightField.value)) {
      submitButton.removeAttribute("disabled");
    }
  });

  weightField.addEventListener("input", () => {
    submitButton.setAttribute("disabled", "true");

    if (isValidIntegers(heightField.value, weightField.value)) {
      submitButton.removeAttribute("disabled");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initListeners();
});
