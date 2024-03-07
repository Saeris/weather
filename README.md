# 🌦

a tiny weather app build with [Nextjs](https://nextjs.org/) and [Flask](https://flask.palletsprojects.com/en/3.0.x/)

> [!TIP]
>
> Use [uv](https://github.com/astral-sh/uv) for a faster Python development experience!
>
> Installation instructions below will assume you have this CLI tool installed.

## 🧰 Setup

> [!TIP]
>
> <details>
>   <summary>Prerequisites:</summary>
>
> This repo uses Python and Node, and was scaffolded using the following tools.
>
> #### Install `uv`
>
> macOS/Linux:
>
> ```bash
> curl -LsSf https://astral.sh/uv/install.sh | sh
> ```
>
> Windows:
>
> ```ps
> powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
> ```
>
> #### Install `volta`
>
> macOS/Linux:
>
> ```bash
> curl https://get.volta.sh | bash
> ```
>
> Windows:
>
> Download installer from [Volta Getting Started page](https://docs.volta.sh/guide/getting-started#windows-installation)
>
> #### Install `node`
>
> ```bash
> volta install node
> ```
>
> #### Install `yarn`
>
> ```bash
> volta install yarn
> ```
>
> And you're good to go!
>
> </details>

1. Create a new local virtual environment:

   ```bash
   uv venv
   ```

1. Install project dependencies:

   Node:

   ```bash
   yarn
   ```

   Python:

   ```bash
   uv pip install -r requirements.txt
   ```

1. Activate virtual environment:

   ```bash
   yarn activate
   ```

1. And start developing!

   ```bash
   yarn dev
   ```
