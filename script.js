document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 这里可以添加发送邮件的代码或者将数据发送到服务器
    alert('信息已发送，感谢您的联系！');

    // 清空表单
    document.getElementById('contactForm').reset();
});
