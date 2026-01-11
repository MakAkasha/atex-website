@echo off
echo ================================================
echo  PUSH TO GITHUB - ATEX Website
echo ================================================
echo.

echo STEP 1: Creating GitHub repository...
echo Please go to: https://github.com/new
echo Repository name: atex-website
echo Description: ATEX Smart Home Solutions Website - Next.js 15
echo Make it: PUBLIC (not private)
echo Don't check "Add a README file"
echo Click "Create repository"
echo.
pause

echo.
echo STEP 2: After creating the repository, run these commands:
echo.
echo git remote add origin https://github.com/MakAkasha/atex-website.git
echo git branch -M main
echo git push -u origin main
echo.
echo ================================================
pause