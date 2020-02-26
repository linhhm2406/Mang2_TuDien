let english = ['camel','turtle','cat','dog','tiger','bird'];
let vietnamese=['con lac da', 'con rua', 'con meo', 'con cho', 'con ho', 'con chim'];

function Translate(){
    let meaning;
    let input_word=document.getElementById('english').value;
    let position = english.indexOf(input_word);
    if (english.valueOf(input_word)!==-1){
        meaning = vietnamese[position];
        document.getElementById('vietnamese').value = meaning;
    } else {
        alert('Khong tim thay tu can tra cuu');
    }
}