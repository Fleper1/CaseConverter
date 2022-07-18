function upperCase(){
    const textArea = document.getElementById("text");
    let result = textArea.value.toUpperCase();
    document.getElementById("text").value = result;
}

function lowerCase(){
    let textArea = document.getElementById("text");
    let result = textArea.value.toLowerCase();
    document.getElementById("text").value = result;
}

function properCase(){
    const str = document.getElementById("text").value;
    const newStr = str.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
    document.getElementById("text").value = newStr;
}

function sentenceCase(){
    const str = document.getElementById("text").value;
    const result = str.split('. ').map(w=>w[0].toUpperCase() + w.substring(1).toLowerCase()).join(". ");
    document.getElementById("text").value = result;
}

function saveTextFile(){
    const str = document.getElementById("text").value;
    console.log(str);
    download("text.txt", str);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", upperCase);
document.getElementById("lower-case").addEventListener("click", lowerCase);
document.getElementById("proper-case").addEventListener("click", properCase);
document.getElementById("sentence-case").addEventListener("click", sentenceCase);
document.getElementById("save-text-file").addEventListener("click", saveTextFile);