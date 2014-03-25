test:
	clear && mocha \
		--require should \
		--reporter spec \
		--slow 5s \
		--harmony-generators

coveralls:
	node --harmony ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage

.PHONY: test
