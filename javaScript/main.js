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
        gsap.to("#earth2", {
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


function adjustStoryHeight() {
    const storyBg = document.getElementById('story-bg');
    const story = document.getElementById('story');
    if (storyBg && story) {
        story.style.height = storyBg.offsetHeight + 'px';
    }
}

// 在页面加载时调整高度
window.addEventListener('load', adjustStoryHeight);

// 在窗口调整大小时调整高度
window.addEventListener('resize', adjustStoryHeight);




// staff菜单动画
document.addEventListener("DOMContentLoaded", function () {
    const staffCards = document.querySelectorAll(".staff-card");
    const staffInfos = document.querySelectorAll(".staff-info");

    staffCards.forEach(card => {
        const svgPaths = card.querySelectorAll('.staff-item-R svg path');

        card.addEventListener("mouseenter", () => {
            gsap.to(svgPaths, { stroke: "#F4C53A", duration: 0.5 });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(svgPaths, { stroke: "#3B3532", duration: 0.5 });
        });

        card.addEventListener("click", function (event) {
            const infoId = this.querySelector(".staff-item").getAttribute("data-info");
            const infoElement = document.getElementById(infoId);

            // 关闭所有已打开的卡片，并复原SVG
            staffInfos.forEach(info => {
                const openCard = info.closest(".staff-card");
                const openSvgPaths = openCard.querySelectorAll('.staff-item-R svg path');

                if (info !== infoElement && info.style.display === "grid") {
                    gsap.to(info, { height: 0, opacity: 0, duration: 0.5, onComplete: () => {
                        info.style.display = "none";
                    }});
                    gsap.to(openSvgPaths, { morphSVG: "#original-svg-path", duration: 0.5 });
                }
            });

            // 切换点击的卡片并改变SVG形状
            if (infoElement.style.display === "none" || !infoElement.style.display) {
                infoElement.style.display = "grid";
                gsap.fromTo(infoElement, { height: 0, opacity: 0 }, { height: infoElement.scrollHeight, opacity: 1, duration: 0.5 });
                
                // 使用MorphSVGPlugin改变当前卡片的SVG形状
                gsap.to(svgPaths, { morphSVG: "#new-svg-path", duration: 0.5 });
            } else {
                gsap.to(infoElement, { height: 0, opacity: 0, duration: 0.5, onComplete: () => {
                    infoElement.style.display = "none";
                }});
                
                // 复原当前卡片的SVG形状
                gsap.to(svgPaths, { morphSVG: "#original-svg-path", duration: 0.5 });
            }

            // 阻止事件冒泡，以避免触发 document 的 click 事件
            event.stopPropagation();
        });
    });

    // 当点击页面其他地方时关闭所有卡片
    document.addEventListener("click", function (e) {
        staffInfos.forEach(info => {
            const openCard = info.closest(".staff-card");
            const openSvgPaths = openCard.querySelectorAll('.staff-item-R svg path');

            if (info.style.display === "grid") {
                gsap.to(info, { height: 0, opacity: 0, duration: 0.5, onComplete: () => {
                    info.style.display = "none";
                }});
                gsap.to(openSvgPaths, { morphSVG: "#original-svg-path", duration: 0.5 });
            }
        });
    });
});

// bento动画
const brandContact = document.querySelector('.brand-contact');
const brandContactBg = document.querySelector('.brand-contact-bg');
const contactContainerM = document.querySelector('.contact-container-m');

const otherElements = document.querySelectorAll('.contact-container-t, .contact-container-b');

brandContact.addEventListener('mouseenter', () => {
    gsap.to(brandContactBg, { opacity: 1, duration: 0.3 });
    gsap.to(contactContainerM, { color: '#EFEFEF', scale: 0.8, duration: 0.3 });

    gsap.to(otherElements, { opacity: 0, duration: 0.3 });
});

brandContact.addEventListener('mouseleave', () => {
    gsap.to(brandContactBg, { opacity: 0, duration: 0.3 });
    gsap.to(contactContainerM, { color: '#3B3532', scale: 1, duration: 0.3 });

    gsap.to(otherElements, { opacity: 1, duration: 0.3 });
});

const projects = document.querySelector('.projects');
const outlineProjectsBg = document.querySelector('.outline-projects-bg');
const outlineProjectsStickers = document.querySelector('.outline-projects-stickers img');
const outlineProjectsArrow = document.querySelector('.outline-projects-arrow svg');
const projectList = document.querySelectorAll('.project-list');

projects.addEventListener('mouseenter', () => {
    gsap.to(outlineProjectsBg, { opacity: 1, duration: 0.3 });
    gsap.to(outlineProjectsStickers, { opacity: 0.7, scale: 0.8, duration: 0.3 });
    gsap.to(outlineProjectsArrow , { stroke: '#EFEFEF', duration: 0.3 });
    gsap.to(projectList, { opacity: 0, duration: 0.3 });
});

projects.addEventListener('mouseleave', () => {
    gsap.to(outlineProjectsBg, { opacity: 0, duration: 0.3 });
    gsap.to(outlineProjectsStickers, { opacity: 0.3, scale: 1, duration: 0.3 });
    gsap.to(outlineProjectsArrow , { stroke: '#3B3532', duration: 0.3 });
    gsap.to(projectList, { opacity: 1, duration: 0.3 });
});

const budget = document.querySelector('.budget');
const budgetProjectsBg = document.querySelector('.budget-projects-bg');
const budgetProjectsStickers = document.querySelector('.budget-projects-stickers img');
const budgetProjectsArrow = document.querySelector('.budget-projects-arrow svg');
const budgettList = document.querySelectorAll('.budget-list');

budget.addEventListener('mouseenter', () => {
    gsap.to(budgetProjectsBg, { opacity: 1, duration: 0.3 });
    gsap.to(budgetProjectsStickers, { opacity: 0.7, scale: 0.8, duration: 0.3});
    gsap.to(budgetProjectsArrow, { stroke: '#EFEFEF', duration: 0.3 });
    gsap.to(budgettList, { opacity: 0, duration: 0.3 });
});

budget.addEventListener('mouseleave', () => {
    gsap.to(budgetProjectsBg, { opacity: 0, duration: 0.3 });
    gsap.to(budgetProjectsStickers, { opacity: 0.7, scale: 1, duration: 0.3 });
    gsap.to(budgetProjectsArrow, { stroke: '#3B3532', duration: 0.3 });
    gsap.to(budgettList, { opacity: 1, duration: 0.3 });
});

const news = document.querySelector('.news');
const newsProjectsBg = document.querySelector('.news-projects-bg');
const newstProjectsStickers = document.querySelector('.news-projects-stickers img');
const newstProjectsArrow = document.querySelector('.news-projects-arrow svg');
const newsList = document.querySelectorAll('.news-list');

news.addEventListener('mouseenter', () => {
    gsap.to(newsProjectsBg, { opacity: 1, duration: 0.3 });
    gsap.to(newstProjectsStickers, { opacity: 0.7, scale: 0.8, duration: 0.3});
    gsap.to(newstProjectsArrow, { stroke: '#EFEFEF', duration: 0.3 });
    gsap.to(newsList, { opacity: 0, duration: 0.3 });
});

news.addEventListener('mouseleave', () => {
    gsap.to(newsProjectsBg, { opacity: 0, duration: 0.3 });
    gsap.to(newstProjectsStickers, { opacity: 0.7, scale: 1, duration: 0.3 });
    gsap.to(newstProjectsArrow, { stroke: '#3B3532', duration: 0.3 });
    gsap.to(newsList, { opacity: 1, duration: 0.3 });
});





// footer循环遍历每个 .product-footer-stripe 元素并为它们设置动画和事件监听器

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth = 0,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

    // Set initial positions and widths
    gsap.set(items, {
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });

    // Calculate total width
    totalWidth = items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

    // Create timeline
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

        tl.to(item, {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
        }, 0)
        .fromTo(item, {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
        }, {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
        }, distanceToLoop / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }

    return tl;
}

document.querySelectorAll(".product-footer-stripe").forEach(stripe => {
    const stripe1 = stripe.querySelector(".product-footer-stripe1");
    const stripe2 = stripe.querySelector(".product-footer-stripe2");
    const elems2 = gsap.utils.toArray(stripe.querySelectorAll(".product-footer-elem"));
    const loop2 = horizontalLoop(elems2, { paused: false, repeat: -1, speed: 1, paddingRight: 0 });

    stripe.addEventListener("mouseenter", function() {
        setTimeout(() => {
            gsap.to(stripe2, {
                height: "100%",
                ease: "expo.out", // 使用字符串来指定缓动函数
                duration: 0.5
            });
        }, 140);
        stripe1.classList.add("animate__slideOutUp");
    });

    stripe.addEventListener("mouseleave", function() {
        setTimeout(() => {
            gsap.to(stripe2, {
                height: 0,
                ease: "expo.in", // 使用字符串来指定缓动函数
                duration: 0.5,
                overwrite: 'auto'
            });
        }, 140);
        stripe1.classList.remove("animate__slideOutUp");
    });
});




gsap.to(".row-1, .row-2", 1, {
    top: 0,
    ease: "power4.out",
    delay: 1,
    stagger: {
      amount: 0.5,
    },
  });

  gsap.to(".brand-name", 1, {
    left: 0,
    ease: "power4.out",
    delay: 2.5,
    stagger: {
      amount: 0.5,
    },
  });

  gsap.from(".budget-list h3", 0.1, {
    opacity: 0,
    ease: "power4.out",
    delay: 2,
  });

  gsap.from("#earth2, #earth3", 2, {
    scale: 0,
    ease: "power4.out",
    delay: 2,
  });

 



  gsap.to("h2, h3", 1, {
    top: 0,
    ease: "power4.out",
    delay: 2,
    stagger: {
      amount: 0.5,
    },
  });





  gsap.from(".marquee", 1, {
    bottom: "-10em",
    ease: "power4.out",
    delay: 3,
  });







//鼠标滚动返回顶部


/* Please ❤ this if you like it! */



(function($) {
    "use strict";

    $(document).ready(function() {
        // Existing scroll back to top logic
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };
        
        updateProgress();
        $(window).scroll(updateProgress);
        
        var offset = 50;
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > offset) {
                $('.progress-wrap').addClass('active-progress');
            } else {
                $('.progress-wrap').removeClass('active-progress');
            }
        });
        
        $('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            gsap.to(window, {duration: 0.55, scrollTo: {y: 0}});
            return false;
        });
        
        // Add event listener for scroll to check bottom
        $(window).on('scroll', function() {
            var progressWrap = document.querySelector('.progress-wrap');
            var scrollPosition = window.pageYOffset;
            var windowSize = window.innerHeight;
            var bodyHeight = document.documentElement.scrollHeight;

            if (windowSize + scrollPosition >= bodyHeight - 10) { // Allow for some tolerance
                progressWrap.classList.add('at-bottom');
            } else {
                progressWrap.classList.remove('at-bottom');
            }
        });
        
        // New logic to scroll to top when clicking menu links using GSAP
        $('.menu-link.menu-close a').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            if (target === "#home") {
                gsap.to(window, {duration: 0.55, scrollTo: {y: 0}});
            } else {
                var targetElement = document.querySelector(target);
                if (targetElement) {
                    gsap.to(window, {duration: 0.55, scrollTo: {y: targetElement.offsetTop}});
                }
            }
        });
    });
})(jQuery);



