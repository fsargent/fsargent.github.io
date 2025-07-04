# Felix Sargent's Personal Website

This repository contains the source code for my personal website, felixsargent.com. It's a simple, static website built with HTML and CSS, and hosted on GitHub Pages.

## Running Locally

To preview the website locally, you can use `browser-sync`, which provides a live-reloading server.

1.  **Install Node.js and npm:** If you don't have them installed, you can download them from [nodejs.org](https://nodejs.org/).

2.  **Install browser-sync:** Open your terminal and run the following command:
    ```bash
    npm install -g browser-sync
    ```

3.  **Start the server:** In your terminal, navigate to the root directory of this project and run:
    ```bash
    browser-sync start --server --files "**/*"
    ```

This will start a local server and open the website in your default browser. Any changes you make to the files will automatically reload the page.

Alternatively, you can use Python's built-in web server:
```bash
python3 -m http.server
```
Then open your browser to `http://localhost:8000`.
