# Steps to Create and Deploy

## Initialize Composer

- Make sure you have MAMP and Postgres installed and running
- Download comopser: https://getcomposer.org/composer-stable.phar
- In Terminal, run:

  - `mv ~/Downloads/composer-stable.phar /usr/local/bin/composer`
  - `chmod 755 /usr/local/bin/composer`
  - `echo 'export PATH="$HOME/.composer/vendor/bin:$PATH"' >> ~/.bash_profile`
  - `ls /Applications/MAMP/bin/php` and take note of the most recent version
  - `echo 'export PATH="/Applications/MAMP/bin/php/php7.4.2/bin:$PATH"' >> ~/.bash_profile` substituting your latest version of php for `php7.4.2`

- close terminal window and open a new one

## Forking/Cloning This Repo

After forking and cloning this repo to your local machine:

- `cd` to repo dir
- run `composer install`
- run `cp .env.example .env`

## Connect to db

Connect to psql and

```
CREATE DATABASE contacts;
\c contacts
CREATE TABLE people (id SERIAL, name VARCHAR(16), age INT);
INSERT INTO people (name, age) VALUES ('matt', 40);
```

Run `whoami` and take note over your computer's username (mine is `matthuntington`)

In `.env` file, adjust the following code block:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

so it is:

```
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=contacts
DB_USERNAME=matthuntington
DB_PASSWORD=
```

Instead of `matthuntington` insert your computer's username (what you found when running `whoami`)

## Start App

- run `php artisan serve`
- go to http://localhost:8000/
- if browser asks you to generate key, click the button
- go to http://localhost:8000/index.html
