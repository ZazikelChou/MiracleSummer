"use strict";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
import bgImage from '../img/fv_bg@2x.png';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin,DrawSVGPlugin,MorphSVGPlugin,SplitText);



document.addEventListener('DOMContentLoaded', () => {
    const svgImage = document.querySelector('#mainShape2 image');
    if (svgImage) {
        svgImage.setAttribute('href', bgImage);
    }
});
// 路径数据
    const paths = [
        "M20.57,294.73c14.25,5.58,74.76,21.07,68.4,43.01-24.97,86.09,23.44,49.34,77.63,34.53,40.06-10.95,26.66,26.24,67.15,16.76,32.01-7.49,29.73-54.56,93.05-39.87,31.62,7.33,22.05,47.96,68.8,42.28,58.57-7.12,22.88-42.14,66.56-55.93,56.06-17.7,56.4,10.65,73.11,13.73,51.69,9.52,66.97-34.9,84.76-43.41,67.74-32.4,36.24-60.96,24.15-79.84-15.68-24.51,19.72-30.77,12.6-49.91-13.27-35.66-23.81-12.44-56.62-33.66-35.81-23.17,40.49-46.4-3.8-71.69-41.67-23.79-98.67,10.56-103.18.09-7.52-17.46,5.89-40.27-71.58-3.23-4.03,1.93-33.66-58.68-78.15-64.76-53.73-7.34-44.68,83.8-89.86,88.18-33.58,3.26-40.78-49.1-110.14-11.65-31.6,17.06-36.55,71.42-58.29,64.71C2.5,118.58-16.58,280.18,20.57,294.73Z", // 第一个形状
        "M20.33,271.1c17.4-2.12,76.12,14.11,69.75,36.05-24.97,86.09,16.2,40.08,65.73,42.95,41.46,2.4,20.29,6.13,61.87,6.13,33.97,0,32.17-28.82,97.12-26.17,28.48,1.16,33.9,31.85,80.65,26.17,58.57-7.12,17.39-38.56,61.07-52.35,56.06-17.7,61.8,11.18,78.52,14.18,49.19,8.83,29.04-21.14,70.2-35.17,54.03-18.42,43.31-46.29,31.23-65.17-15.68-24.51,23.59-27.79,20.72-52.35-5.89-50.47-21.06-17.83-53.95-39.21-35.76-23.25,22.99-44.56-21.3-69.85-41.67-23.79-74.38,9.76-81.8,1.09-12.8-14.96-5.3-47.12-82.77-10.08-4.03,1.93-56.03-56.06-98.99-42.98-37.66,11.46-33.23,67.01-61.07,66.6-33.73-.5-32.36-25.01-97.45-3.72-34.13,11.16-67.09,77.37-89.43,73.07C4.55,127.6-16.26,275.55,20.33,271.1Z", // 第一个形状
        "M18.82,313.84c13.26,7.65,73.49-9.29,67.13,12.65-24.97,86.09,21.53,29.77,71.06,32.64,41.46,2.4,52.53,31.06,94.11,31.05,35.24,0,24.22-61.61,62.17-58.89,28.43,2.03,33.57,49.9,80.31,44.22,58.57-7.12,25.86-18.98,69.54-32.77,56.06-17.7,63.24-13.11,79.97-10.11,49.19,8.83,42.18-1.49,83.34-15.52,54.03-18.42,21.75-73.82,9.67-92.7-15.68-24.51,22.5-43.06,19.63-67.62-5.89-50.47-25.71-4.24-58.6-25.62-35.76-23.25,61.45-41.8,17.16-67.09-41.67-23.79-119.63,5.96-124.14-4.51-7.52-17.46,5.89-40.27-71.58-3.23-4.03,1.93-14.34-65.32-57.3-52.25-37.66,11.46-74.92,76.28-102.75,75.87-33.73-.5-30.66-19.72-95.74,1.57-34.13,11.16-73.63,44.65-95.97,40.35C.91,109.21-13.11,295.42,18.82,313.84Z", // 第二个形状
        "M15.29,308.5c13.26,7.65,73.49-9.29,67.13,12.65-24.97,86.09,22.47,42.38,72,45.24,41.46,2.4,51.59,18.45,93.18,18.45,35.24,0,30.66-38.63,68.6-35.91,28.43,2.03,27.13,26.92,73.88,21.24,58.57-7.12,25.86-18.98,69.54-32.77,56.06-17.7,63.24-13.11,79.97-10.11,49.19,8.83,49.82,17.29,90.98,3.26,54.03-18.42,29.54-95.1,17.46-113.98-15.68-24.51,7.06-40.56,4.2-65.12-5.89-50.47-25.71-4.24-58.6-25.62-35.76-23.25,41.51-48.47-2.78-73.75-41.67-23.79-95.19,23.11-99.7,12.63-7.52-17.46,1.38-50.74-76.09-13.7-4.03,1.93-32.92-59.85-75.87-46.78-37.66,11.46-61.33,59.24-89.16,58.83-33.73-.5-53.49-15.77-118.57,5.52-34.13,11.16-30.05,57.61-52.39,53.31C13.14,109.2-16.64,290.08,15.29,308.5Z", // 第三个形状
        
        ];

        let currentIndex = 0;

    function animatePath() {
        gsap.to(".path", {
        attr: {d: paths[currentIndex]}, // 改变 d 属性
        duration: 2, // 动画持续时间
        ease: "power2.inOut", // 缓动函数
        onComplete: () => {
        // 循环到下一个路径
        currentIndex = (currentIndex + 1) % paths.length;
        animatePath(); // 递归调用实现循环
        }
        });
    }

    animatePath(); // 开始动画

