// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initScrollAnimations();
    initImageLazyLoading();
    initMobileOptimizations();
    initTimelineDetails();
    initFullscreenViewer();
});

// 详情页面数据
const timelineData = {
    omiya: {
        title: '大宫铁道博物馆',
        date: '2025年7月20日',
        summary: '参观了日本最大的铁道博物馆，深入了解了日本铁路发展历程。从蒸汽机车到新干线，见证了日本铁道技术的演进历程。博物馆内的互动体验让我们对列车驾驶、信号系统等有了更直观的认识。',
        images: [
            { src: 'images/7-20/1.jpg', caption: '参观“转车台圆形车库”，了解日本铁路的调车作业' },
            { src: 'images/7-20/DSC07705.jpg', caption: '新干线列车模型' },
            { src: 'images/7-20/DSC07565.jpg', caption: '赵亮老师与古关教授交流' },
            { src: 'images/7-20/IMG_2570.jpg', caption: '古关教授在大宫站讲解车站设计' },
            { src: 'images/7-20/DSC07669.jpg', caption: '体验“列车调度模拟器”，学习电车如何通过信号控制避免相互碰撞' },
            { src: 'images/7-20/DSC07757.jpg', caption: '参观结束后，教授请支队同学品尝当地甜品' },
            { src: 'images/7-20/IMG_2584.jpg', caption: '支队成员与古关研究室师生合影' }
        ],
        content: `7月20日下午，支队在大宫站与东京大学古关教授一行汇合后，乘坐琦玉新交通系统（New Shuttle）前往大宫铁道博物馆开展调研。在大宫站，古关教授便开始向我们介绍埼玉新交通，该线路沿东北新干线高架并行敷设，采用胶轮系统，允许更大的坡度，但这同时导致其承载力有限，只能使用小型列车，每节车厢长度约为5米。

抵达博物馆后，在古关教授的带领下，我们依次参观了多个展区。教授为我们介绍了1号机关车（蒸汽机车）及转车台圆形车库的历史背景与技术意义。在展品讲解中，教授指出0系新干线采用受电弓供电，电压更高，因此受电弓结构更为厚实。同时，0系新干线通过改变电路连接方式来切换电压，依赖复杂的机械切换装置，体现了早期电力牵引系统的工程特点。

在车辆展区，教授重点介绍了222型新干线，该车型为应对北陆地区冬季积雪环境，在车头加装了铲雪结构。在此之后，我们下楼从底部观察222型机车，其底部设有金属板以防雪保护结构，而电机部分因需散热而未加装防护。

在历史区域，我们看到了E1新干线的模型。教授介绍，该车型为双层客车，但由于新干线客流减少，双层设计没有在后续车型中延续。

未来展区则展出了E5隼号等先进车型。400系列虽然分类上属于新干线车辆，但也同时也能行驶在既有线上，其尺寸略小于标准新干线列车。

通过本次参观，支队成员对轨道交通系统在供电方式、车辆结构、牵引系统及环境适应性等方面的技术演进有了更深入的理解，为后续调研提供了扎实的技术背景与研究方向。`
    },
    todai: {
        title: '东京大学古关研究室',
        date: '2025年7月21日',
        summary: '与东京大学古关隆章教授及其研究团队进行深入学术交流，了解了轨道交通控制技术、列车高精度定位、能量回收等前沿研究。研究室展示了GNSS定位、多车协同节能、列车防滑控制等多项创新成果，为我们的研究提供了宝贵的学术启发。',
        images: [
            { src: 'images/example.jpg', caption: '东京大学校园' },
            { src: 'images/7-21/DSC04816.jpg', caption: '辅导员常锴向研究室师生介绍清华大学及支队' },
            { src: 'images/7-21/DSC04823.jpg', caption: '古关教授介绍交流会安排' },
            { src: 'images/7-21/DSC04833.jpg', caption: '长井健介同学展示列车位置检测研究' },
            { src: 'images/7-21/DSC04837.jpg', caption: '留学生张皓翔同学进行自我介绍' },
            { src: 'images/7-21/DSC04848.jpg', caption: '孟轩朗同学讲解能量回收技术' },
            { src: 'images/7-21/1.jpg', caption: '上野爽同学的轨道条轮实验装置' },
            { src: 'images/7-21/IMG_2623.jpg', caption: '支队与古关研究室师生合影' }
        ],
        content: `7月21日，支队访问了东京大学古关隆章教授的研究室，就轨道交通的智能化控制技术进行了深入的学术交流。

会议开始，清华大学电子工程系辅导员常锴简要介绍了清华大学的校园环境与人才培养理念，阐述了电子工程系在电子科学与技术、信息与通信工程、智能感知系统等领域的综合实力，并说明了本次实践支队以日本城市轨道交通系统为核心的调研主题。

古关隆章教授随后介绍了古关研究室的基本情况与研究方向。研究室长期聚焦于交通系统中的控制技术、电磁执行器设计与轨道交通自动化领域，致力于将控制理论应用于实际铁路系统的建模、控制与优化。随着城市轨道交通系统复杂程度的不断提升，实验室近年来加强了对列车高精度定位、线性电机控制等关键技术的研究。

长井健介同学介绍了其在列车位置检测方面的研究工作。研究以提升列车运行中位置检测的实时性与可靠性为目标，提出基于GNSS、惯性测量单元与激光雷达等多源传感器融合的定位方案。通过在山形县与东京近郊的实地试验，发现在人口稀疏的山形县，GNSS系统延迟保持在约0.8秒；而在东京近郊，受周围建筑物干扰，系统延迟显著波动。研究提出通过扫描匹配算法对沿线特征结构进行识别，辅助列车自主定位，减轻对地面信标的依赖。

张皓翔同学针对GNSS定位方法的延时问题提出了改善方案。通过RTK和PPK定位方法的对比分析，研究发现环境因素对时间补偿的敏感性，得出"时间补偿对环境敏感，只能适用于环境较为单一的地方"的重要结论。

孟轩朗同学的研究聚焦于城市轨道交通能量的高效利用。她提出利用RBE（再生制动能量）能量回收技术减少多辆列车协同运行时的整体网络能量消耗。通过对多车协同的最小单元（2辆列车）进行软件模拟，实验发现通过列车间的配合，虽然单独列车的加速减速不再是最快方案，但列车网络消耗的总能量减小，使用的RBE能量增加。

上野爽同学展示了他设计制作的小型轨道条轮装置，用于模拟铁道打滑场景。针对低出生率导致的铁路工人数量减少以及站台门对停车位置的高精度要求，该1/10比例的滚轮试验台系统利用线性电机推力模拟车轮与轨道之间的粘附力变化，成功重现实际列车在不同滑移速度下的粘附特性，为评估铁路牵引控制技术提供了高效的实验平台。

通过这次深入的学术交流，支队成员对日本轨道交通技术的前沿研究有了更全面的认识，特别是在列车精确控制、智能定位、节能优化等关键技术方面获得了宝贵的启发，为后续的研究工作奠定了重要的理论基础。`
    },
    railclub: {
        title: '东京大学铁道研究会',
        date: '2025年7月22日',
        summary: '与东京大学铁道研究会的四位同学进行深入交流，了解了日本大学生的铁道文化、专业学习与兴趣爱好的结合。通过问答形式探讨了日本铁路的优势特色、未来发展挑战、以及铁道爱好者的成长历程，深入了解了日本社会对轨道交通的独特情感和文化认同。',
        images: [
            { src: 'images/7-22/DSC04928.jpg', caption: '铁道研究会会长向支队介绍铁道研究会' },
            { src: 'images/7-22/DSC04934.jpg', caption: '支队同学分享中国铁路相关内容' },
            { src: 'images/7-22/DSC04953.jpg', caption: '东大同学分享日本铁路相关内容' },
            { src: 'images/7-22/DSC04956.jpg', caption: '东大同学与支队同学围坐交流' },
            { src: 'images/7-22/DSC04964.jpg', caption: '东大同学回答支队同学提问' },
            { src: 'images/7-22/IMG_2690.jpg', caption: '东大同学向支队同学展示不同列车模型' },
            { src: 'images/7-22/IMG_2702.jpg', caption: '支队与东大铁道研究会成员合影' }
        ],
        content: `7月22日，支队与东京大学铁道研究会的四位同学进行了深入的交流，通过问答的形式了解了日本大学生的铁道文化和专业学习背景。

第一位同学来自法学部大二，从小就是铁道迷，特别喜欢研究铁路时刻表和列车运行时间安排。他对家乡的JR奈良线有着特殊的感情，认为日本铁路最大的优势是线路覆盖广泛、出行便利。他也关注到日本乡下铁路线路面临废站风险的问题，未来希望能在交通公司或政府交通部门工作。

第二位同学主修化学，研究方向是电池相关技术。他从小参加铁路公司活动培养了对铁路的兴趣，特别喜欢各线路富有地域特色的发车音乐，以及家乡舒适浪漫的寝台列车。他认为日本铁路运行效率极高，一小时内可通过三十列列车令人惊叹。同时他也指出铁路在地震等自然灾害面前显得脆弱，城乡线路客流差距造成运营困难。他希望未来能进入JR集团的电池研究机构，将专业知识应用于铁路领域。

第三位同学是经济学大四学生，主修国际经济学。他从小住在电车沿线，在初高中加入轨道交通协会，喜欢尝试驾驶不同车型。他特别欣赏日本大城市中各私铁公司不同的运营风格，以及"缓急接续"系统的优秀设计。他最难忘的经历是乘坐小田急浪漫特快等特色列车。他对即将建成的中央新干线充满期待，认为将大幅缩短东京名古屋间的通勤时间。

第四位是刚入学的大一新生，还未选定专业方向。他在大学才加入铁道协会，终于找到了志同道合的朋友。他喜欢乘坐少见车型欣赏沿途风景，特别喜欢从东海道新干线车窗看富士山。他认为日本铁路票务系统设计优秀，新干线与在来线共用系统使换乘十分方便。

在深入讨论中，同学们分析了日本轨道交通的诸多特点：

关于出行习惯，东京人更倾向使用轨道交通而非驾车，因为拥车成本高昂，而轨道交通通常比开车更快速便利。虽然存在"通勤地狱"现象，但这在世界大城市都较为常见。

关于城市规划，山手线以内是先有城市再建铁路，而山手线以外则是先规划铁路再发展城市，因此东京城外的轨道交通换乘条件更优。不同铁路公司主要通过统一的IC卡系统实现协同运营。

关于票务系统，目前约60%的人仍在车站现场购票，线上订票系统相对不够便利，不同公司有不同的APP，缺乏整合。新干线虽然不强制订座，但由于自由席与订座价格相近，提前订座越来越普遍。

关于铁道文化的培养，与从小住在轨道交通沿线的生活环境、精致合理的实物模型火车玩具、以及整体社会氛围都有密切关系。新干线多建在市区是因为建设较早、征地成本较低的历史原因。

通过这次交流，支队深入了解了日本铁道文化的深厚底蕴，以及年轻一代对轨道交通的热情和专业思考，这种将个人兴趣与专业学习相结合的方式，为我们提供了很好的启发。`
    },
    nri: {
        title: 'NRI野村综研',
        date: '2025年7月23日',
        summary: '在野村综合研究所，我们学习了日本轨道交通的商业模式和运营管理经验。特别是在数字化转型、客户服务优化等方面的创新实践，给我们留下了深刻印象。',
        images: [
            { src: 'images/example.jpg', caption: 'NRI总部大楼' },
            { src: 'images/example.jpg', caption: '会议室讨论' },
            { src: 'images/example.jpg', caption: '数字化展示' }
        ],
        content: `7月23日，支队访问了野村综合研究所（NRI），这是日本知名的管理咨询和系统集成公司，在轨道交通数字化转型方面有着丰富的经验和成功案例。

在NRI，我们深入了解了日本轨道交通行业的商业模式创新，特别是如何通过数字技术提升运营效率和客户体验。NRI的专家们分享了他们在帮助日本各大铁路公司进行数字化转型过程中的经验和洞察。

此次访问让我们对轨道交通行业的未来发展趋势有了更加清晰的认识，也为我们的研究工作提供了重要的实践参考。`
    }
};

