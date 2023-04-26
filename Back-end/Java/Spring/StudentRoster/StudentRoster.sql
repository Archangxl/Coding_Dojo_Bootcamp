-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema studentroster
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema studentroster
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `studentroster` DEFAULT CHARACTER SET utf8 ;
USE `studentroster` ;

-- -----------------------------------------------------
-- Table `studentroster`.`dorms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentroster`.`dorms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dorm_name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `studentroster`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `studentroster`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `dorm_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_students_dorms_idx` (`dorm_id` ASC) VISIBLE,
  CONSTRAINT `fk_students_dorms`
    FOREIGN KEY (`dorm_id`)
    REFERENCES `studentroster`.`dorms` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
