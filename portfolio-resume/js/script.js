// 다크모드 토글 기능
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 로컬 스토리지에서 테마 설정 복원
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}
updateThemeIcon();

// 테마 토글 버튼 클릭 이벤트
themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

// 테마 아이콘 업데이트
function updateThemeIcon() {
    const isDark = htmlElement.classList.contains('dark');
    themeToggle.querySelector('span').textContent = isDark ? '☀️' : '🌙';
}

// 부드러운 스크롤 네비게이션
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer로 섹션 페이드인 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // 한 번 애니메이션이 실행된 후 옵저버 제거 (선택사항)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// fade-in 클래스를 가진 모든 요소 관찰
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// 네비게이션 활성 상태 표시 (스크롤 위치에 따라)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    // 네비게이션 링크 활성 상태 업데이트
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.classList.remove('text-sky-400', 'dark:text-sky-400', 'font-bold');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('text-sky-400', 'dark:text-sky-400', 'font-bold');
        }
    });
});

// 페이지 로드 시 스크롤 최상단으로 이동
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// 프로젝트 카드 호버 효과 (추가 상호작용)
document.querySelectorAll('[class*="shadow-lg"]').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});
