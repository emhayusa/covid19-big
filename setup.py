import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()
	
setuptools.setup(
	name='covid19-big',
	version='1.0.0',
	author="Muhammad Hasannudin Yusa",
	author_email="emhayusa@gmail.com",
	description="A Covid19 BIG package",
	long_description=long_description,
	long_description_content_type="text/markdown",
	url="https://github.com/emhayusa/covid19-big",
	packages=setuptools.find_packages(),
	classifiers=[
		"Programming Language :: Python :: 3",
		"License :: OSI Approved :: MIT License",
		"Operating System :: OS Independent",
		],
	install_requires=[
        'Click',
    ],
	entry_points={
        "console_scripts": ['covid19_big=covid19_big.main:welcome']
    },
	include_package_data=True,
	
 )