FROM golang:1.16.7


RUN apt update && apt install -y tcpdump libpcap-dev curl

RUN go install github.com/hsiafan/httpdump@latest
