# Arup Halder portfolio

Personal portfolio for backend software engineering applications, published with GitHub Pages at <https://beaprogram.github.io/>.

It is plain HTML, CSS and a small amount of JavaScript. There is no framework, package manager, bundler or build step. What is in this folder is exactly what gets published.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content, including every project, role and skill. |
| `styles.css` | Layout, colours, typography and responsive rules. |
| `script.js` | Mobile navigation menu only. Nothing else depends on it. |
| `favicon.svg` | Browser tab icon ("AH" on white). |
| `media/` | Published project media: `oceansight-edge-demo.mp4` and its poster frame `oceansight-edge-poster.jpg`. |
| `resume.pdf` | The downloadable résumé. Linked from the navigation, introduction and contact section. |
| `.nojekyll` | Empty file that tells GitHub Pages to publish the files as they are. Do not delete it. |
| `README.md` | This guide. It is public once the repository is published. |
| `.gitignore` | Keeps local-only files out of the repository (see below). |

Some files in this folder stay on this computer only. `.gitignore` excludes `Arup_Halder_Resume.pdf` (the original résumé copy, identical to `resume.pdf`), the `Video/` folder (raw media not linked from the site), `.DS_Store` and scratch or tool files. To publish something from `Video/`, copy it into `media/` with a lowercase, hyphenated name and link it from `index.html`.

## Preview locally

Run a local web server from this folder, then open <http://127.0.0.1:8000>:

```sh
cd /Volumes/PortableSSD/Projects/Portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Stop it with `Ctrl+C`.

Do not preview by double-clicking `index.html`. Résumé links use the site-root path `/resume.pdf`, which only works through a web server.

Python's preview server does not support partial downloads, so skipping ahead in the OceanSight Edge video may not work locally, and Safari may not play it at all. Check video playback on the published site.

Before publishing a change, check:

- The page at desktop width and at about 375px wide (browser developer tools, device toolbar).
- The Tab key reaches every link and button in order, with a visible blue focus ring.
- At phone width, the Menu button opens and closes the navigation, and Escape closes it.
- With JavaScript disabled, all content and navigation links are still visible.
- No placeholders remain: `grep -n "data-placeholder" index.html` should print nothing.
- No em dashes in the copy: `perl -CSD -ne 'print "$.: $_" if /\x{2014}/' index.html` should print nothing.

## Add a project

Adding a project only needs an edit to `index.html`. No CSS, JavaScript or dependency changes are required.

1. **Choose a unique project ID.** Use lowercase words joined by hyphens, based on the project name, for example `ledger-sync`. The ID appears in four places in the block below: the two comments, the article `id` (`project-ledger-sync`) and the heading `id` (`project-ledger-sync-title`). Check that it is not already used:

   ```sh
   grep -n 'id="project-ledger-sync' index.html
   ```

2. **Copy the example article** below into the "More projects" list, between two existing `PROJECT END` and `PROJECT START` comments.
3. **Replace every example value** as described in the next section.
4. **Preview locally** and run the checks above.

### Example article

```html
<!-- PROJECT START: ledger-sync -->
<article class="project project--compact" id="project-ledger-sync" aria-labelledby="project-ledger-sync-title">
  <div class="project__body">
    <div class="project__main">
      <p class="project__type">Team project</p>
      <h3 class="project__title" id="project-ledger-sync-title">Ledger Sync</h3>
      <p class="project__summary">One sentence on what the project does and what it is built with.</p>
      <ul class="project__evidence">
        <li>One concrete, verifiable result, with its measurement context.</li>
        <li>A second result or engineering decision, if there is one.</li>
      </ul>
    </div>
    <div class="project__aside">
      <div>
        <p class="project__label">Stack</p>
        <ul class="tags" aria-label="Technologies">
          <li>Java 21</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <ul class="project__links">
        <li><a href="https://github.com/beaprogram/ledger-sync">Source code<span class="visually-hidden"> for Ledger Sync</span></a></li>
      </ul>
    </div>
  </div>
  <details class="project__details">
    <summary>Implementation details<span class="visually-hidden"> for Ledger Sync</span></summary>
    <div class="details-grid">
      <div class="details-item">
        <h4>Testing</h4>
        <p>What the tests check, how many there are and where they run.</p>
      </div>
      <div class="details-item">
        <h4>My contribution</h4>
        <p>Team projects only: the parts you personally designed and built.</p>
      </div>
    </div>
  </details>
