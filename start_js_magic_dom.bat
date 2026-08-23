@echo off
title JS Magic DOM - He Thong Thuc Hanh JavaScript DOM Cho Hoc Sinh
echo ========================================================
echo   ✨ JS MAGIC DOM - NEN TANG HOC JAVASCRIPT CHO HOC SINH
echo ========================================================
echo.
set PATH=C:\Program Files\nodejs;%PATH%

cd /d "%~dp0"
echo Dang khoi dong Web Server tai http://localhost:3000 ...
echo Mo trinh duyet va truy cap: http://localhost:3000
echo.

call npm.cmd run dev
pause
