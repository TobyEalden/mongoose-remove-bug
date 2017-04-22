# mongoose-remove-bug
Reproduction of `TypeError: Cannot read property 'scope' of undefined` bug

# instructions
```
git clone https://github.com/tobyealden/mongoose-remove-bug
cd mongoose-remove-bug
npm install
node index
```

output:

```
/home/nuc/dev/mongoose-remove-bug/node_modules/mongoose/lib/document.js:1898
        return this.get.call(this.$__.scope || this, path);
                                     ^

TypeError: Cannot read property 'scope' of undefined
    at model.Object.defineProperty.get [as remove] (/home/nuc/dev/mongoose-remove-bug/node_modules/mongoose/lib/document.js
:1898:38)
    at applyHooks (/home/nuc/dev/mongoose-remove-bug/node_modules/mongoose/lib/services/model/applyHooks.js:95:25)
    at Function.compile (/home/nuc/dev/mongoose-remove-bug/node_modules/mongoose/lib/model.js:3619:3)
    at Mongoose.model (/home/nuc/dev/mongoose-remove-bug/node_modules/mongoose/lib/index.js:408:22)
    at /home/nuc/dev/mongoose-remove-bug/index.js:7:24
    at Object.<anonymous> (/home/nuc/dev/mongoose-remove-bug/index.js:17:2)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Function.Module.runMain (module.js:441:10)
    at startup (node.js:139:18)
    at node.js:990:3
```
