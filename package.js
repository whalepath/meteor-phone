Package.describe({
  summary: 'Forked node-phone package',
  version: "1.0.4",
  name: 'phone'
});

Npm.depends({"phone": "https://github.com/whalepath/node-phone/tarball/a14db6b746fde413b54e92234d9ae662133b058a"});
Package.onUse(function(api){
    api.addFiles('main.js');
    api.export('NodePhone');
});