</article>
<!-- PROJECT END: ledger-sync -->
```

### Update a project's content

| Content | Where | Notes |
| --- | --- | --- |
| Title | `h3.project__title` and both `visually-hidden` spans | The hidden spans give screen-reader users a unique link name, such as "Source code for Ledger Sync". Keep them in step with the title. |
| Type | `p.project__type` | For example "Personal project", "Team project" or a domain such as "Algorithms". |
| Description | `p.project__summary` | One sentence. Say what it does before how it is built. |
| Evidence | `ul.project__evidence` (supporting) or `div.project__highlight` (featured) | One or two points. Keep dataset, benchmark and test context next to every number. |
| Technologies | `ul.tags`, one `li` per technology | Short names. Put backend and data technologies first. |
| Links | `ul.project__links` | Real URLs only. A missing link is a placeholder (see below), never an empty or `#` link. |
| Contribution | A `details-item` headed "My contribution" | **Team projects only.** Solo projects leave it out. |
| Deeper explanation | `details-item` blocks inside `details` | Optional. Use `h4` headings for featured projects. Supporting projects may use plain paragraphs. |

A second link, for a live demo, looks like this:

```html
<li><a href="https://example.com">Live demo<span class="visually-hidden"> of Ledger Sync</span></a></li>
```

When a URL is not available yet, use a visible, non-clickable placeholder, so the gap stays obvious and the placeholder check above catches it before publishing:

```html
<li><span class="placeholder" data-placeholder>Live demo: [LEDGER SYNC DEMO URL]</span></li>
```

A demo video goes inside `div.project__main`, after the evidence points. `preload="none"` means visitors only download the video when they press play, and the poster frame shows a real image from the video until then:

```html
<figure class="project__media">
  <video controls preload="none" playsinline width="1920" height="1080" poster="media/ledger-sync-poster.jpg" aria-label="Ledger Sync demo">
    <source src="media/ledger-sync-demo.mp4" type="video/mp4">
    <a href="media/ledger-sync-demo.mp4">Download the Ledger Sync demo video (MP4)</a>
  </video>
  <figcaption>Demo, 1 min, with captions shown in the video.</figcaption>
</figure>
```

- Set `width` and `height` to the video's real pixel size, so the page does not jump when it loads.
- Make the poster from a frame of the video itself, for example by pausing it in QuickTime Player, choosing **Edit > Copy**, then **File > New from Clipboard** in Preview and exporting a JPEG about 960 pixels wide.
- Keep videos small. The OceanSight Edge video is 4.9 MB. GitHub warns about files over 50 MB and rejects files over 100 MB.
- A narrated video needs captions. The OceanSight Edge video has them burned into the picture.

### Feature a project or move it to the supporting list

The page shows two featured projects under "Featured projects" and a compact list under "More projects". To move a project, cut everything from its `PROJECT START` comment to its `PROJECT END` comment and paste it into the other list. Then adjust it as follows.

**To feature a project:**

1. Change `project--compact` to `project--featured` on the `article`.
2. Replace the `ul.project__evidence` list with a single highlight:

   ```html
   <div class="project__highlight">
     <p class="project__label">Engineering highlight</p>
     <p>The single strongest engineering result, with its context.</p>
   </div>
   ```

3. Give each `details-item` an `h4` heading. Featured details show in two columns on wide screens.

**To move a project to the supporting list:** reverse those steps. Change the class to `project--compact` and turn the highlight into one or two `project__evidence` points.

Keep two featured projects, so a recruiter sees the strongest work first without scrolling far.

## Replace the résumé

1. Export the new résumé as a PDF.
2. Replace `resume.pdf` in this folder, keeping exactly that file name. Every résumé link points to `/resume.pdf`, so nothing else needs editing.
3. When downloaded from "Download Resume", the file is saved as `Arup_Halder_Resume.pdf`. To change that name, edit the `download` attribute on that link in the contact section of `index.html`.
4. Preview locally, open the Resume link and check that the new version appears.

Anything in the PDF, such as a phone number, is public once published, even though the page itself only shows email.

## Update experience and education

Both are in the "EXPERIENCE AND EDUCATION" section of `index.html`. Each role or degree is an `article class="entry"`.