// 初始化时间线详情功能
function initTimelineDetails() {
    const modal = document.getElementById('detailModal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const timelineItems = document.querySelectorAll('.timeline-item[data-detail]');

    // 为时间线项目添加点击事件
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const detailKey = this.getAttribute('data-detail');
            const data = timelineData[detailKey];
            if (data) {
                showDetailModal(data);
            }
        });
    });

    // 关闭模态框事件
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function showDetailModal(data) {
        const modal = document.getElementById('detailModal');
        const modalTitle = document.querySelector('.modal-title');
        const modalDate = document.querySelector('.modal-date');
        const contentSummary = document.querySelector('.content-summary');
        const contentText = document.querySelector('.content-text');
        const galleryMainImg = document.querySelector('.gallery-main-img');
        const galleryCaption = document.querySelector('.gallery-caption');
        const galleryThumbnails = document.querySelector('.gallery-thumbnails');

        // 设置标题和日期
        modalTitle.textContent = data.title;
        modalDate.textContent = data.date;
        
        // 设置简要描述
        contentSummary.innerHTML = `<p>${data.summary}</p>`;
        
        // 设置详细内容
        const paragraphs = data.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
        contentText.innerHTML = paragraphs;

        // 设置图片画廊
        if (data.images && data.images.length > 0) {
            // 设置主图片
            galleryMainImg.src = data.images[0].src;
            galleryMainImg.alt = data.images[0].caption;
            galleryCaption.textContent = data.images[0].caption;
            
            // 创建缩略图
            galleryThumbnails.innerHTML = '';
            data.images.forEach((image, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.innerHTML = `<img src="${image.src}" alt="${image.caption}">`;
                thumbnail.addEventListener('click', () => switchGalleryImage(index, data.images));
                galleryThumbnails.appendChild(thumbnail);
            });

            // 初始化画廊导航
            initGalleryNavigation(data.images);
        }

        // 显示模态框
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// 画廊功能
let currentImageIndex = 0;
let currentImages = [];

function initGalleryNavigation(images) {
    currentImages = images;
    currentImageIndex = 0;
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    prevBtn.onclick = () => {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        switchGalleryImage(currentImageIndex, images);
    };

    nextBtn.onclick = () => {
        currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        switchGalleryImage(currentImageIndex, images);
    };

    // 键盘导航 - 只有在详情模态框显示且全屏查看器未显示时才处理
    const handleKeydown = function(e) {
        const modal = document.getElementById('detailModal');
        const fullscreenViewer = document.getElementById('fullscreenViewer');
        
        // 只有详情模态框显示且全屏查看器未显示时才处理
        if (!modal.classList.contains('show') || 
            (fullscreenViewer && fullscreenViewer.classList.contains('show'))) {
            return;
        }
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextBtn.click();
        }
    };

    // 移除可能存在的旧监听器，添加新的
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', handleKeydown);
}

