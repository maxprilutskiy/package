# A Typescript package template

This is a Typescript package template. It is meant to be used as a starting point for creating new Typescript packages.

## Getting started

1. Click "Use this template" to create a new repository based on this template.
1. Add npm token to the repository's github actions secrets as `NPM_TOKEN`.
1. Clone the new repository to your local machine.
1. Run `pnpm install` to install the dependencies.
1. Update the code in the `src` directory to implement your package's functionality.
1. Run `pnpm build` to build the package.
1. Run `pnpm test` to run the tests.
1. Find and replace all instances of `maxprilutskiy/package` with `your-username/your-repo-name`.
1. Update the `package.json` file with your package's initial version, description, keywords, author, etc.
1. Update the `README.md` file with your package's name, description, usage instructions, etc.
1. Run `pnpm new` to release a new version of the package during the next CI build of the main branch.

## Commands

```bash
# Install dependencies
pnpm install

# Build the package (w/ unbuild, bc it supports cjs + esm builds out of the box)
pnpm build

# Run the tests (w/ vitest bc it's faster)
pnpm test

# Release a new version next time main branch's CI is triggered (w/ changesets)
pnpm new
```

## How to release

1. Modify the code.
1. Make sure `pnpm build` and `pnpm test` pass.
1. Run `pnpm new` to release a new version.
    - This will ask you to select the type of change (major, minor, patch).
    - This will ask you to enter a summary of the changes.
    - This will create a new changeset file in the `.changeset` directory.
1. Push the changes to the main branch and wait for the CI to finish.
    - The CI will open a pull request for you: merge it to get the new version published to npm.

## Commit messages

1. Every commit message is linted by the `commitlint` package, which enforces the conventional commit format.

## Pull requests

1. Every pull request title is linted by the `commitlint`-like GitHub Action, which enforces the conventional commit format.
1. Every pull request is required to have a changeset summary, so that merging of that pull request triggers a new version release. Therefore:
    - Every pull request should have a changeset file in the `.changeset` directory: this file is created by the `pnpm new` command.
    - For pull requests that should not trigger a new version release, you can create an empty changeset file by running `pnpm new --empty`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
