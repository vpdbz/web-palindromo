# stop and remove current container, if it exists
docker rm web-palindromo --force || true

# run detached
docker run -d \
--name web-palindromo \
--publish 1337:80 \
web-palindromo:1.0.0
