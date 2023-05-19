FROM ubuntu:latest

RUN apt update && apt install -y tcpdump

ENTRYPOINT [ "tcpdump", "-i", "eth0" ]
