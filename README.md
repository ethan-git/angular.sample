# angular.sample

Visual Studio Code
---

### ubuntu apt install

```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg

sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'


sudo apt update

sudo apt-get install code
```

Node / NPM
---

### ubuntu apt install
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install nodejs

sudo apt-get install npm@5.6.0 

```

Angular / Package install
---

```
npm install package.json

```

- [package.json](https://github.com/ethan-git/angular.sample/blob/master/angular/package.json)

```
sudo npm uninstall -g @angular/cli
sudo npm install --unsafe-perm -g @angular/cli@latest

```