//鼠标滚动返回顶部


//menu
document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ paused: true });

    tl.to(".menu-overlay", {
    duration: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power2.out",
    });

    tl.from(
    ".menu-link, .btn",
    {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration: 0.75,
        ease: "power1.inOut",
    },
    "<",
    );

    tl.to(
    ".video-preview",
    {
        duration: 1,
        height: "200px",
        ease: "power2.out",
    },
    "<",
    );

    tl.to(
    ".menu-divider",
    {
        duration: 2,
        width: "100%",
        ease: "power4.out",
    },
    "<",
    );

    function openMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "all";
    tl.play();
    }

    function closeMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "none";
    tl.reverse();
    }

    document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
    document
    .querySelector(".menu-close-btn")
    .addEventListener("click", closeMenu);
    tl.reverse();
});
document.addEventListener('DOMContentLoaded', function() {
    // 获取关闭菜单的按钮
    var closeMenuBtn = document.getElementById('menuCloseBtn');

    // 为所有菜单链接添加点击事件监听器
    document.querySelectorAll('.menu-close a').forEach(function(link) {
        link.addEventListener('click', function() {
            // 模拟关闭按钮的点击事件
            closeMenuBtn.click();
        });
    });
});




//🍱
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.detail-card');
    const triggers = document.querySelectorAll('[data-target]');
    const arrows = document.querySelectorAll('.detail-card-arrow');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const targetClass = `.detail-card-${this.getAttribute('data-target')}`;
        const targetCard = document.querySelector(targetClass);
        
        // 先设置 display 为 flex，然后再进行 opacity 动画
        gsap.set(targetCard, { display: 'flex' });
        gsap.fromTo(targetCard, { opacity: 0 }, {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out'
        });
      });
    });
    
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        const card = this.closest('.detail-card');
        
        gsap.to(card, {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
          onComplete: () => {
            gsap.set(card, { display: 'none' });
          }
        });
      });
    });
  });
  