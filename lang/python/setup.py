import pathlib
from setuptools import setup

# The directory containing this file
HERE = pathlib.Path(__file__).parent

# The text of the README file
README = (HERE / "README.md").read_text()

# This call to setup() does all the work
setup(
    name="modeldapi",
    version="0.1.6",
    description="modeld api for python",
    long_description=README,
    long_description_content_type="text/markdown",
    url="https://github.com/metaprov/modeldapi",
    author="Metaprov",
    author_email="tsagi@modeld.io",
    license="Apache",
    classifiers=[
        "License :: OSI Approved :: Apache License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
    ],
    packages=["github.com.metaprov.modeldapi.pkg.apis.catalog",
              "github.com.metaprov.modeldapi.pkg.apis.data",
              "github.com.metaprov.modeldapi.pkg.apis.inference",
              "github.com.metaprov.modeldapi.pkg.apis.infra",
              "github.com.metaprov.modeldapi.pkg.apis.training"],
    include_package_data=True,
)