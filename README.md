# jupyterlab-singleton-provider

Example of a JupyterLab extension that provides e.g. a webcomponent singleton to other extensions

[![Build Status](https://github.com/timkpaine/jupyterlab-singleton-provider/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/timkpaine/jupyterlab-singleton-provider/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/timkpaine/jupyterlab-singleton-provider/branch/main/graph/badge.svg)](https://codecov.io/gh/timkpaine/jupyterlab-singleton-provider)
[![License](https://img.shields.io/github/license/timkpaine/jupyterlab-singleton-provider)](https://github.com/timkpaine/jupyterlab-singleton-provider)
[![PyPI](https://img.shields.io/pypi/v/jupyterlab-singleton-provider.svg)](https://pypi.python.org/pypi/jupyterlab-singleton-provider)

## Overview

This repo demonstrates how to create a JupyterLab extension which provides a singleton service to other extensions.
In this case, we're not actually providing a service, but instead a singleton WebComponent.

An example consumer is implemented in [jupyterlab-singleton-consumer](https://github.com/timkpaine/jupyterlab-singleton-consumer).

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
