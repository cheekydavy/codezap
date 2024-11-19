FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/cheekydavy/codezap /root/cheekydavy

WORKDIR /root/cheekydavy/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
