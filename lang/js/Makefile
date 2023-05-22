# Shell to use with Make
SHELL := /bin/bash

# Set important Paths
PROJECT := modelaapi
LOCALPATH := $(CURDIR)/$(PROJECT)

# Export targets not associated with files
.PHONY: clean build install upload

# Clean build files
clean:
	find . -name "*.pyc" -print0 | xargs -0 rm -rf
	find . -name "__pycache__" -print0 | xargs -0 rm -rf
	find . -name "*-failed-diff.png" -print0 | xargs -0 rm -rf
	-rm -rf htmlcov
	-rm -rf .coverage
	-rm -rf build
	-rm -rf dist
	-rm -rf $(PROJECT).egg-info
	-rm -rf .eggs
	-rm -rf site
	-rm -rf classes_$(PROJECT).png
	-rm -rf packages_$(PROJECT).png
	-rm -rf docs/_build

# Build the universal wheel and source distribution
build:
	npm run build:prod

# Install the package from source
install:
	npm install

copy:
	rm -rf ~/go/src/github.com/metaprov/modela/frontend/modela-client/node_modules/modelaapi
	cp -R . ~/go/src/github.com/metaprov/modela/frontend/modela-client/node_modules/modelaapi

# Deploy to PyPI
upload: build
	npm publish --access public

