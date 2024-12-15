// Đảm bảo rằng mã JavaScript chỉ chạy khi nội dung trang đã được tải xong
document.addEventListener("DOMContentLoaded", function() {

    // Tạo đối tượng để lưu trữ thông tin về Itsuka Shido
    const shido = {
        name: "Itsuka Shido",
        age: 16,
        role: "Main protagonist, Spirit Tamer",
        affiliation: "Ratatoskr",
        description: "Itsuka Shido is the main protagonist of the Date A Live series. He is a high school student who must date spirits to save the world. Shido has a unique ability to seal the powers of spirits by making them fall in love with him."
    };

    // Chức năng hiển thị thông tin về Itsuka Shido
    function displayCharacterInfo() {
        // Tạo phần tử mới trong DOM để hiển thị thông tin
        const characterInfo = `
            <h2>${shido.name}</h2>
            <p><strong>Age:</strong> ${shido.age}</p>
            <p><strong>Role:</strong> ${shido.role}</p>
            <p><strong>Affiliation:</strong> ${shido.affiliation}</p>
            <p><strong>Description:</strong> ${shido.description}</p>
        `;

        // Lấy phần tử có id "character-info" và thêm thông tin vào đó
        document.getElementById("character-info").innerHTML = characterInfo;
    }

    // Tạo một nút để người dùng có thể click để hiển thị thông tin
    const button = document.createElement("button");
    button.textContent = "Show Itsuka Shido Info";
    button.onclick = displayCharacterInfo;

    // Thêm nút vào trang web (ở đây là trong phần thân của trang)
    document.body.appendChild(button);
});
