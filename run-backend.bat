@echo off
echo =====================================================================
echo  SmartLabTrack v2.0 - Java Spring Boot Backend Server Launcher
echo =====================================================================
echo.

cd /d "%~dp0backend"

where mvn >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Found Maven in PATH. Starting Spring Boot Application...
    mvn spring-boot:run
    goto end
)

echo [WARNING] Maven is not installed in system PATH.
echo.
echo To run this project:
echo 1. Install Apache Maven (or open the project in IntelliJ IDEA / Eclipse / VS Code).
echo 2. Run: mvn spring-boot:run
echo 3. Or package the JAR: mvn clean package and run java -jar target/smartlabtrack-backend-1.0.0.jar
echo.
pause

:end
