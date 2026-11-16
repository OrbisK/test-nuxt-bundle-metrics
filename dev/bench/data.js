window.BENCHMARK_DATA = {
  "lastUpdate": 1794844456143,
  "repoUrl": "https://github.com/OrbisK/test-nuxt-bundle-metrics",
  "entries": {
    "Bundle size": [
      {
        "commit": {
          "author": {
            "email": "robin.kehl@singular-it.de",
            "name": "OrbisK",
            "username": "OrbisK"
          },
          "committer": {
            "email": "robin.kehl@singular-it.de",
            "name": "OrbisK",
            "username": "OrbisK"
          },
          "distinct": true,
          "id": "2a1582dfe5d06fe368bbedd39830f146db98476d",
          "message": "ci: add bundle size test",
          "timestamp": "2026-11-16T16:51:25+01:00",
          "tree_id": "241725ebabe5e7f92ec074038a3e0756da2846e1",
          "url": "https://github.com/OrbisK/test-nuxt-bundle-metrics/commit/2a1582dfe5d06fe368bbedd39830f146db98476d"
        },
        "date": 1794844455411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Client build (gzip)",
            "value": 63028,
            "unit": "bytes"
          },
          {
            "name": "Client build (brotli)",
            "value": 56228,
            "unit": "bytes"
          },
          {
            "name": "Client build, app code (gzip)",
            "value": 7731,
            "unit": "bytes"
          },
          {
            "name": "Client build, app code (brotli)",
            "value": 6516,
            "unit": "bytes"
          },
          {
            "name": "Client build, dependencies (gzip)",
            "value": 55291,
            "unit": "bytes"
          },
          {
            "name": "Client build, dependencies (brotli)",
            "value": 49711,
            "unit": "bytes"
          },
          {
            "name": "Server build (gzip)",
            "value": 133984,
            "unit": "bytes"
          },
          {
            "name": "Server build (brotli)",
            "value": 114695,
            "unit": "bytes"
          },
          {
            "name": "Server build, app code (gzip)",
            "value": 17144,
            "unit": "bytes"
          },
          {
            "name": "Server build, app code (brotli)",
            "value": 14712,
            "unit": "bytes"
          },
          {
            "name": "Server build, dependencies (gzip)",
            "value": 116847,
            "unit": "bytes"
          },
          {
            "name": "Server build, dependencies (brotli)",
            "value": 99979,
            "unit": "bytes"
          },
          {
            "name": "Client JS files (gzip)",
            "value": 63028,
            "unit": "bytes"
          },
          {
            "name": "Client JS files (brotli)",
            "value": 56228,
            "unit": "bytes"
          },
          {
            "name": "Client CSS files (gzip)",
            "value": 3307,
            "unit": "bytes"
          },
          {
            "name": "Client CSS files (brotli)",
            "value": 2799,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}