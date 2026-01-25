# 휴미즈 Homepage → GitHub Push 스크립트
# PowerShell에서: .\push-to-github.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# .git이 없거나 깨졌을 수 있으므로 항상 init 시도 (이미 정상이면 "Reinitialized"만 출력)
git init 2>$null
$valid = (git rev-parse --is-inside-work-tree 2>$null) -eq "true"
if (-not $valid) {
    if (Test-Path .git) { Remove-Item -Recurse -Force .git }
    git init
}
git branch -M main

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
git pull origin main --allow-unrelated-histories --no-edit
git push -u origin main

Write-Host "`n완료: https://github.com/Humease/Homepage" -ForegroundColor Green
