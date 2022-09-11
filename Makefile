prod:
	cd ./client; npm run build
	docker-compose build --no-cache
	docker-compose up -d --force-recreate 
	docker ps

stop:
	docker-compose down

reset:
	docker system prune

sshserver:
	docker exec -it server bash

migrate:
	docker exec -it server npm run premigrate
	docker exec -it server npm run migrate
	docker exec -it server npm run seed