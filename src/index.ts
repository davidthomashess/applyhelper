const copyList = ["me", "job", "company", "desc"];

function myFunction(id: string) {
  const heading = document.querySelector(`#text-${id}`)! as HTMLElement;
  const text = heading.innerText || (heading.textContent as string);
  navigator.clipboard.writeText(text);

  const tooltip = document.querySelector(`#copied-${id}`) as HTMLElement;
  tooltip.innerHTML = "✓";

  function ResetButton() {
    tooltip.innerHTML = "";
  }

  setTimeout(ResetButton, 3000);
}

function accessBtns(value: string) {
  const copyBtn = document.querySelector(`#copy-${value}`)! as HTMLInputElement;

  copyBtn.addEventListener("click", () => {
    myFunction(value);
    console.log("Copied!");
  });
}

copyList.map((value, id) => accessBtns(value));
