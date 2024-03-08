<a name="readme-top"></a>

# MemoTest Game

## About The Project

Simple memo test game made for kids.

### Prerequisites

You must have Docker installed to run the Backend.

## Frontend

1. Clone the repo
```sh
git clone https://github.com/gcc-florda/memo-test-game.git
```

2. Enter the frontend folder
```sh
cd memo-test-game/frontend
```

3. Install npm packages
```sh
npm i
```

4. Run the project
```sh
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Backend

1. After cloning the repo, enter the backend folder
```sh
cd memo-test-game/backend
```

3. Start Docker containers
```sh
./vendor/bin/sail up -d
```

4. Run the database migration
```sh
./vendor/bin/sail artisan migrate
```

5. Seed the database
```sh
./vendor/bin/sail artisan db:seed --class=MemoTestSeeder
```

### Built With
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![GraphQL][GraphQL]][GraphQL-url]
* [![Lighthouse][Lighthouse]][Lighthouse-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Lighthouse]: https://img.shields.io/badge/lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white
[Lighthouse-url]: https://lighthouse-php.com/
[GraphQL]: https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org/
