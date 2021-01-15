cd ..
docker build --tag web-palindromo:1.0.0 --build-arg REACT_APP_URL_SERVICE_ARG="http://127.0.0.1:8400/api/v1/palindromo/" .
cd scripts