function switchGalleryImage(index, images) {
    const galleryMainImg = document.querySelector('.gallery-main-img');
    const galleryCaption = document.querySelector('.gallery-caption');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');

    // 更新当前索引
    currentImageIndex = index;
    
    // 更新主图片
    galleryMainImg.src = images[index].src;
    galleryMainImg.alt = images[index].caption;
    
    // 更新图片说明
    galleryCaption.textContent = images[index].caption;

    // 更新缩略图状态
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// 初始化选项卡功能
function initTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 移除所有活动状态
            navTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // 添加loading效果
            this.classList.add('loading');
            
            // 延迟切换，增加过渡效果
            setTimeout(() => {
                this.classList.remove('loading');
                this.classList.add('active');
                
                const targetSection = document.getElementById(targetTab);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                
                // 触发自定义事件，用于跟踪页面访问
                dispatchTabChangeEvent(targetTab);
            }, 150);
        });
    });
}

// 分发选项卡切换事件
function dispatchTabChangeEvent(tabName) {
    const event = new CustomEvent('tabChanged', {
        detail: { tabName: tabName }
    });
    document.dispatchEvent(event);
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察时间线项目
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // 观察专题卡片
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // 观察成员卡片
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// 初始化图片懒加载
function initImageLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-loading');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-loading');
            imageObserver.observe(img);
        });
    }
}

