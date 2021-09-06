# Shell to use with Make
SHELL := /bin/bash

# Set important Paths
PROJECT := modela
LOCALPATH := $(CURDIR)/$(PROJECT)

# Export targets not associated with files
.PHONY: test coverage pip clean publish uml build deploy install upload

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

# Targets for testing
test:
	python setup.py test

# Build the universal wheel and source distribution
build: 
	python3 setup.py sdist bdist_wheel

# Install the package from source
install:
	python3 setup.py install

# Deploy to PyPI
upload-to-test:
	twine upload -r pypitest dist/*.tar.gz

upload: build
	python3 -m twine upload --repository pypi dist/*.tar.gz --verbose

packagify: build
	python3 packagify.py