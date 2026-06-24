let random = 0;

document.getElementById("play").addEventListener('click', function() {
    document.getElementById('dlg').showModal();
    random = Math.round(Math.random() * 1000);
});
document.getElementById("submit").addEventListener('click', function() {
    const input = Number(document.getElementById('input').value);
    if(input===random){
        document.getElementById('message').textContent = 'great job you won your number was right, the number is '+random;

    }
    else if(input>random){
        document.getElementById('message').textContent = 'too high';

    }
    else {
        document.getElementById('message').textContent = 'too low';
    }
});
document.getElementById("cancel").addEventListener('click', function() {
    document.getElementById('dlg').close();
   document.getElementById('message').textContent = '';
   document.getElementById('input').value = '';
});
