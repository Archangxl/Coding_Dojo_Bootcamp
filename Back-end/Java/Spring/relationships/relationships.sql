-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema relationships
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema relationships
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `relationships` DEFAULT CHARACTER SET utf8 ;
USE `relationships` ;

-- -----------------------------------------------------
-- Table `relationships`.`persons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `relationships`.`persons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `relationships`.`licenses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `relationships`.`licenses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` VARCHAR(255) NULL,
  `expiration_date` DATE NULL,
  `state` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `person_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_licenses_persons_idx` (`person_id` ASC) VISIBLE,
  CONSTRAINT `fk_licenses_persons`
    FOREIGN KEY (`person_id`)
    REFERENCES `relationships`.`persons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
