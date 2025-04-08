window.addEventListener('DOMContentLoaded', () => {
    let i = 0; // 初始化进度变量

    const chooseSketch = document.getElementById('chooseSketch');
    const chooseReference = document.getElementById('chooseReference');
    const popupModal = document.getElementById('popupModal');
    const popupModal2 = document.getElementById('popupModal2');

    const sketchImage = chooseSketch.querySelector("img");
    const referenceImage = chooseReference.querySelector("img");

    const sketchImages = popupModal.querySelectorAll('.example-box img');
    const referenceImages = popupModal2.querySelectorAll('.example-box2 img');

    // 显示第一个弹窗
    chooseSketch.addEventListener('click', () => {
        popupModal.style.display = 'flex';
    });

    // 点击弹窗外部区域关闭 sketch 弹窗
    window.addEventListener('click', (e) => {
        if (e.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });

    // 处理 sketch 弹窗中图片点击
    sketchImages.forEach(img => {
        img.addEventListener('click', (event) => {
            // 处理选择后增加进度
            i++;
            sketchImage.src = img.src; // 替换为点击的图片
            sketchImage.alt = 'selected sketch';
            sketchImage.style.objectFit = "contain";
            sketchImage.style.backgroundColor = "white";
            sketchImage.style.transition = "transform 0.3s ease";

            chooseSketch.style.backgroundColor = "white";
            popupModal.style.display = 'none';
            event.stopPropagation();

        });
    });

    // 显示第二个弹窗
    chooseReference.addEventListener('click', () => {
        popupModal2.style.display = 'flex';
    });

    // 点击弹窗外部区域关闭 reference 弹窗
    window.addEventListener('click', (e) => {
        if (e.target === popupModal2) {
            popupModal2.style.display = 'none';
        }
    });

    // 处理 reference 弹窗中图片点击
    referenceImages.forEach(img => {
        img.addEventListener('click', (event) => {
            // 处理选择后增加进度
            i++;
            referenceImage.src = img.src; // 替换为点击的图片
            referenceImage.alt = 'selected reference';
            referenceImage.style.objectFit = "contain";
            referenceImage.style.backgroundColor = "white";
            referenceImage.style.transition = "transform 0.3s ease";

            chooseReference.style.backgroundColor = "white";
            popupModal2.style.display = 'none';
            event.stopPropagation();
        });
    });

    // 为 btnAi 按钮添加点击事件，填入文本框内容
    document.getElementById("btnAi").addEventListener("click", function () {
        // 处理选择后增加进度
        i++;
        const textarea = document.querySelector(".input-box textarea");
        textarea.value = "A flowing, long medieval dress, intricately embroidered bodice, fitted waist, loose skirt. Luxurious golden satin fabric with delicate floral patterns and sheer sleeves. High-resolution, photorealistic.";
    });
    

    // 生成图片并处理点击图片添加描边效果
    document.getElementById('btnGen').addEventListener('click', () => {
        const aiGrid = document.querySelector('.aiGrid');
        console.log(i);
    
        // 清空当前显示的图片
        aiGrid.innerHTML = '';
        
        if (i === 3) {
            // 创建四张图片
            for (let j = 7; j < 11; j++) {
                const img = document.createElement('img');
                img.src = `./Images/d-${j+1}.png`; 
                img.alt = `Generated Image ${j+1}`;
    
                // 为每张图片添加点击事件
                img.addEventListener('click', () => {
                    // 在点击图片时保存到 localStorage
                    localStorage.setItem('selectedImage', img.src);
                    // 切换描边效果
                    if (img.classList.contains('selected')) {
                        img.classList.remove('selected');
                    } else {
                        // 移除其他图片的描边效果
                        const allImages = aiGrid.querySelectorAll('img');
                        allImages.forEach(image => image.classList.remove('selected'));
    
                        // 给当前图片添加描边效果
                        img.classList.add('selected');
                        btnUp.disabled = !document.querySelector('.aiGrid img.selected'); // 启用或禁用上传按钮
                    }
                });
    
                aiGrid.appendChild(img);
            }
        } else {
            alert('Please complete all steps before generating.');
        }
    });


    // 处理 Upload 按钮
    btnUp.addEventListener('click', () => {
        const selectedImage = document.querySelector('.aiGrid img.selected');
        if (selectedImage) {
            alert("Image uploaded successfully!");
        } else {
            alert("Please finish all step!");
        }
    });

    let selectedImage = null; // 用于保存选中的图片信息


    
});