FROM python:3.8-buster
RUN apt-get update && apt-get install -y cron busybox
COPY script.py /bin/my_python
COPY root /tmp/root.crontab
RUN crontab /tmp/root.crontab
RUN chmod +x /bin/my_python
CMD busybox syslogd -C; cron -L 2 -f