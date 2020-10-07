# Steps to Create and Deploy

- Make sure you have MAMP and Postgres installed and running
- Download comopser: https://getcomposer.org/composer-stable.phar
- In Terminal, run: 

  - `mv ~/Downloads/composer-stable.phar /usr/local/bin/composer`
  - `chmod 755 /usr/local/bin/composer`
  - `composer global require laravel/installer`
  - `echo 'export PATH="$HOME/.composer/vendor/bin:$PATH"' >> ~/.bash_profile`
  - `ls /Applications/MAMP/bin/php` and take note of the most recent version
  - run `echo 'export PATH="/Applications/MAMP/bin/php/php7.4.2/bin:$PATH"' >> ~/.bash_profile` substituting your latest version of php for `php7.4.2`

- close terminal window and open a new one
- go to where you want your app to be and run `laravel new blog` substituting the name of your app for `blog`
- `cd` into your app's dir
- run `php artisan serve`
- go to http://localhost:8000/
