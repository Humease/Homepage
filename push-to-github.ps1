# 휴미즈 Homepage → GitHub Push 스크립트
# PowerShell에서: .\push-to-github.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# 이전 Git 작업이 남긴 잠금 파일 제거 (could not lock config file 오류 방지)
foreach ($lock in @(".git\config.lock", ".git\index.lock")) {
    if (Test-Path $lock) {
        Remove-Item -Force $lock -ErrorAction SilentlyContinue
        Write-Host "잠금 제거: $lock" -ForegroundColor Yellow
    }
}

# 이미 유효한 Git 저장소면 init 건너뛰기 (config 잠금 오류 방지)
$valid = (git rev-parse --is-inside-work-tree 2>$null) -eq "true"
if (-not $valid) {
    if (Test-Path .git) { Remove-Item -Recurse -Force .git }
    git init
}
$errPrev = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
git branch -M main 2>$null
$ErrorActionPreference = $errPrev

$errPrev = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
git remote remove origin 2>$null
$ErrorActionPreference = $errPrev
git remote add origin https://github.com/Humease/Homepage.git

# 커밋을 위해 사용자 정보 필요 (전역 미설정 시 이 저장소에만 설정)
if (-not (git config --get user.email 2>$null)) {
    git config user.email "contact@humease.com"
    git config user.name "Humease"
    Write-Host "이 저장소에 Git 사용자( contact@humease.com / Humease )를 임시 설정했습니다. 본인 정보는: git config --global user.email \"your@email.com\"; git config --global user.name \"Your Name\"" -ForegroundColor Yellow
}
git add .
$short = git status --short 2>$null
$errPrev = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
git rev-parse --verify HEAD 2>$null | Out-Null
$isNew = ($LASTEXITCODE -ne 0)
$ErrorActionPreference = $errPrev
if ($short -or $isNew) {
    git commit -m $(if ($isNew) { "Initial commit: 휴미즈 홈페이지" } else { "Update: 휴미즈 홈페이지" })
}
# 원격에만 있는 커밋(GitHub README 등)이 있으면 먼저 가져와서 합침
$errPrev = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
git fetch origin 2>$null
$ErrorActionPreference = $errPrev
# 충돌 시 로컬(우리) 버전 우선 적용 (-X ours)하여 병합 완료 (Git이 stderr로 출력해도 스크립트가 멈추지 않도록 처리)
$errPrev = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
git pull origin main --allow-unrelated-histories --no-edit -X ours 2>&1 | Out-Null
$ErrorActionPreference = $errPrev
git push -u origin main
# 푸시 거부 시: GitHub PAT에 'workflow' 권한 필요 (Settings → Developer settings → Personal access tokens)

Write-Host "`n완료: https://github.com/Humease/Homepage" -ForegroundColor Green
