@echo off
echo Starting copy... > copy_log.txt
xcopy "c:\Ottobon\Ex\framerusercontent.com\images\*" "c:\Ottobon\Framer\src\assets\" /Y /S >> copy_log.txt 2>&1
copy "c:\Ottobon\Ex\*.gif" "c:\Ottobon\Framer\src\assets\" /Y >> copy_log.txt 2>&1
echo Finished copy. >> copy_log.txt
