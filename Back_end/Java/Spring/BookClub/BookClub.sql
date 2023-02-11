-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bookclub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bookclub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookclub` DEFAULT CHARACTER SET utf8 ;
USE `bookclub` ;

-- -----------------------------------------------------
-- Table `bookclub`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclub`.`users` (
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
-- Table `bookclub`.`bookshelfs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclub`.`bookshelfs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `book_shelf_name` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bookshelfs_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookshelfs_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bookclub`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bookclub`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookclub`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `author` VARCHAR(255) NULL,
  `thought` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `bookshelf_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_books_bookshelfs1_idx` (`bookshelf_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_bookshelfs1`
    FOREIGN KEY (`bookshelf_id`)
    REFERENCES `bookclub`.`bookshelfs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
