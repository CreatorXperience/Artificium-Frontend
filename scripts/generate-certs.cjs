// scripts/generate-certs.js
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const certDir = path.resolve(__dirname, '../certs');
const keyPath = path.join(certDir, 'localhost-key.pem');
const certPath = path.join(certDir, 'localhost-cert.pem');

if (!fs.existsSync(certDir)) fs.mkdirSync(certDir);

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.log('Generating self-signed certificate...');
  spawnSync(
    'openssl',
    [
      'req',
      '-x509',
      '-newkey',
      'rsa:2048',
      '-nodes',
      '-keyout',
      keyPath,
      '-out',
      certPath,
      '-days',
      '365',
      '-subj',
      '/CN=localhost',
    ],
    { stdio: 'inherit' },
  );

  console.log('Certificate generated ✅');
} else {
  console.log('Certificate already exists, skipping generation.');
}
