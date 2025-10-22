// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {

    // GSAPのScrollTriggerプラグインを登録
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. ヒーローセクション（自己紹介）のアニメーション ---
    const heroTl = gsap.timeline({ delay: 0.4 }); // 少し遅らせる
    heroTl.from('.hero-name', {
        opacity: 0,
        y: 40, // 動きを大きく
        rotationX: -90, // X軸を中心に回転して登場
        transformOrigin: '50% 50% -50px', // 奥行きを感じさせる
        duration: 1.2, // アニメーションを長く
        ease: 'power3.out'
    })
    .from('.hero-specialty', {
        opacity: 0,
        y: 30,
        rotationX: -90,
        transformOrigin: '50% 50% -30px',
        duration: 1.0,
        ease: 'power3.out'
    }, '-=0.8') // 0.8秒早く開始
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        rotationX: -90,
        transformOrigin: '50% 50% -30px',
        duration: 1.0,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.scroll-down', {
        opacity: 0,
        y: -30, // 上から下へ
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.7');


    // --- 2. ポートフォリオセクションのアニメーション ---
    
    // ▼▼▼ 新しく追加したタイトルのアニメーション ▼▼▼
    gsap.from('.portfolio-section .section-title, .portfolio-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.portfolio-section', // セクションが見えたら
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 1.0,
        stagger: 0.2, // 2つの要素をずらして表示
        ease: 'power3.out'
    });
    // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

    // 既存のカードのアニメーション
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '.portfolio-grid', // グリッドが見えたら
            start: 'top 85%', // 少し早めに開始
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 60, // 動きを大きく
        scale: 0.9, // 小さく、奥から手前に来る動き
        duration: 1.0, // アニメーションを長く
        ease: 'power3.out',
        stagger: 0.15 // ずらし時間を少し短く
    });


    // --- 3. お問い合わせセクションのアニメーション ---
    
    gsap.from('.contact-section .section-title, .contact-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40, // 動きを大きく
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.contact-description', {
        scrollTrigger: {
            trigger: '.contact-description',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30, // 動きを大きく
        duration: 1.0,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        scrollTrigger: {
            trigger: '.cta-button',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.7, // より小さい状態から
        duration: 1.0, // アニメーションを長く
        ease: 'back.out(1.8)' // より強くバウンド
    });

});