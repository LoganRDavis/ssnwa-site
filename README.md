# SouthernScapes Landscape & Irrigation
A static website built for a client.
Deployed to google cloud storage buckets and routed with cloudflare.
https://www.southernscapesnwa.com

## Uploading

```
gsutil -m rsync -x '.git.*|.vscode.*|README.md|colors.txt' -d -r ./ gs://www.southernscapesnwa.com
```
