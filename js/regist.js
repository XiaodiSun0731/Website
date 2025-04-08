document.addEventListener('DOMContentLoaded', function() {
    // 获取 DOM 元素
    const registModal = document.getElementById('regist');
    const loginModal = document.getElementById('loginModal');
    const showRegist = document.getElementById('showRegist');
    const showLogin = document.getElementById('showLogin');
    const closeButtons = document.querySelectorAll('#closeBtn');

    // 显示注册框
    if (showRegist) {
        showRegist.addEventListener('click', function (e) {
            e.preventDefault();  // 防止链接默认行为
            loginModal.style.display = 'none'; // 隐藏登录框
            registModal.style.display = 'block'; // 显示注册框
        });
    }

    // 显示登录框
    if (showLogin) {
        showLogin.addEventListener('click', function (e) {
            e.preventDefault();  // 防止链接默认行为
            registModal.style.display = 'none'; // 隐藏注册框
            loginModal.style.display = 'block'; // 显示登录框
        });
    }

    // 关闭按钮的功能
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            loginModal.style.display = 'none';
            registModal.style.display = 'none';
        });
    });

    const registCloseBtn = document.getElementById("registCloseBtn");

    if (registCloseBtn) {
        registCloseBtn.addEventListener("click", () => {
            registModal.style.display = "none";
        });
    }
    

    function adjustWrapperHeight() {
        const wrapper = document.querySelector('.wrapper:visible'); // 获取当前可见的 wrapper
        if (wrapper) {
            wrapper.style.height = 'auto';
            const height = wrapper.scrollHeight;
            wrapper.style.height = `${height}px`;
        }
    }
    
});