// 移动端优化
function initMobileOptimizations() {
    // 检测触摸设备
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // 优化移动端导航 - 使用节流函数防止频繁触发
    let lastScrollY = window.scrollY;
    let ticking = false;
    const nav = document.querySelector('.nav');
    
    function updateNavVisibility() {
        const currentScrollY = window.scrollY;
        
        // 增加一个最小滚动距离阈值，避免小幅滚动造成跳动
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // 向下滚动时隐藏导航
                nav.style.transform = 'translateY(-100%)';
            } else if (currentScrollY < lastScrollY) {
                // 向上滚动时显示导航
                nav.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateNavVisibility);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
}

// 平滑滚动到指定元素
function smoothScrollTo(element) {
    if (element) {
        const offsetTop = element.offsetTop - 80; // 考虑固定导航的高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 图片预加载功能
function preloadImages() {
    const images = [
        'images/example.jpg',
        'images/logo.png'
        // 可以添加更多需要预加载的图片
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    // 如果全屏查看器或详情模态框正在显示，不处理选项卡切换
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    const detailModal = document.getElementById('detailModal');
    
    if (fullscreenViewer && fullscreenViewer.classList.contains('show')) {
        return; // 全屏查看器优先处理键盘事件
    }
    
    if (detailModal && detailModal.classList.contains('show')) {
        return; // 详情模态框优先处理键盘事件
    }
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeTab = document.querySelector('.nav-tab.active');
        const tabs = Array.from(document.querySelectorAll('.nav-tab'));
        const currentIndex = tabs.indexOf(activeTab);
        
        let newIndex;
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
            newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        tabs[newIndex].click();
        tabs[newIndex].focus();
    }
});

// 添加页面可见性API支持
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面不可见时暂停动画
        document.body.classList.add('page-hidden');
    } else {
        // 页面可见时恢复动画
        document.body.classList.remove('page-hidden');
    }
});

