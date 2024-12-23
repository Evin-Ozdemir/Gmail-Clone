import { months } from "./contants.js";

// ! Mail objesi içerisinde kullanılacak tarih verisini oluşturan fonksiyon
const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const updateMonths = months[month - 1];

  return day + " " + updateMonths;
};

// ! Metinleri kısıtlayan fonksiyon
const trimString = (text, max) => {
  // Eğer ilgili metin max değeri aşmamışsa bunu direkt return etsin
  if (text.length < max) {
    return text;
  }
  // Eğer ilgili metin max değeri aşarsa bunu kısıtlasın
  else {
    return text.slice(0, max) + "...";
  }
};
export { getDate, trimString };
