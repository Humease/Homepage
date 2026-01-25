# Cursor 터미널에서 실행 시: 새 PowerShell 창을 띄워 그곳에서 푸시합니다.
# (Cursor 내부 터미널은 Git/네트워크 제한으로 실패할 수 있어, 외부 프로세스로 실행)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$scriptPath = Join-Path $scriptDir "push-to-github.ps1"
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "Set-Location '$scriptDir'; .\push-to-github.ps1"
