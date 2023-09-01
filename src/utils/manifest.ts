import pkg from '../../package.json';

const sharedManifest: Partial<chrome.runtime.ManifestBase> = {
  content_scripts: [
    {
      js: ['src/entries/contentScript/primary/main.ts'],
      matches: ['*://*/*'],
      run_at: 'document_end',
    },
  ],
  icons: {
    16: 'icons/logo-icon.png',
    19: 'icons/logo-icon.png',
    32: 'icons/logo-icon.png',
    38: 'icons/logo-icon.png',
    48: 'icons/logo-icon.png',
    64: 'icons/logo-icon.png',
    96: 'icons/logo-icon.png',
    128: 'icons/logo-icon.png',
    256: 'icons/logo-icon.png',
    512: 'icons/logo-icon.png',
  },

  permissions: ['alarms', 'storage', 'cookies', 'nativeMessaging'],
  web_accessible_resources: ['*.css', 'fonts/*.woff2'],
};

const browserAction = {
  default_icon: {
    16: 'icons/logo-icon.png',
    19: 'icons/logo-icon.png',
    32: 'icons/logo-icon.png',
    38: 'icons/logo-icon.png',
  },
};

const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ['src/entries/background/script.ts'],
    persistent: false,
  },
  browser_action: browserAction,
  permissions: [...sharedManifest.permissions, '*://*/*'],
};

const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: {
    service_worker: 'src/entries/background/serviceWorker.ts',
  },
  host_permissions: ['*://*/*'],
};

export function getManifest(manifestVersion: number): chrome.runtime.ManifestV2 | chrome.runtime.ManifestV3 {
  const manifest = {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
  };

  if (manifestVersion === 2) {
    return {
      ...manifest,
      ...ManifestV2,
      manifest_version: manifestVersion,
      web_accessible_resources: ['**.css', '**woff2'],
    };
  }

  if (manifestVersion === 3) {
    return {
      ...manifest,
      ...ManifestV3,
      manifest_version: manifestVersion,
    };
  }

  throw new Error(`Missing manifest definition for manifestVersion ${manifestVersion}`);
}
