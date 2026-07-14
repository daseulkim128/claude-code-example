# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

포트폴리오 및 이력서를 위한 정적 HTML 웹사이트입니다. Tailwind CSS와 Vanilla JavaScript를 사용하여 구현된 모던 디자인의 원페이지 애플리케이션입니다.

## 파일 구조

```
.
├── portfolio-resume/
│   ├── index.html          # 메인 페이지 (모든 섹션 포함)
│   ├── css/
│   │   └── styles.css      # 커스텀 애니메이션 및 스타일
│   ├── js/
│   │   └── script.js       # 인터랙티브 기능 (테마 토글, 네비게이션 등)
│   └── assets/             # 이미지 및 기타 에셋
├── tailwind.config.js      # Tailwind 설정 (현재 미사용)
└── CLAUDE.md              # 이 파일
```

## 기술 스택

- **HTML5**: 페이지 구조
- **Tailwind CSS**: CDN을 통해 로드 (utility-first CSS framework)
- **Vanilla JavaScript**: DOM 조작 및 인터랙티브 기능
- **localStorage**: 테마 설정 저장

## 주요 기능

### 1. 다크/라이트 테마 토글
- `localStorage`에 사용자의 테마 선택 저장
- 페이지 로드 시 저장된 테마 복원
- 테마 토글 버튼이 🌙/☀️ 아이콘으로 상태 표시

**관련 파일**: `portfolio-resume/js/script.js` (1-26줄)

### 2. 부드러운 스크롤 네비게이션
- 내비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤
- 앵커 링크(`#about`, `#skills` 등)로 구현

**관련 파일**: `portfolio-resume/js/script.js` (28-41줄)

### 3. Intersection Observer를 이용한 페이드인 애니메이션
- 섹션이 뷰포트에 진입할 때 자동으로 페이드인 애니메이션 실행
- `fade-in` 클래스로 관리

**관련 파일**: `portfolio-resume/js/script.js` (43-62줄), `portfolio-resume/css/styles.css` (4-17줄)

### 4. 네비게이션 활성 상태 표시
- 현재 스크롤 위치에 따라 활성 섹션의 네비게이션 링크 강조
- 스크롤 이벤트로 구현

**관련 파일**: `portfolio-resume/js/script.js` (64-84줄)

## 개발 가이드

### 새로운 섹션 추가

1. **HTML에 섹션 추가** (`index.html`)
   ```html
   <section id="new-section" class="fade-in">
       <!-- 콘텐츠 -->
   </section>
   ```

2. **내비게이션에 링크 추가**
   ```html
   <a href="#new-section" class="text-gray-300 hover:text-sky-400 transition">섹션명</a>
   ```

3. **Tailwind 클래스로 스타일링**
   - 다크 모드 고려: `dark:` prefix 사용
   - 반응형 디자인: `sm:`, `md:`, `lg:` prefix 사용

### 스타일 추가

- **CSS 애니메이션**: `portfolio-resume/css/styles.css`에 추가
- **Tailwind 커스텀**: 만약 Tailwind 설정이 필요하면 `tailwind.config.js` 활용 (현재는 CDN 사용 중)

### JavaScript 수정

- **기존 기능**: `portfolio-resume/js/script.js`의 해당 섹션 수정
- **새 기능**: 함수 단위로 추가 (전역 오염 최소화)

## 색상 스키마

### 주요 색상

- **Primary**: Sky Blue (`from-sky-400`, `#0ea5e9`)
- **Secondary**: Violet/Purple (`to-violet-500`, `to-purple-600`)
- **Background (Dark)**: `#0a0a12`
- **Text**: Gray (`text-gray-300`, `text-gray-400`)

### 다크 모드 고려사항

- 모든 색상 Tailwind 클래스에 `dark:` variant 포함
- 백그라운드, 텍스트 색상이 다크 모드에서 적절히 표시되는지 확인
- `::-webkit-scrollbar` 스타일도 다크 모드 지원

## 성능 최적화

- **Tailwind CDN**: 프로덕션 배포 시 빌드 프로세스 고려 (번들 크기 최소화)
- **Intersection Observer**: 페이드인 애니메이션 일회성 실행으로 불필요한 리플로우 방지
- **로컬 저장소**: localStorage 용량 최소화 (현재는 테마 1개만 저장)

## 브라우저 호환성

- 최신 브라우저 지원 (Chrome, Firefox, Safari, Edge)
- Intersection Observer API 사용 (IE 미지원)
- CSS Grid/Flexbox 기반 (IE 11 부분 지원)

## 배포

이 프로젝트는 정적 사이트이므로:
- 빌드 프로세스 불필요
- 모든 파일을 호스팅 서버에 업로드
- CDN을 통해 Tailwind CSS와 SVG 아이콘 로드
- `portfolio-resume/` 디렉토리가 웹 루트가 되도록 설정

## 주의사항

### CDN 의존성
- Tailwind CSS를 CDN에서 로드하므로 인터넷 연결 필수
- 프로덕션 배포 전에 필요하면 로컬 빌드로 전환 권장

### 응답성
- 모든 섹션이 모바일-퍼스트 설계로 구현
- 테스트 시 다양한 화면 크기에서 확인

### JavaScript 경고
- 일부 기능이 JavaScript에 의존하므로 비활성화 시 제한
- localStorage 비활성화 시 테마 설정이 저장되지 않음
