Remove-Item "../client_packages/browser/*" -Recurse -force
Copy-Item "./build/*" -Destination "../client_packages/browser" -Recurse -force
Remove-Item "./build/*" -Recurse -force