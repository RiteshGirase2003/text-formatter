document.addEventListener('DOMContentLoaded', function () {
    let back=[];
    let redo=[];
    const messageTextarea = document.getElementById('messageTextarea');
    const whatsappButton = document.getElementById('whatsappButton');
    const telegramButton = document.getElementById('telegramButton');

    function isStackEmpty(stack) {
        return stack.length === 0;
    }

    let message = messageTextarea.value.trim();
    back.push(message);

    whatsappButton.addEventListener('click', function () {
        sendMessage1();
    });

    telegramButton.addEventListener('click', function () {
        sendMessage2();
    });

    backward.addEventListener('click', function () {
        if (isStackEmpty(back))
        {
            alert('Nothing is thier to go back');

        }
        else{
            let msg = back.pop();
            messageTextarea.value = msg;
            redo.push(msg);
        }
    });

    forward.addEventListener('click', function () {
        if (isStackEmpty(redo))
        {
            alert('Nothing is thier to go forward');

        }
        else{
            let msg = redo.pop();
            messageTextarea.value = msg;
            back.push(msg);
        }
    });
    
    refresh.addEventListener('click', function(){
        location.reload();
    });

    del.addEventListener('click', function() {
        messageTextarea.value = '';

    });
    function sendMessage1() 
    {
        let message = messageTextarea.value.trim();
        if (message !== '') 
        {
            var formattedMessage = '*' + message + '*'; // You can customize the formatting as needed
            back.push(formattedMessage);
            messageTextarea.value = formattedMessage;
        } 
        else {
            alert('Please enter a message');
        }
    }
    function sendMessage2() 
    {
        let message = messageTextarea.value.trim();
        if (message !== '') 
        {
            var formattedMessage = '**' + message + '**'; // You can customize the formatting as needed
            back.push(formattedMessage);
            messageTextarea.value = formattedMessage;
        } 
        else {
            alert('Please enter a message');
        }
    }
});