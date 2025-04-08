document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registModal = document.getElementById("regist");
  
    const userIcon = document.getElementById("userIcon");
    const showRegist = document.getElementById("showRegist");
    const loginCloseBtn = document.getElementById("loginCloseBtn");

    
    if (userIcon) {
      userIcon.addEventListener("click", function (e) {
        e.preventDefault();
        loginModal.style.display = "block";
        registModal.style.display = "none";
      });
    }
  
    if (showRegist) {
      showRegist.addEventListener("click", function (e) {
        e.preventDefault();
        loginModal.style.display = "none";
        registModal.style.display = "block";
      });
    }
  
    if (loginCloseBtn) {
      loginCloseBtn.addEventListener("click", () => {
        loginModal.style.display = "none";
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
  