// 错误处理和回退
window.addEventListener('error', function(e) {
    console.warn('页面加载出现问题，启用基础功能模式');
    // 确保基本的选项卡功能正常工作
    initBasicTabFunctionality();
});

// 基础选项卡功能（回退方案）
function initBasicTabFunctionality() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            navTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            this.classList.add('active');
            const targetSection = document.getElementById(targetTab);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
    });
}

// 预加载图片
preloadImages();

// 导出函数供外部使用
window.RailWebsite = {
    switchTab: function(tabName) {
        const tab = document.querySelector(`[data-tab="${tabName}"]`);
        if (tab) {
            tab.click();
        }
    },
    
    getCurrentTab: function() {
        const activeTab = document.querySelector('.nav-tab.active');
        return activeTab ? activeTab.getAttribute('data-tab') : null;
    }
};

// 全屏图片查看器
function initFullscreenViewer() {
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    const fullscreenImg = document.querySelector('.fullscreen-img');
    const fullscreenCaption = document.querySelector('.fullscreen-caption');
    const fullscreenCounter = document.querySelector('.fullscreen-counter');
    const fullscreenClose = document.querySelector('.fullscreen-close');
    const fullscreenBackdrop = document.querySelector('.fullscreen-backdrop');
    const fullscreenPrev = document.querySelector('.fullscreen-prev');
    const fullscreenNext = document.querySelector('.fullscreen-next');
    const currentNum = document.querySelector('.current-num');
    const totalNum = document.querySelector('.total-num');

    let fullscreenImages = [];
    let fullscreenIndex = 0;

    // 关闭全屏查看器
    function closeFullscreen() {
        fullscreenViewer.classList.remove('show');
        document.body.style.overflow = '';
    }

    // 显示全屏图片
    function showFullscreenImage(index) {
        if (fullscreenImages.length === 0) return;
        
        fullscreenIndex = index;
        const image = fullscreenImages[index];
        
        fullscreenImg.src = image.src;
        fullscreenImg.alt = image.caption;
        fullscreenCaption.textContent = image.caption;
        currentNum.textContent = index + 1;
        totalNum.textContent = fullscreenImages.length;
        
        fullscreenViewer.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // 切换到上一张图片
    function showPrevImage() {
        const newIndex = fullscreenIndex > 0 ? fullscreenIndex - 1 : fullscreenImages.length - 1;
        showFullscreenImage(newIndex);
    }

    // 切换到下一张图片
    function showNextImage() {
        const newIndex = fullscreenIndex < fullscreenImages.length - 1 ? fullscreenIndex + 1 : 0;
        showFullscreenImage(newIndex);
    }

    // 事件监听器
    fullscreenClose.addEventListener('click', closeFullscreen);
    fullscreenBackdrop.addEventListener('click', closeFullscreen);
    fullscreenPrev.addEventListener('click', showPrevImage);
    fullscreenNext.addEventListener('click', showNextImage);

    // 键盘控制
    document.addEventListener('keydown', function(e) {
        if (!fullscreenViewer.classList.contains('show')) return;
        
        switch(e.key) {
            case 'Escape':
                closeFullscreen();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                showPrevImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                showNextImage();
                break;
        }
    });

    // 为主图片添加点击事件（在详情模态框中）
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-main-img')) {
            const detailModal = document.getElementById('detailModal');
            if (detailModal.classList.contains('show')) {
                // 获取当前图片数据
                fullscreenImages = currentImages;
                showFullscreenImage(currentImageIndex);
            }
        }
    });

    // 导出函数供外部调用
    window.openFullscreen = function(images, index = 0) {
        fullscreenImages = images;
        showFullscreenImage(index);
    };
}