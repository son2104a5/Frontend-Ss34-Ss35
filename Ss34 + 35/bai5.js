let text = document.getElementsByClassName("text");

let name = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

for(let i=0;i<text.length;i++){
    text[i].textContent = name[i];
}