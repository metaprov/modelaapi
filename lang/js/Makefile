# Shell to use with Make
SHELL := /bin/bash

# Set important Paths
PROJECT := modeldapi
LOCALPATH := $(CURDIR)/$(PROJECT)

# Export targets not associated with files
.PHONY: clean publish

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
	npm run build

# Install the package from source
install:
	npm install

# Deploy to PyPI
upload:
	npm publish --access public
	