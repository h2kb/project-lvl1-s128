install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish -u $(U)

lint:
	npm run eslint test

.PHONY: