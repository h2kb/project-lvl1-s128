install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish -t $(T) -u $(U)

.PHONY: