# 현재 변경사항 커밋 후 푸시 (Cursor 종료 후 실행 권장)
Set-Location $PSScriptRoot

foreach ($lock in @(".git\config.lock", ".git\index.lock")) {
    if (Test-Path $lock) {
        Remove-Item -Force $lock -ErrorAction SilentlyContinue
        Write-Host "잠금 제거: $lock" -ForegroundColor Yellow
    }
}

$msg = "Animations, 404, dev basePath, about single para, meta title"
git add -A
$status = git status --short
if (-not $status) {
    Write-Host "커밋할 변경이 없습니다." -ForegroundColor Gray
    exit 0
}
git commit -m $msg
if ($LASTEXITCODE -ne 0) {
    Write-Host "커밋 실패. Cursor를 완전히 종료한 뒤 다시 실행해 보세요." -ForegroundColor Red
    exit 1
}
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n푸시 완료. GitHub Actions에서 배포가 진행됩니다." -ForegroundColor Green
} else {
    Write-Host "`n푸시 실패. 네트워크/인증을 확인하세요." -ForegroundColor Red
    exit 1
}
