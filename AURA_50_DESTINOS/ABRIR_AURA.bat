@echo off
setlocal
cd /d "%~dp0frontend"
title AURA - React

echo ===========================================
echo            AURA - TRAVEL EDITORIAL

echo ===========================================
echo.
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js nao foi encontrado. Instale em https://nodejs.org/
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Instalando dependencias. Esta etapa precisa de internet...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Falha na instalacao. Confira sua conexao e a mensagem acima.
    pause
    exit /b 1
  )
)

echo.
echo Abrindo AURA. Nao feche esta janela enquanto estiver usando o site.
echo Caso o navegador nao abra automaticamente, acesse http://localhost:5174
call npm.cmd run dev
pause
