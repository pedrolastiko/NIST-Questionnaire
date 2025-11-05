# NIST CSF 2.0 Questionnaire

This repository hosts a single-page React application that delivers an interactive bilingual (FR/EN) questionnaire for assessing cyber-security maturity against the NIST CSF 2.0 framework. The page is completely static: it is composed of an `index.html` file that pulls React, Recharts, Tailwind and Babel from public CDNs.

## Local preview

Because the application is a single HTML file, you can preview it without a build step:

1. Clone the repository locally.
2. Open `index.html` directly in your browser, or serve the folder with any static HTTP server (e.g. `python -m http.server`).

## Deploying to GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that publishes the site to GitHub Pages. To deploy:

1. Push the repository to GitHub and make sure your default branch is `main` (or update the workflow trigger to match your branch name).
2. In your GitHub repository, navigate to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source. GitHub will automatically detect the included workflow.
4. Push to `main` (or click **Run workflow** from the **Actions** tab) to trigger a deployment. The action checks out the repository, bundles the entire workspace as an artifact, and publishes it to GitHub Pages.
5. After the workflow completes, the live site URL appears in the workflow summary and in **Settings → Pages**.

### Customizing the workflow

If you need to deploy a different folder (for example, if you later add a build step that outputs files into `dist/`), edit the `path` value in the `Upload artifact` step of `.github/workflows/deploy.yml`.

To change the trigger branch, modify the `on.push.branches` section in the same workflow file.

## Importing existing responses

The application can import answers that were previously exported as JSON:

1. Open the deployed site.
2. Click **Import JSON**, choose your saved JSON export, and confirm the browser prompt. The page refreshes with the imported metadata and answers.

## License

This project is provided as-is without an explicit license. Please add a license file if you plan to share or reuse the code publicly.
