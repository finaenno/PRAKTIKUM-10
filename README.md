# ERP UNS Webapp

## Development

Pre-requisite:
- npm 7.x or later (support for workspaces)
- Node.js 14.x recommended

```
npm -v
# to install latest version of npm
# npm i npm -g
```

Install dependencies from the root directory

```
npm i
```

Copy .env.example to .env

```
cp .env.example .env
```
Run npm start
```
npm start
```

### Development Guidelines
Please follow [Development Guidelines](DEVELOP.md)

## Config
### Development
In development, environment variables can be set through a dotenv file inside .env, these will be
accessible inside the process.env variable (e.g process.env.PORT).


### Production
In staging and production, environment variables must be set inside respective k8s configmap.yaml files, e.g in
https://github.com/erpifuns/infra/tree/main/terraform (TBD)

