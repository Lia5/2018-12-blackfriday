//modal
    let sendform = document.querySelector('#sendform'),
    sendformWrap = document.querySelector('.sendform__wrap'),
    sendformClose = document.querySelector('#sendform-close');

    function sfOpen() {
        sendformWrap.classList.remove('fadeOutUp');
        sendformWrap.classList.add('fadeInDown');
        sendform.classList.remove('disabled');
        sendform.classList.add('flex');
    }

    function sfCLose() {
        sendformWrap.classList.remove('fadeInDown');
        sendformWrap.classList.add('fadeOutUp');
        setTimeout("sendform.classList.add('disabled')", 700);
        setTimeout("sendform.classList.remove('flex')", 800);
    }

    window.addEventListener("DOMContentLoaded", function () {


        sendform.addEventListener('click', e => {
            if (e.target !== sendformWrap && e.target == sendform) {
                sfCLose();
            }
        });

        sendformClose.addEventListener('click', () => {
            sfCLose();
        });
    });


