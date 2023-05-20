FROM golang:latest


RUN apt update && apt install -y tcpdump libpcap-dev curl

RUN go install github.com/hsiafan/httpdump@latest
