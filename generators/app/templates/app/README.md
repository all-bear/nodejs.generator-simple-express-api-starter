## Starter Info

### App Structure

- `.git-hooks` - this folder contains all your git hook files, it content of this folder will be copied to .git/hooks folder by command `npm run setup-git-hooks` (please note, that git should be initialized before run this command)
- `configs` - files in this folder contains all configuration for your project (this folder also known as `constants` in different projects), mainly it wraps node env variables
- `initializers` - mission of this folder is same with Ruby on Rails initializers folder, all files from this folder will be required only on project start and should initialize everything that app is needed for, like server, database, etc.
- `middlaware` - actually it's same with `initializers` files from this folder will be required after `routes`
- `models` - mongoose models
- `routes` - express routes
- `index.js` - main file, it will initialize express app, and will run the application through the initilization phases, powered by [phase-control](https://www.npmjs.com/package/phase-control)

### NPM Tasks

- `dev` - will start development server with live reload
- `start` - will start production server
- `setup-git-hooks` - will setup git hooks for you (you don't need to run it manually, `setup` task will cover this)
- `setup-env-variables` - will setup local env variables for you, based on `env.example` for you (you don't need to run it manually, `setup` task will cover this)
- `setup` - will setup your project, you need to run this task once when you cloned project