$(document).ready(()=>{
    setTimeout(() => {
        $('.popup').css('right','50px')
    }, 1000);
    $('.close').on('click',()=>{
        $('.popup').css('right','-320px')
    })
})