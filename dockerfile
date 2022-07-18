# production stage 
FROM nginx:stable-alpine as production-stage
RUN ls -la
RUN pwd
COPY /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]