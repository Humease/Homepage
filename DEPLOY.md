# GitHub Push 가이드

## 1. GitHub에 새 저장소 만들기

1. [GitHub](https://github.com) 로그인 후 **New repository** 클릭
2. Repository name 예: `Homepage` 또는 `humease-homepage`
3. **Public** 선택, **Add a README file**은 체크하지 않음 (이미 로컬에 있음)
4. **Create repository** 클릭

## 2. 로컬에서 Git 초기화 후 Push

프로젝트 폴더에서 아래 명령을 **순서대로** 실행하세요.

```bash
# 프로젝트 폴더로 이동
cd "d:\OneDrive - Humease\VibeCoding\Homepage"

# Git 초기화 (이미 되어 있으면 생략)
git init

# 모든 파일 스테이징
git add .

# 첫 커밋
git commit -m "Initial commit: 휴미즈 홈페이지"

# 기본 브랜치를 main으로 (필요한 경우)
git branch -M main

# GitHub 저장소 연결
git remote add origin https://github.com/Humease/Homepage.git

# Push
git push -u origin main
```

이미 로컬에 `git init`과 `remote`가 있다면, 아래만 실행하면 됩니다.

```bash
cd "d:\OneDrive - Humease\VibeCoding\Homepage"
git add .
git commit -m "Update: 로고 및 스타일 반영"
git push origin main
```

## 3. GitHub Pages 설정

Push 후 GitHub 저장소에서:

1. **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` (또는 `gh-pages` 사용 시 해당 브랜치), 폴더 **/ (root)** 또는 **/docs**
4. **Save**

정적 사이트는 `npm run build` 후 `out/` 폴더 내용을 해당 브랜치/폴더에 올리거나, GitHub Actions로 자동 배포하는 방식이 필요합니다.
