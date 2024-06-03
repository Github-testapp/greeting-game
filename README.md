# 挨拶ゲーム

このプロジェクトは、ユーザーが名前を入力し、挨拶メッセージを表示し、次の画像に切り替える簡単なウェブアプリケーションです。

## ファイル構成

- `index.html` - メインのHTMLファイル。ウェブページの構造を定義します。
- `styles.css` - CSSファイル。ページのスタイルを定義します。
- `script.js` - JavaScriptファイル。ページの動作を管理します。
- `img/` - 画像ファイルが格納されているディレクトリ。
  - `image1.jpg`
  - `image2.jpg`
  - `image3.jpg`

## 使用方法

1. プロジェクトのディレクトリ構造を以下のように設定します：
    ```
    project-directory/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── img/
        ├── image1.jpg
        ├── image2.jpg
        └── image3.jpg
    ```

2. `index.html` をブラウザで開きます。

3. 名前を入力フィールドに入力し、「挨拶する」ボタンをクリックすると、挨拶メッセージが表示されます。

4. 「次へ」ボタンをクリックすると、画像が次のものに切り替わります。

5. 「リフレッシュ」ボタンをクリックすると、入力フィールドと表示内容がリセットされ、最初の画像が表示されます。

## 各ファイルの詳細

### index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>挨拶ゲーム</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div id="game-container">
        <form name="form1" method="post" action="">
            <p align="center">
                <input type="text" name="namae"><br>
                <span>名前を入力してね</span><br><br>
                <span id="output"></span><br><br>
                <img id="greet-image" src="./img/image1.jpg" alt="Greet Image" style="width: 300px; height: 300px;">
            </p>
            <p align="center">
                <input type="button" value="挨拶する" onclick="getName()" />
                <input type="button" value="次へ" onclick="nextImage()" />
                <input type="button" value="リフレッシュ" onclick="resetForm()" />
            </p>
        </form>
    </div>
</body>
</html>
```

### styles.css

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

#game-container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#greet-image {
    margin-top: 20px;
}

input[type="text"] {
    padding: 10px;
    width: 80%;
    margin: 10px 0;
}

input[type="button"] {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

### script.js

```javascript
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
```

## リポジトリ

[GitHubリポジトリ](https://github.com/Github-testapp/greeting-game.git)
```

このREADMEファイルは、プロジェクトの使用方法、ファイルの構成、および各ファイルの詳細を提供します。必要に応じて追加や変更を行ってください。
