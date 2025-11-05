# NIST CSF 2.0 Questionnaire

This project delivers an interactive, bilingual (FR/EN) questionnaire that helps teams evaluate their cyber-security maturity against the NIST Cybersecurity Framework (CSF) 2.0. The application focuses on being simple to share and operate: it ships as a single static HTML file that can be opened locally or hosted on any static site provider.

## Key capabilities

* **Dashboard overview** – real-time averages by Function and Category, radar and bar charts with target tracking, and progress pills for each CSF Function.
* **Guided assessments** – pre-filled questions mapped to CSF Functions, with pilot guidance content (roles, processes, tooling) for the first control.
* **Autosave and portability** – responses persist in the browser via `localStorage`, and can be exported/imported as JSON or CSV for collaboration and archiving.
* **Bilingual experience** – toggle between French and English labels, prompts, and helper texts at any time during the assessment.

## Installation

Although the app requires no build tooling, the repository includes helper workflows for easy hosting.

### Local preview

1. Clone the repository.
2. Open `index.html` directly in your browser, or serve the directory with any static HTTP server (for example `python -m http.server`).

### Deploying to GitHub Pages

1. Push the repository to GitHub and confirm that your default branch is `main` (or adjust the workflow trigger).
2. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source. The included workflow (`.github/workflows/deploy.yml`) will be detected automatically.
3. Push to `main` or trigger **Run workflow** from the **Actions** tab. The action uploads the static site and publishes it to GitHub Pages.
4. Once the workflow finishes, the public URL appears in the workflow summary and under **Settings → Pages**.

#### Customising the workflow

* To deploy a different output directory, edit the `path` in the “Upload artifact” step of `.github/workflows/deploy.yml`.
* To change the trigger branch, update `on.push.branches` in the same workflow file.

## Working with saved assessments

1. Open the application (locally or via GitHub Pages).
2. Click **Import JSON**, select the previously exported assessment, and accept the confirmation prompt to load the stored metadata and answers.

## License

This project is provided as-is without an explicit license. Please add a license if you intend to redistribute the code.
