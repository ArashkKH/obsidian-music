let inputCount = 0;
const worksList = document.querySelectorAll(".input__Wrapper.multi__Work_wrapper")[0];

document.querySelectorAll(".sample__Work_Add")[0].addEventListener("click", () => {
  inputCount++;
  let newInput = document.createElement("span");
  newInput.classList.add("work__Input_Wrapper");
  newInput.innerHTML = `
        <label for="requsrtSampleWork${inputCount}">Sample ${inputCount}</label>
        <input type="url" name="sample works ${inputCount}" id="requsrtSampleWork${inputCount}" />
        <span class="remove__work_Button">-</span>
    `;

  newInput.querySelector(".remove__work_Button").addEventListener("click", (removBtnE) => {
    inputCount--;
    removBtnE.target.closest(".work__Input_Wrapper").remove();
    renumInputs();
  });

  worksList.appendChild(newInput);
});

function renumInputs() {
  let list = document.querySelectorAll(".work__Input_Wrapper");
  list.forEach((e, i) => {
    const label = e.querySelector("label");
    if (label) {
      label.setAttribute("for", `requsrtSampleWork${i + 1}`);
    }

    label.innerText = "Sample " + (i + 1);

    const input = e.querySelector("input");
    input.setAttribute("name", `sample works ${i + 1}`);
    input.setAttribute("id", `requsrtSampleWork${i + 1}`);
  });
}
