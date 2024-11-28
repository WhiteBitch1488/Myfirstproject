const str1 = document.getElementById("1");
const str2 = document.getElementById("2");

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   const name = prompt("Введите ваше имя");

   str1.classList.add("hidden");
   str1.classList.remove("show");
   str2.classList.add("show");
   str2.classList.remove("hidden");     
   btn.classList.add('hidden');

   str2.querySelector('span').innerText = name;

})