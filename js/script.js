function noSubmit() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  function noEventSubmit(action) {
    action.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", noEventSubmit);
}

noSubmit();
