import pkg from '../../package.json';

const sharedManifest: Partial<chrome.runtime.ManifestBase> = {
  icons: {
    16: 'logo/logo-icon.png',
    19: 'logo/logo-icon.png',
    32: 'logo/logo-icon.png',
    38: 'logo/logo-icon.png',
    48: 'logo/logo-icon.png',
    64: 'logo/logo-icon.png',
    96: 'logo/logo-icon.png',
    128: 'logo/logo-icon.png',
    256: 'logo/logo-icon.png',
    512: 'logo/logo-icon.png',
  },

  permissions: ['alarms', 'storage', 'cookies'],
};

const browserAction = {
  default_icon: {
    16: 'logo/logo-icon.png',
    19: 'logo/logo-icon.png',
    32: 'logo/logo-icon.png',
    38: 'logo/logo-icon.png',
  },
  "default_title": "Transaction Scanner",
  "default_popup": "index.html",
};

const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ['/background/index.ts'],
    persistent: false,
  },
  browser_action: browserAction,
  web_accessible_resources: ['*.css', 'fonts/*.woff2'],
  permissions: [...sharedManifest.permissions, '*://*/*'],
};

const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: {
    service_worker: '/background/index.ts',
  },
  host_permissions: ['*://*/*'],
  "web_accessible_resources": [{ 
    "resources": ["*.css", "fonts/*.woff2"],
    "matches": ["<all_urls>"]
  }]
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
