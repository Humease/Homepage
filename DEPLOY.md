# GitHub Push 가이드

## Cursor 터미널에서 푸시하기

Cursor 내부 터미널에서는 Git 쓰기/네트워크 제한으로 `.\push-to-github.ps1`이 실패할 수 있습니다. 아래 중 하나를 사용하세요.

### 방법 A: Cursor에서 한 번에 실행 (권장)

**새 PowerShell 창**을 띄워 그곳에서 푸시하는 스크립트를 실행합니다. 푸시는 Cursor 밖에서 동작해 성공합니다.

```powershell
.\push-to-github-cursor.ps1
```

위 명령을 Cursor 터미널에서 실행하면 새 창이 열리고, 그 창에서 자동으로 `push-to-github.ps1`이 실행됩니다. 완료 후 창은 그대로 두거나 닫으면 됩니다.

### 방법 B: Cursor 터미널에서 직접 시도할 때

1. **소스 제어** 패널에서 진행 중인 작업이 있으면 완료하거나 취소하기 (다른 Git 프로세스 잠금 방지)
2. **새 터미널** 열기 (Ctrl+Shift+`) 후 `cd d:\VibeCoding\Homepage` 로 이동
3. `.\push-to-github.ps1` 실행 시 **권한 요청**이 뜨면 **Allow** 또는 **All** 선택
4. 그래도 실패하면 방법 A 사용 또는 Windows에서 PowerShell을 따로 열어 실행

---

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

## 3. GitHub Pages 설정 (필수)

이 저장소는 **GitHub Actions**로 배포합니다. Push 후 반드시 아래와 같이 맞춰야 합니다.

1. **Settings** → **Pages**
2. **Build and deployment** > **Source** 에서 **GitHub Actions** 선택
3. **Save**

> ⚠️ **"Deploy from a branch"** 를 선택한 상태면 이 워크플로는 동작하지 않습니다. 반드시 **GitHub Actions** 로 바꾸세요.

정적 사이트는 `main` 푸시 시 `.github/workflows/deploy-pages.yml` 이 빌드 후 `out/` 을 업로드하고, deploy-pages 가 Pages 에 배포합니다.
