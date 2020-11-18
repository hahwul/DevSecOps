## Add contents
Please add content and send us PR!
1. fork this repo
2. Edit contents from forked repo
3. Make and Send PR(Pull Request)

## Add tools
1. form this repo
2. clone forked repo
```
$ git clone https://github.com/{your}/DevSecOps
```
3. build contribute tools
```
$ cd DevSecOps/tools
$ make contribute
```
4. Add tool with `./add-tool`
```
$ ./add-tool -url https://github.com/zaproxy/zaproxy
```
5. Distribute README.md with `./distribute-readme`
```
$ ./distribute-readme
```
6. commit and push `data.json` and `README.md`
```
$ git add data.json README.md ; git commit -m "commit and push" ; git push
```
7. Make and Send PR(Pull Request)

## Add i18n
I welcome the Pull Request for the translation so that everyone can read it easily 😁
1. fork this repo
2. make directory and file to `i18m/*`
e.g 
```
i18n/ko-KR/
i18n/ko-KR/README.md
i18n/ko-KR/DevSecOps.xml
i18n/ko-KR/DevSecOps.png
```
3. Translate contents
4. Make and Send PR(Pull Request)
