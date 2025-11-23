## Workspace notes: CRX Emulator and hydration warnings

This Next.js app is server-side rendered and uses React hydration. Some browser/IDE extensions (notably **CRX Emulator**) inject attributes into the DOM before React hydrates, which causes hydration-mismatch warnings such as:

```
Hydration mismatch: server rendered HTML didn't match the client.
Difference: <html lang="en"> vs <html lang="en" crxemulator="">
```

If you see this while developing here, do one of the following:

- Preferred — disable the extension for this workspace:
  1. Open the Extensions view in VS Code.
 2. Find **CRX Emulator**.
 3. Click the gear icon → **Disable (Workspace)**.

- If you must keep the extension enabled, disable its DOM instrumentation/validation in the extension settings (if available) or run/debug the extension in an isolated workspace.

- Temporary workaround in code (not recommended long-term): add `suppressHydrationWarning` to the top-level element in `app/layout.js`:

```js
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

Why we don't add the injected attribute on the server: injecting extension-specific attributes into server HTML would bake developer-specific state into SSR output and is incorrect.

If you're unsure what to do, disable CRX Emulator in this workspace and re-run the dev server:

```powershell
npm install
npm run dev
```

If this file should include additional troubleshooting information for your environment, please edit it.
