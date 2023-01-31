server {
        listen 8080;
        server_name 3.141.166.71;
        location / {
                proxy_pass http://127.0.0.1:8000;
        }
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
}
server {

        listen 80;
        listen [::]:80;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name 3.141.166.71;
        add_header 'Access-Control-Allow-Origin' *;

        location / {
                try_files $uri $uri/ =404;
        }

}