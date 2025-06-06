# Contributing to DevSecOps

Thank you for your interest in contributing to our DevSecOps project! This document provides guidelines for different types of contributions.

## Table of Contents
- [Updating the DevSecOps Diagram](#updating-the-devsecops-diagram)
- [Contributing to the Documentation](#contributing-to-the-documentation)
- [Adding Tools to the Repository](#adding-tools-to-the-repository)
- [Creating a Pull Request](#creating-a-pull-request)

## Updating the DevSecOps Diagram

1. Fork this repository to your GitHub account.
2. Open the diagram file using [draw.io](https://draw.io):
   - Select **File > Open from > Device**
   - Choose the `DevSecOps.xml` file from your forked repository
3. Make your desired edits to the diagram.
4. Save both the XML source and export a PNG image:
   - Save the XML: **File > Save** or **File > Save As**
   - Export as PNG: **File > Export as > PNG**
5. Commit both the updated `DevSecOps.xml` and `DevSecOps.png` files to your forked repository.
6. Create a Pull Request (see [Creating a Pull Request](#creating-a-pull-request) section).

## Contributing to the Documentation

1. Fork this repository to your GitHub account.
2. Make your changes to the README.md or other documentation files.
3. Create a Pull Request with your improvements.

## Adding Tools to the Repository

1. Fork this repository to your GitHub account.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/DevSecOps
   cd DevSecOps/tools
   ```
3. Update the tools directory and corresponding `README.md` file.
4. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add/update tools: BRIEF DESCRIPTION" -s
   git push
   ```
5. Create a Pull Request (see next section).

## Creating a Pull Request

1. Navigate to your forked repository on GitHub.
2. Click on "Pull Request" and then "New Pull Request".
3. Ensure the base repository is the original DevSecOps repository and the head repository is your fork.
4. Provide a clear title and description for your Pull Request, explaining the changes you've made.
5. Submit the Pull Request.

Thank you for contributing to make this project better!
