let images = ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg"];
let currentIndex = 0;

function getName() {
    let inputField = document.form1.namae;
    let username = inputField.value.trim();

    if (username !== "") {
        document.getElementById("output").innerHTML = username + "さん、こんにちは！";
        inputField.value = ""; // 入力フィールドをクリア
    } else {
        document.getElementById("output").innerHTML = "あなたの名前を入力してください。";
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("greet-image").src = images[currentIndex];
}

function resetForm() {
    document.form1.namae.value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("greet-image").src = images[0];
    currentIndex = 0;
}