- **New role:** copy an existing experience `article`, place it first (most recent at the top) and update the title, organisation, dates, one-sentence summary and two or three points.
- **Dates:** write them out ("July 2024 to May 2025") and keep the machine-readable `datetime` values in step, for example `<time datetime="2024-07">July 2024</time>`.
- **Education:** update the degree, institution, dates and GPA in the matching `article`. Change "expected January 2027" once the degree is completed.
- **Skills:** each row in the "SKILLS" section is one category (`dt`) and a comma-separated list (`dd`). Add or remove technologies in the list.

## Publish

The site is published as a GitHub Pages **user site** from a repository named `beaprogram.github.io`. That repository name is what makes the address `https://beaprogram.github.io/`.

First-time setup (only after deciding what to publish; see the launch checklist):

1. Create a public repository named `beaprogram.github.io` on GitHub.
2. Commit the site files and push them to its `main` branch.
3. In the repository, open **Settings > Pages**, set **Source** to "Deploy from a branch", and choose `main` and `/ (root)`.
4. Wait for the Pages deployment to finish, then open <https://beaprogram.github.io/> and test the résumé link.

Later changes: edit, preview locally, commit and push to `main`. GitHub Pages redeploys automatically, usually within a few minutes.

**If the site is ever published as a project site instead** (any other repository name, served at `https://beaprogram.github.io/<repository>/`), the root path breaks. Change every `href="/resume.pdf"` to `href="resume.pdf"`, and update the canonical link and `og:url` in the `head` to the new address. The CSS, JavaScript and favicon already use relative paths.

**A new GitHub repository does not appear here automatically.** This page is written by hand. To show a new project, add an article as described above and publish the change.

## Content backlog

These projects are kept off the public page until their missing details are confirmed.

### DocuFlow

- Type: cloud project.
- Summary: serverless document processing on AWS with a Python NLP pipeline, with all infrastructure defined in CloudFormation.
- Technologies: AWS, CloudFormation, Python.
- Missing: code URL (no matching repository found on the `beaprogram` GitHub account).

### HFXAIR

- Type: team project, built by a five-person team and shipped through GitLab CI.
- Summary: mobile app with React Native, a Flask API and MariaDB.
- Technologies: React Native, Flask, MariaDB, GitLab CI.
- Missing: code URL (a public `beaprogram/HFXAir` repository exists; confirm it is this project and suitable to link) and the "My contribution" description, which this team project needs.

### Other possible additions

- DecisionRail's recorded walkthrough video, published with release v0.10.0 of the repository.
- A live demo link for OceanSight Edge. The Streamlit app linked from its repository redirected to a sign-in page when last checked.
- A Homebase demo. The page currently links only its source code.
- DecisionRail's refunds, reconciliation, policy replay and operator console, which the page does not currently describe.

## Launch checklist

Status as of 27 September 2026.

- [x] **DecisionRail Kafka outbox status.** Implementation and delivery tests are on `main` (commit `a4e554a`), with passing CI and no open pull requests. The page describes it as delivered. Re-check if the repository changes before launch.
- [x] **Demo links and placeholders.** The Homebase demo link was removed, and the page has no placeholders. OceanSight Edge shows its narrated demo video from `media/`. DecisionRail, Homebase and Dispatch Core link source code only.
- [ ] **Implementation explanations.** DecisionRail's details are drawn from its ADR 0001, `PaymentStore.java`, its integration tests and `docs/PROGRESS.md`. Homebase's details are drawn from its CI workflow, test files and `V1__init.sql`. Confirm the wording.
- [x] **Dispatch Core figures.** Suite run on 27 September 2026 at commit `a80a1ae` with Python 3.14: 156 tests passed; statement coverage is 100% for `quadtree.py` and `routing.py`, 95% for `dispatcher.py` and 98% for the whole package. The page states exactly this. The Dispatch Core README still says 153 tests and lists the dispatcher at 100%.
- [x] **LinkedIn link.** Opened manually and confirmed; LinkedIn blocks automated checks.
- [x] **Source résumé copy.** `Arup_Halder_Resume.pdf` is excluded by `.gitignore`. Only `resume.pdf` is published.
- [x] **Updated résumé.** `resume.pdf` is the corrected web export: Dispatch Core states 98 percent package-wide coverage across 156 tests, the OceanSight link points to `beaprogram/OceanSight`, and it contains no phone number.
- [x] **Repository and destination.** `beaprogram.github.io` at <https://beaprogram.github.io/>. Canonical and `og:url` are set. The repository did not exist when last checked.
- [x] **Social image.** Deliberately omitted until a suitable real image exists.
