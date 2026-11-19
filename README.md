# Elias's Hockey Camp

Off-ice hockey training app for the iPad. Works offline; everything saves on the iPad.

## Put it online (free, GitHub Pages)
1. Sign in at github.com and create a new **public** repository named `hockey-camp`.
2. Click **uploading an existing file**, drag in everything from this folder (index.html, sw.js, manifest.webmanifest, README.md and the `icons` and `thumbs` folders), then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the app is live at `https://YOUR-USERNAME.github.io/hockey-camp/`.

## Put it on the iPad
1. Open that link in **Safari** on the iPad.
2. Tap **Share → Add to Home Screen → Add**.
3. Open it once from the Home Screen while on Wi-Fi so it saves itself for offline use.

## Updating later
Upload the changed files to the repository again, and change `VERSION` at the top of `sw.js`
(e.g. `hockey-camp-v2`) so the iPad picks up the new version. Close and reopen the app twice.
