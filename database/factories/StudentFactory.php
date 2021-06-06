<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Student;
use Faker\Generator as Faker;

$factory->define(Student::class, function (Faker $faker) {
    return [
        'fname' => $faker->firstName($gender = 'male'|'female'),
        'lname' => $faker->lastName($gender = 'male'|'female'),
        'email'=> $faker->email(),
        'password' => $faker->password()
    ];
});
