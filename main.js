function greetUser() {
    const name = document.getElementById("nameInput").value.trim();

    const greeting = name ? `你好，${name}` : "请输入一个名字！";

    document.getElementById("greeting").textContent = greeting;
}
