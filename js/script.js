burgerMenu = document.querySelector('.burger_menu') //Получаем обертку бургера
burgerBtn = document.querySelector('.burger__line') //Получаем кнопку с линиями

burgerBtn.onclick = () => { //здесь добавляем событие клика и запускаем линейную функцию
    burgerMenu.classList.toggle('burger__active') //здесь с помощью клас лист тогл добавляем или удаляем клас бургер ектив при клике на кнопку бургера
}

folderSpisok1 = document.querySelector('.folder_spisok1')
folderButton = document.querySelector('.folder_button')
folderButton.onclick = () => {
    folderSpisok1.classList.toggle('folder__active')
}

// var acc = document.getElementsByClassName("chest_acc1");
// var i;
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         var chest_accordion2 = this.nextElementSibling;
//         if (chest_accordion2.style.maxHeight) {
//             chest_accordion2.style.maxHeight = null;
//         } else {
//             chest_accordion2.style.maxHeight = chest_accordion2.scrollHeight + "px";
//         }
//     });
// }