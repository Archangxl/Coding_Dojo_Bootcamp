-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bookclubwithbrokeraddition
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bookclubwithbrokeraddition
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookclubwithbrokeraddition` DEFAULT CHARACTER SET utf8 ;
USE `bookclubwithbrokeraddition` ;

-- -----------------------------------------------------
-- Table `bookclubwithbrokeraddition`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclubwithbrokeraddition`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `confirm` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bookclubwithbrokeraddition`.`bookshelfs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclubwithbrokeraddition`.`bookshelfs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `book_shelf_name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bookshelfs_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookshelfs_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bookclubwithbrokeraddition`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bookclubwithbrokeraddition`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclubwithbrokeraddition`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `author` VARCHAR(255) NULL,
  `thought` TEXT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `bookshelf_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_books_bookshelfs_idx` (`bookshelf_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_bookshelfs`
    FOREIGN KEY (`bookshelf_id`)
    REFERENCES `bookclubwithbrokeraddition`.`bookshelfs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bookclubwithbrokeraddition`.`book_brokers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclubwithbrokeraddition`.`book_brokers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_book_brokers_books1_idx` (`book_id` ASC) VISIBLE,
  INDEX `fk_book_brokers_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_book_brokers_books1`
    FOREIGN KEY (`book_id`)
    REFERENCES `bookclubwithbrokeraddition`.`books` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_brokers_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bookclubwithbrokeraddition`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
