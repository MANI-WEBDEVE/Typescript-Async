import "./style.css";

const getJokesData = async () => {
  try {
    const response:Response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const data1 = document.getElementsByClassName('p-jokes')
    data1[0].innerHTML = await data.value;
  } catch (error) {
    console.log(error);
  }
};

const btn =document.getElementsByClassName('btn-jokes')
btn[0].addEventListener('click',getJokesData)
