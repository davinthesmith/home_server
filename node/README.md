# Node Server
This server handles all incoming and outgoing requests to the persistent datastore.

> If you haven't done so already, be sure to init the project in the root directory before moving on.  See the root README for more details.

## Running the watch process
Run `yarn watch`. This will build the TypeScript files into the `dist` folder and watch for changes.

## Running the tests
Run `yarn test`.  This just runs jest.  You can add flags if you see fit.

## MQTT
The node server spins up an MQTT subscriber for every topic included in the `MQTT_TOPICS` array in the `constants.ts` file. Topics are then registered in the `mqtt/router/routes.ts` file.  Each registration maps the root topic name to the associated handler.  Within each handler, the route is re-evaluated and used to route the payload to the appropriate subfunction within the handler.  Phew, that's a mouthful.  I'm working on making this easier to reason about.


## Database
The schema for the database is managed using knex.  The migration files and seeds are kept in the `db` directory.

### Making a new migration
Changes to the datastore should be done through knex migrations.  You can generate a new migration file by running `yarn migrate-make nameOfYourMigrationGoesHere`. This just generates a .js file in the migrations directory with specific naming convention and a few stubs. You'll have to get your hands dirty with **knex** to write the migration. 

### Running migrations on the database
To update the database to the latest migration, run `yarn migrate-latest`.  

### Reverting changes to the database
To revert the last migration made to the database, run `yarn migrate-down`. Keep in mind that this command just runs the code supplied in the `down` portion of the last migration... it isn't magic.

## GraphQL
All incoming and outgoing requests use GraphQL. 

### Entities
Each entity should have its own directory with the same set of files: `index.ts`, `resolvers.ts`, and `typeDefs.ts`.

### The `root` directory
The `root` directory contains a list of registered entities that are exposed to the *Apollo Server*. Registering entities require manual entries into the `resolvers` and `typeDefs` files in this directory.

### Generating TypeScript types from GraphQL Schema
This project uses the `@graphql-codegen/cli` tool to automatically generate types from the graphql schema.  Unfortunately, this tool is really finicky to setup. Some additional configuration is required to make it more user friendly. At this point, here are the steps used to generate types (assuming you're adding a new entity to the project).
1. In the `graphql` directory, add a new folder for the entity 
1. Copy the `index.ts` file from another entity folder into your folder
1. Add a typeDefs file and export the type information as a const `typeDefs`
1. Add a resolvers file, **stub out the resolvers** represented in the typeDefs from the previous step, and export the resolvers as a const `resolvers`.
1. Register your new entity in the `graphql/root` directory (see: _The `root` directory_).
1. Using the command line, navigate to the `node` directory and run `yarn types`.
1. If the stars aligned, you now have updated, automatically-generated, magical TypeScript types in the `graphql/gen-types.ts` file.
1. If things didn't go as planned: read the errors, revert the changes to `graphql/gen-types.ts`, try to fix the errors, then try to regen the types. (If you don't revert the changes, it'll never work.)