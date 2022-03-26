FROM google/cloud-sdk:latest
RUN apt --assume-yes install golang
ENV GO111MODULE on