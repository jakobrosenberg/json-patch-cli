# json-patch-cli

### CLI patcher for JSON files

### Usage
```
Usage: cli [options] [command]

Options:
  -h, --help                  display help for command

Commands:
  set <file> <path> <value>
  unset <file> <path>
  push <file> <path> <value>
  help [command]              display help for command
```

### Examples

#### Set value
```
npx json-patch-cli set package.json script/prebuild "rimraf dist"
```

#### Unset value
```
npx json-patch-cli unset package.json script/prebuild
```

#### Push value
```
npx json-patch-cli push package.json keywords "package" 
```