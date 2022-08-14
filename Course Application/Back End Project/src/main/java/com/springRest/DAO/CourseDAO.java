package com.springRest.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springRest.DTO.Course;

public interface CourseDAO extends JpaRepository<Course, Long> {

	

}