// 图片移动动画
        gsap.to("#fv_alien", {
            x: 30, // 横向移动距离
            duration: 2, // 动画持续时间
            ease: "power1.inOut", // 缓动效果
            repeat: -1, // 重复次数，-1 为无限循环
            yoyo: true, // 开启往返动画
            repeatDelay: 2 // 每次动画完成后延迟2秒再开始下一次循环
        });
        gsap.to("#fv_ufo", {
            y: -20, // 纵向移动距离
            duration: 1, // 动画持续时间
            ease: "power1.inOut", // 缓动效果
            repeat: -1, // 重复次数，-1 为无限循环
            yoyo: true // 开启往返动画
        });
        

// 地球旋转动画
        gsap.to("#earth", {
            rotation: 360, // 旋转360度
            duration: 10, // 持续时间，这里假设是10秒完成一圈
            ease: "none", // 线性动画，无缓动效果
            repeat: -1 // 无限重复
        });

// 飞出去的动画
        gsap.to("#rockets", {
            delay: 3,  // 延迟3秒开始动画
            x: window.innerWidth,
            y: -window.innerHeight,
            duration: 4,  // 减少飞行时间为4秒，稍微加快速度
            ease: "power1.in",
            onComplete: () => {
                // 渐隐消失
                gsap.to("#rockets", { opacity: 0, duration: 0.5, onComplete: () => {
                    // 重置位置并延迟3秒后开始渐显
                    gsap.set("#rockets", { x: 0, y: 0, opacity: 0 });  // 使用 set 来立即重置位置而不产生动画效果
                    gsap.to("#rockets", { 
                        opacity: 1, 
                        duration: 0.5, 
                        delay: 3  // 飞出去后延迟3秒再开始渐显
                    });
                }});
            }
        });


// 顶部导航栏动画
document.addEventListener("DOMContentLoaded", function () {
    // 第一部分动画：.header的动画效果
    gsap.to(".header", {
      scrollTrigger: {
        trigger: ".header", // 触发动画的元素
        start: "top top", // 动画开始的位置（当.header顶部到达视口顶部）
        end: () => "+=" + (window.innerHeight + document.querySelector(".main").offsetHeight * 0.5),
        // 动画结束的位置，这里使用一个函数动态计算，基于.window的高度加上.main元素高度的一半
        scrub: 1, // 动画的平滑过渡时间（以秒计），这里设置为1秒内平滑过渡
        pin: true, // 固定.trigger元素，直到滚动触发结束
      },
      y: 250, // 在Y轴上移动250像素
      scale: 0.75, // 缩放到75%
      rotation: -15, // 旋转-15度
      ease: "power3.out", // 缓动函数，这里使用power3的渐出效果
    });
  
    // 第二部分动画：.main的动画效果
    gsap.fromTo(
      "#overview", {
        x: -100, // 初始横向位置，从-100像素开始
        scale: 0.3, // 初始缩放比例
        rotation: 15, // 初始旋转角度
      }, {
        scrollTrigger: {
          trigger: "#overview", // 触发动画的元素
          start: "top 300%", // 动画开始的位置（当.main顶部到达视口顶部的200%位置）
          end: "top 50%", // 动画结束的位置（当.main顶部到达视口顶部的50%位置）
          scrub: 1, // 动画的平滑过渡时间，这里设置为1秒
        },
        x: 0, // 动画结束时的横向位置，移动到0像素位置
        scale: 1, // 动画结束时的缩放比例，恢复到100%
        rotation: 0, // 动画结束时的旋转角度，恢复到0度
        ease: "power3.out", // 缓动函数，使用power3的渐出效果
      }
    );
  });


// 文字动画

document.addEventListener('DOMContentLoaded', function () {
    const revealTypes = document.querySelectorAll('.reveal-type');

    revealTypes.forEach((char) => {
        // 仅使用 chars 类型分割，避免引入额外的 word 分割
        const text = new SplitText(char, { type: 'chars' });
        const normalChars = Array.from(text.chars).filter(c => !c.closest('.static-color'));
        const specialChars = Array.from(text.chars).filter(c => c.closest('.static-color'));

        // 确保所有生成的元素都以 inline-block 显示
        text.chars.forEach(c => c.style.display = 'inline-block');

        // 应用动画到 normalChars
        gsap.fromTo(normalChars, {
            color: 'transparent',
            webkitTextStroke: '1px #3B3532'
        }, {
            color: '#3B3532',
            webkitTextStroke: '0px transparent',
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
        });

        // 应用动画到 specialChars
        gsap.fromTo(specialChars, {
            color: 'transparent',
            webkitTextStroke: '1px #3B3532'
        }, {
            color: '#366AB3',
            webkitTextStroke: '0px transparent',
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
        });
    });

    // 初始化 Lenis 平滑滚动
    const lenis = new Lenis({
        lerp: 0.1
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});


