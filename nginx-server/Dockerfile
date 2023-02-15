FROM nginx:alpine
 
COPY proxy.conf /etc/nginx/nginx.conf

RUN ./configure --add-module=/root/soft/nginx-ssl-ja3 --with-http_ssl_module --with-stream_ssl_module --with-debug --with-stream --with-http_stub_status_module --with-http_v2_module --with-http_gzip_static_module --with-http_sub_module
RUN make && make install